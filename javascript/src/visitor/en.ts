import { AnalyzerDateValue, AnalyzerUnexpectedError, AnalyzerDateTimeValue, AnalyzerTimeValue, AnalyzerValue, AnalyzerPeriodDateValue, AnalyzerPeriodDateTimeValue, AnalyzerPeriodTimeValue } from '../model';
import { EnTimeHourStepContext, EnTimeMinuteStepContext, EnDateDayAroundAliasContext, EnDateDayAroundAlias_2Context, EnDateWeekAroundAliasContext, EnDateDayAroundStepContext, EnDateWeekAroundStepContext, EnMonthDayContext, EnPeriodTimeToTimeContext, EnPeriodDateToDateContext, EnDateNormalContext, EnDateTimeContext, EnTimeNormalContext, EnTimeOClockContext, EnMonthContext, EnYearContext, EnPeriodMonthDayToMonthDayContext, EnPeriodWeek_1Context, EnPeriodWeek_2Context, EnPeriodDateTimeToDateTimeContext, EnPeriodDateTimeToTimeContext } from "../grammar/TimeParser";
import { parseEnAroundDayWord, parseEnAroundWord, parseEnDay, parseEnMonthValue, parseEnStepAliasMark, parseEnWeekValue, parseEnWeekValueToDate } from "./en.utils";
import { computedAroundTime, getCurrentYear, parseNumberValueContext, parseYearValue, parsePeriodDateTimeToTime } from "./common.utils";
import { ZhTimeAnalyzerVisitor } from "./zh";
import { parseToInt } from '../utils/convert';

export class EnTimeAnalyzerVisitor extends ZhTimeAnalyzerVisitor {

  //// enPeriod
	visitEnPeriodDateToDate(ctx: EnPeriodDateToDateContext): AnalyzerValue | null {
    const start = this.visit(ctx.enDate()[0]) as AnalyzerDateValue;
    const end = this.visit(ctx.enDate()[1]) as AnalyzerDateValue;
    if (!start || !end) {
      return null;
    }
    return new AnalyzerPeriodDateValue(
      start,
      end,
      ctx,
    );
  };
	visitEnPeriodDateTimeToDateTime(ctx: EnPeriodDateTimeToDateTimeContext): AnalyzerValue | null {
    const start = this.visit(ctx.enDateTime()[0]) as AnalyzerDateTimeValue;
    const end = this.visit(ctx.enDateTime()[1]) as AnalyzerDateTimeValue;
    if (!start || !end) {
      return null;
    }
    return new AnalyzerPeriodDateTimeValue(
      start,
      end,
      ctx,
    );
  };
	visitEnPeriodDateTimeToTime (ctx: EnPeriodDateTimeToTimeContext): AnalyzerValue | null {
    return parsePeriodDateTimeToTime(
      this.visit(ctx.enDateTime()) as AnalyzerDateTimeValue,
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
      ctx,
    );
  };
	visitEnPeriodTimeToTime (ctx: EnPeriodTimeToTimeContext): AnalyzerValue | null {
    let date: AnalyzerDateValue = null;
    if (ctx.enDate()) {
      date = this.visit(ctx.enDate()) as AnalyzerDateValue;
    }
    const start = this.visit(ctx.enTime()[0]) as AnalyzerTimeValue;
    const end = this.visit(ctx.enTime()[1]) as AnalyzerTimeValue;
    if (!start || !end) {
      return null;
    }
    if (date) {
      return new AnalyzerPeriodDateTimeValue(
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
    return new AnalyzerPeriodTimeValue(
      start,
      end,
      ctx,
    );
  };
	visitEnPeriodMonthDayToMonthDay (ctx: EnPeriodMonthDayToMonthDayContext): AnalyzerValue | null {
    const months = ctx.enMonth().map((item) => this.visit(item) as AnalyzerDateValue);
    const days = ctx.enDay().map((item) => parseEnDay(item));

    if (!months[0]
      || (months.length > 1 && !months[1])
      || !days[0] || days[0] < 1 || days[0] > 31
      || !days[1] || days[1] < 1 || days[1] > 31) {
      return null;
    }

    if (ctx.enYear()) {
      const year = this.visit(ctx.enYear()) as AnalyzerDateValue;
      months.map((item) => item.year = year.year);
    }
    const start = months[0];
    const end = months[1] || start;
    return new AnalyzerPeriodDateValue(
      new AnalyzerDateValue(
        start.year,
        start.month,
        days[0],
      ),
      new AnalyzerDateValue(
        end.year,
        end.month,
        days[1],
      ),
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
    
    return new AnalyzerPeriodDateValue(
      startDate,
      endDate,
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

    return new AnalyzerPeriodDateValue(
      startDate,
      endDate,
      ctx,
    );
  };

  //// enDateTime
	visitEnDateTime(ctx: EnDateTimeContext): AnalyzerValue | null {
    const value = AnalyzerDateTimeValue.create(
      this.visit(ctx.enDate()) as AnalyzerDateValue, 
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
    );
    if (!value) {
      return null;
    }
    if (ctx.EnAfternoonWord()) {
      if(value.hour < 12) {
        value.hour += 12;
      }
    }
    return value;
  };

  //// enDateNormal
	visitEnDateNormal (ctx: EnDateNormalContext): AnalyzerValue | null {
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
	visitEnTimeNormal(ctx: EnTimeNormalContext): AnalyzerValue | null {
    const value = this.visit(ctx.stdTime()) as AnalyzerTimeValue;
    if (!value) {
      return null;
    }
    if (ctx.EnAfternoonWord()) {
      if(value.hour < 12) {
        value.hour += 12;
      }
    }
    return value;
  };
  
	visitEnTimeOClock(ctx: EnTimeOClockContext): AnalyzerValue | null {
    const now = new Date();
    now.setMinutes(0, 0, 0)
    let hour = parseToInt(ctx.DateNumber().text);
    if (hour >= 24 || hour < 0) {
      return null;
    }
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
    const time = new Date();
    time.setDate(time.getDate() + parseEnAroundWord(ctx.EnAroundWord()));
    return AnalyzerDateValue.fromDateTime(time, ctx);
  };
  visitEnDateDayAroundAlias_2(ctx: EnDateDayAroundAlias_2Context): AnalyzerValue {
    const time = new Date();
    time.setDate(time.getDate() + parseEnAroundDayWord(ctx.EnAroundDayWord()));
    return AnalyzerDateValue.fromDateTime(time, ctx);
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
  
	visitEnMonthDay (ctx: EnMonthDayContext): AnalyzerDateValue | null {
    const month = this.visit(ctx.enMonth()) as AnalyzerDateValue;
    const day = parseEnDay(ctx.enDay());
    if (!month || !day || day <= 0 || day > 31) {
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
    throw new AnalyzerUnexpectedError();
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
    throw new AnalyzerUnexpectedError();
  };
}