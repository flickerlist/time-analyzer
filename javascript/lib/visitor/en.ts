import { AnalyzerDateValue, AnalyzerPeriodDateTimeValue } from './../model';
import { EnTimeHourStepContext, EnTimeMinuteStepContext, EnDateYearAroundAliasContext, EnDateMonthAroundAliasContext, EnDateDayAroundAliasContext, EnDateDayAroundAlias_2Context, EnDateWeekAroundAliasContext, EnDateYearAroundStepContext, EnDateMonthAroundStepContext, EnDateDayAroundStepContext, EnDateWeekAroundStepContext, EnMonthDayContext, EnPeriodTimeToTimeContext, EnPeriodDateTimeToTimeContext, EnPeriodDateTimeToDateTimeContext, EnPeriodDateToDateContext, EnDateNormalContext, EnDateTimeContext, EnTimeNormalContext, EnTimeOClockContext, EnDateMonthAroundAlias_2Context } from "../grammar/TimeParser";
import { AnalyzerDateTimeValue, AnalyzerTimeValue, AnalyzerValue } from "../model";
import { parseEnAroundDayWord, parseEnAroundWord, parseEnDay, parseEnMonthValue, parseEnStepAliasMark, parseEnWeekValue } from "./en.utils";
import { computedAroundTime, getCurrentYear, parseStepValue } from "./std.utils";
import { ZhTimeAnalyzerVisitor } from "./zh";
import { parsePeriodDateTimeToTime, parseWeekDay_startAtSunday } from './common.utils';
import { parseToInt } from '../utils/convert';

export class EnTimeAnalyzerVisitor extends ZhTimeAnalyzerVisitor {

  //// enPeriodDateTime
	visitEnPeriodDateToDate(ctx: EnPeriodDateToDateContext): AnalyzerValue {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.enDate()[0]),
      this.visit(ctx.enDate()[1]), {
        context: ctx,
      }
    );
  };
	visitEnPeriodDateTimeToDateTime(ctx: EnPeriodDateTimeToDateTimeContext): AnalyzerValue {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.enDateTime()[0]),
      this.visit(ctx.enDateTime()[1]), {
        context: ctx,
      }
    );
  };
	visitEnPeriodDateTimeToTime (ctx: EnPeriodDateTimeToTimeContext): AnalyzerValue {
    return parsePeriodDateTimeToTime(
      this.visit(ctx.enDateTime()) as AnalyzerDateTimeValue,
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
      ctx,
    );
  };
	visitEnPeriodTimeToTime (ctx: EnPeriodTimeToTimeContext): AnalyzerValue {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.enTime()[0]),
      this.visit(ctx.enTime()[1]), {
        context: ctx,
      }
    );
  };


  //// enDateTime
	visitEnDateTime(ctx: EnDateTimeContext): AnalyzerValue {
    return AnalyzerDateTimeValue.create(
      this.visit(ctx.enDate()) as AnalyzerDateValue, 
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
    );
  };

  //// enDateNormal
	visitEnDateNormal (ctx: EnDateNormalContext): AnalyzerValue {
    const value = this.visit(ctx.enMonthDay()) as AnalyzerDateValue | null;
    if (!value) {
      return null;
    }
    const year = ctx.YearNumber()
      ? parseToInt(ctx.YearNumber().text)
      : getCurrentYear();
    if (year) {
      value.year = year;
    }
    value.resetContext(ctx);
    return value;
  };

  //// enTime
	visitEnTimeNormal(ctx: EnTimeNormalContext): AnalyzerValue {
    const value = this.visit(ctx.stdTime()) as AnalyzerTimeValue;
    if (ctx.EnAfternoonWord()) {
      if(value.hour < 12) {
        value.hour += 12;
      }
    }
    return value;
  };
  
	visitEnTimeOClock(ctx: EnTimeOClockContext): AnalyzerValue {
    const now = new Date();
    now.setMinutes(0, 0, 0)
    let hour = parseToInt(ctx.DateNumber().text);
    if (ctx.EnAfternoonWord()) {
      if (hour < 12) {
        hour += 12;
      }
    }
    now.setHours(hour);
    return AnalyzerTimeValue.fromDateTime(now, ctx);
  };

  //// enDirectTimeAround

  /// enTimeHourStep
  visitEnTimeHourStep (ctx: EnTimeHourStepContext): AnalyzerValue {
    const values = ctx.stepValue().map((item) => parseStepValue(item));
    return AnalyzerDateTimeValue.fromDateTime(
      computedAroundTime(
        parseEnStepAliasMark(ctx. enStepAliasMark()),
        { hour: values[0], minute: values[1] || 0 },
      ),
      ctx,
    );
  };

  /// enTimeMinuteStep
  visitEnTimeMinuteStep(ctx: EnTimeMinuteStepContext): AnalyzerValue {
    return AnalyzerDateTimeValue.fromDateTime(
      computedAroundTime(
        parseEnStepAliasMark(ctx.enStepAliasMark()),
        { minute: parseStepValue(ctx.stepValue()) },
      ),
      ctx,
    );
  };

  //// enDateAround

  /// EnDateYearAroundAlias
  visitEnDateYearAroundAlias (ctx: EnDateYearAroundAliasContext): AnalyzerValue {
    const date = this.visit(ctx.enMonthDay()) as AnalyzerDateValue;
    if (!date) {
      return null;
    }
    const year = parseEnAroundWord(ctx.EnAroundWord());
    if (year) {
      date.year = date.year + year;
    }
    date.resetContext(ctx);
    return date;
  };

  /// EnDateMonthAroundAlias
  visitEnDateMonthAroundAlias(ctx: EnDateMonthAroundAliasContext): AnalyzerValue {
    const aroundType = parseEnAroundWord(ctx.EnAroundWord());
    const now = new Date();
    const year = getCurrentYear();
    const month = now.getMonth() + aroundType;
    const day = parseEnDay(ctx.enDay());
    if (day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      year,
      month,
      day, {
        context: ctx,
      }
    );
  };

	visitEnDateMonthAroundAlias_2(ctx: EnDateMonthAroundAlias_2Context): AnalyzerValue {
    const aroundType = parseEnAroundWord(ctx.EnAroundWord());
    const year = getCurrentYear() + aroundType;
    const month = parseEnMonthValue(ctx.EnMonthValue());
    const day = parseEnDay(ctx.enDay());
    if (day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      year,
      month,
      day, {
        context: ctx,
      }
    );
  };

  /// EnDateDayAroundAlias
  visitEnDateDayAroundAlias(ctx: EnDateDayAroundAliasContext): AnalyzerValue {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() + parseEnAroundWord(ctx.EnAroundWord()));
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(), {
        context: ctx,
      }
    );
  };
  visitEnDateDayAroundAlias_2(ctx: EnDateDayAroundAlias_2Context): AnalyzerValue {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() + parseEnAroundDayWord(ctx.EnAroundDayWord()));
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(), {
        context: ctx,
      }
    );
  };

  /// EnDateWeekAroundAlias
  visitEnDateWeekAroundAlias (ctx: EnDateWeekAroundAliasContext): AnalyzerValue {
    const roundType = parseEnAroundWord(ctx.EnAroundWord());
    const weekValue = parseEnWeekValue(ctx.EnWeekValue());
    if (weekValue === -1) {
      return null;
    }
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const split = weekValue - parseWeekDay_startAtSunday(now.getDay());
    now.setDate(now.getDate() + 7 * roundType + split);
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(), {
        context: ctx,
      }
    );
  };

  /// EnDateYearAroundStep
  visitEnDateYearAroundStep (ctx: EnDateYearAroundStepContext): AnalyzerValue {
    const date = this.visit(ctx.enMonthDay()) as AnalyzerDateValue;
    date.year = getCurrentYear() + parseStepValue(ctx.stepValue()) * parseEnStepAliasMark(ctx.enStepAliasMark());
    return date;
  };

  /// EnDateMonthAroundStep
  visitEnDateMonthAroundStep(ctx: EnDateMonthAroundStepContext): AnalyzerValue {
    const now = new Date();
    const splitMonth = parseEnStepAliasMark(ctx.enStepAliasMark()) * parseStepValue(ctx.stepValue());
    now.setMonth(now.getMonth() + splitMonth )
    const day = parseEnDay(ctx.enDay());
    if (day <= 0) {
      return;
    }
    now.setDate(day);
    return AnalyzerDateValue.fromDateTime(now, ctx);
  };

  /// EnDateDayAroundStep
  visitEnDateDayAroundStep(ctx: EnDateDayAroundStepContext): AnalyzerValue {
    const now = new Date();
    const days = parseStepValue(ctx.stepValue());
    const aroundType = parseEnStepAliasMark(ctx.enStepAliasMark());
    now.setDate(now.getDate() + days * aroundType);
    return AnalyzerDateValue.fromDateTime(now, ctx);
  };

  /// EnDateWeekAroundStep
  visitEnDateWeekAroundStep(ctx: EnDateWeekAroundStepContext): AnalyzerValue {
    const now = new Date();
    const weekValue = parseEnWeekValue(ctx.EnWeekValue());
    now.setDate(now.getDate() + parseWeekDay_startAtSunday(now.getDay()) - weekValue);
    now.setDate(now.getDate() + parseStepValue(ctx.stepValue()) * 7);
    return AnalyzerDateValue.fromDateTime(now, ctx);
  };
  
	visitEnMonthDay (ctx: EnMonthDayContext): AnalyzerDateValue {
    const month = parseEnMonthValue(ctx.EnMonthValue());
    const day = parseEnDay(ctx.enDay());
    if (month < 0 && day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      getCurrentYear(),
      month,
      day, {
        context: ctx,
      }
    );
  };
}