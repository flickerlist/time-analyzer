import { AnalyzerDateValue, AnalyzerPeriodValue, AnalyzerPeriodValueType } from './../model';
import { EnTimeHourStepContext, EnTimeMinuteStepContext, EnDateDayAroundAliasContext, EnDateDayAroundAlias_2Context, EnDateWeekAroundAliasContext, EnDateDayAroundStepContext, EnDateWeekAroundStepContext, EnMonthDayContext, EnPeriodTimeToTimeContext, EnPeriodDateToDateContext, EnDateNormalContext, EnDateTimeContext, EnTimeNormalContext, EnTimeOClockContext, EnMonthContext, EnYearContext, EnPeriodMonthDayToMonthDayContext, EnPeriodWeek_1Context, EnPeriodWeek_2Context, EnPeriodDateTimeToDateTimeContext, EnPeriodDateTimeToTimeContext } from "../grammar/TimeParser";
import { AnalyzerDateTimeValue, AnalyzerTimeValue, AnalyzerValue } from "../model";
import { parseEnAroundDayWord, parseEnAroundWord, parseEnDay, parseEnMonthValue, parseEnStepAliasMark, parseEnWeekValue, parseEnWeekValueToDate } from "./en.utils";
import { computedAroundTime, getCurrentYear, parseNumberValueContext, parseYearValue, parsePeriodToTime } from "./common.utils";
import { ZhTimeAnalyzerVisitor } from "./zh";
import { parseToInt } from '../utils/convert';

export class EnTimeAnalyzerVisitor extends ZhTimeAnalyzerVisitor {

  //// enPeriod
	visitEnPeriodDateToDate(ctx: EnPeriodDateToDateContext): AnalyzerValue {
    return new AnalyzerPeriodValue(
      AnalyzerPeriodValueType.Date,
      this.visit(ctx.enDate()[0]),
      this.visit(ctx.enDate()[1]),
      ctx,
    );
  };
	visitEnPeriodDateTimeToDateTime(ctx: EnPeriodDateTimeToDateTimeContext): AnalyzerValue {
    return new AnalyzerPeriodValue(
      AnalyzerPeriodValueType.DateTime,
      this.visit(ctx.enDateTime()[0]),
      this.visit(ctx.enDateTime()[1]),
      ctx,
    );
  };
	visitEnPeriodDateTimeToTime (ctx: EnPeriodDateTimeToTimeContext): AnalyzerValue {
    return parsePeriodToTime(
      this.visit(ctx.enDateTime()) as AnalyzerDateTimeValue,
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
      ctx,
    );
  };
	visitEnPeriodTimeToTime (ctx: EnPeriodTimeToTimeContext): AnalyzerValue {
    let date: AnalyzerDateValue = null;
    if (ctx.enDate()) {
      date = this.visit(ctx.enDate()) as AnalyzerDateValue;
    }
    const start = this.visit(ctx.enTime()[0]) as AnalyzerTimeValue;
    const end = this.visit(ctx.enTime()[1]) as AnalyzerTimeValue;
    if (date) {
      return new AnalyzerPeriodValue(
        AnalyzerPeriodValueType.DateTime,
        new AnalyzerDateTimeValue(
          date.year, date.month, date.day,
          start.hour, start.minute, start.second,
        ),
        new AnalyzerDateTimeValue(
          date.year, date.month, date.day,
          end.hour, end.minute, end.second,
        ),
      )
    }
    return new AnalyzerPeriodValue(
      AnalyzerPeriodValueType.Time,
      start,
      end,
      ctx,
    );
  };
	visitEnPeriodMonthDayToMonthDay (ctx: EnPeriodMonthDayToMonthDayContext): AnalyzerValue {
    const month = this.visit(ctx.enMonth()) as AnalyzerDateValue;
    if (ctx.enYear()) {
      const year = this.visit(ctx.enYear()) as AnalyzerDateValue;
      month.year = year.year;
    }
    const startDay = parseEnDay(ctx.enDay()[0]);
    const endDay = parseEnDay(ctx.enDay()[1]);
    return new AnalyzerPeriodValue(
      AnalyzerPeriodValueType.Date,
      new AnalyzerDateValue(
        month.year,
        month.month,
        startDay,
      ),
      new AnalyzerDateValue(
        month.year,
        month.month,
        endDay,
      ),
      ctx,
    );
  };
  visitEnPeriodWeek_2(ctx: EnPeriodWeek_2Context): AnalyzerValue {

    let startAroundValue = 0;
    let endAroundValue = 0;

    if (ctx.EnAroundWord()) {
      startAroundValue = parseEnAroundWord(ctx.EnAroundWord()[0]);
      endAroundValue = ctx.EnAroundWord().length >= 2
        ? parseEnAroundWord(ctx.EnAroundWord()[1])
        : startAroundValue;
    }

    const startDate = parseEnWeekValueToDate(
      parseEnWeekValue(ctx.EnWeekValue()[0]),
      startAroundValue,
    );
    const endDate = parseEnWeekValueToDate(
      parseEnWeekValue(ctx.EnWeekValue()[1]),
      endAroundValue,
    );

    return new AnalyzerPeriodValue(
      AnalyzerPeriodValueType.Date,
      startDate,
      endDate,
      ctx,
    );
  };
	visitEnPeriodWeek_1(ctx: EnPeriodWeek_1Context): AnalyzerValue {
    let aroundValue = parseNumberValueContext(ctx.numberValue()) * parseEnStepAliasMark(ctx.enStepAliasMark());

    const startDate = parseEnWeekValueToDate(
      parseEnWeekValue(ctx.EnWeekValue()[0]),
      aroundValue,
    );
    const endDate = parseEnWeekValueToDate(
      parseEnWeekValue(ctx.EnWeekValue()[1]),
      aroundValue,
    );
    
    return new AnalyzerPeriodValue(
      AnalyzerPeriodValueType.Date,
      startDate,
      endDate,
      ctx,
    );
  };


  //// enDateTime
	visitEnDateTime(ctx: EnDateTimeContext): AnalyzerValue {
    const value = AnalyzerDateTimeValue.create(
      this.visit(ctx.enDate()) as AnalyzerDateValue, 
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
    );
    if (ctx.EnAfternoonWord()) {
      if(value.hour < 12) {
        value.hour += 12;
      }
    }
    return value;
  };

  //// enDateNormal
	visitEnDateNormal (ctx: EnDateNormalContext): AnalyzerValue {
    if (ctx.enWeekDay()) {
      return this.visit(ctx.enWeekDay());
    }
    const value = this.visit(ctx.enMonthDay()) as AnalyzerDateValue | null;
    if (!value) {
      return null;
    }
    if (ctx.enYear()) {
      const year = this.visit(ctx.enYear()) as AnalyzerDateValue;
      value.year = year.year;
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

  visitEnTimeHourStep (ctx: EnTimeHourStepContext): AnalyzerValue {
    const values = ctx.numberValue().map((item) => parseNumberValueContext(item));
    return AnalyzerDateTimeValue.fromDateTime(
      computedAroundTime(
        parseEnStepAliasMark(ctx.enStepAliasMark()),
        { hour: values[0], minute: values[1] || 0 },
      ),
      ctx,
    );
  };

  visitEnTimeMinuteStep(ctx: EnTimeMinuteStepContext): AnalyzerValue {
    return AnalyzerDateTimeValue.fromDateTime(
      computedAroundTime(
        parseEnStepAliasMark(ctx.enStepAliasMark()),
        { minute: parseNumberValueContext(ctx.numberValue()) },
      ),
      ctx,
    );
  };

  //// enDateAround

  /// EnDateDayAroundAlias
  visitEnDateDayAroundAlias(ctx: EnDateDayAroundAliasContext): AnalyzerValue {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() + parseEnAroundWord(ctx.EnAroundWord()));
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      ctx,
    );
  };
  visitEnDateDayAroundAlias_2(ctx: EnDateDayAroundAlias_2Context): AnalyzerValue {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() + parseEnAroundDayWord(ctx.EnAroundDayWord()));
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      ctx,
    );
  };

  /// EnDateWeekAroundAlias
  visitEnDateWeekAroundAlias (ctx: EnDateWeekAroundAliasContext): AnalyzerValue {
    return parseEnWeekValueToDate(
      parseEnWeekValue(ctx.EnWeekValue()),
      parseEnAroundWord(ctx.EnAroundWord()),
      ctx,
    );
  };

  /// EnDateDayAroundStep
  visitEnDateDayAroundStep(ctx: EnDateDayAroundStepContext): AnalyzerValue {
    const now = new Date();
    const days = parseNumberValueContext(ctx.numberValue());
    const offsetType = parseEnStepAliasMark(ctx.enStepAliasMark());
    now.setDate(now.getDate() + days * offsetType);
    return AnalyzerDateValue.fromDateTime(now, ctx);
  };

  /// EnDateWeekAroundStep
  visitEnDateWeekAroundStep(ctx: EnDateWeekAroundStepContext): AnalyzerValue {
    return parseEnWeekValueToDate(
      parseEnWeekValue(ctx.EnWeekValue()),
      parseNumberValueContext(ctx.numberValue())
        * parseEnStepAliasMark(ctx.enStepAliasMark()),
      ctx,
    );
  };
  
	visitEnMonthDay (ctx: EnMonthDayContext): AnalyzerDateValue {
    const month = this.visit(ctx.enMonth()) as AnalyzerDateValue;
    const day = parseEnDay(ctx.enDay());
    if (day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      month.year,
      month.month,
      day,
      ctx,
    );
  };

	visitEnYear(ctx: EnYearContext): AnalyzerDateValue {
    if (ctx.EnAroundWord()) {
      const aroundValue = parseEnAroundWord(ctx.EnAroundWord());
      return new AnalyzerDateValue(
        getCurrentYear() + aroundValue,
        -1,
        0,
      );
    }
    if (ctx.numberValue()) {
      const offsetType = parseEnStepAliasMark(ctx.enStepAliasMark());
      
      return new AnalyzerDateValue(
        getCurrentYear() + parseNumberValueContext(ctx.numberValue()) * offsetType,
        -1,
        0,
      );
    }
    if (ctx.yearValue()) {
      return new AnalyzerDateValue(
        parseYearValue(ctx.yearValue()),
        -1,
        0,
      );
    }
    throw new Error('Unexpected error');
  };

	visitEnMonth(ctx: EnMonthContext): AnalyzerDateValue {
    if (ctx.EnAroundWord() && ctx.EnMonthWord()) {
      const date = new Date();
      date.setMonth(date.getMonth() + parseEnAroundWord(ctx.EnAroundWord()));
      return new AnalyzerDateValue(
        date.getFullYear(),
        date.getMonth(),
        0,
      );
    }

    if (ctx.EnMonthValue()) {
      const date = new Date();
      date.setMonth(parseEnMonthValue(ctx.EnMonthValue()));
      if (ctx.EnAroundWord()) {
        date.setFullYear(date.getFullYear() + parseEnAroundWord(ctx.EnAroundWord()));
      }
      return new AnalyzerDateValue(
        date.getFullYear(),
        date.getMonth(),
        0,
      );
    }

    if (ctx.numberValue()) {
      const date = new Date();
      date.setMonth(date.getMonth() + parseNumberValueContext(ctx.numberValue()) * parseEnStepAliasMark(ctx.enStepAliasMark()));
      return new AnalyzerDateValue(
        date.getFullYear(),
        date.getMonth(),
        0,
      );
    }
    throw new Error('Unexpected error');
  };
}