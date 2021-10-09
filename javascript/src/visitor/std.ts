import { StdDateTimeContext, StdDateContext, StdTimeContext, StdPeriodDateToDateContext, StdPeriodTimeToTimeContext, StdPeriodDateTimeToTimeContext, StdPeriodDateTimeToDateTimeContext } from "../grammar/TimeParser";
import { AnalyzerValue, AnalyzerDateTimeValue, AnalyzerDateValue, AnalyzerTimeValue, AnalyzerPeriodDateValue, AnalyzerPeriodDateTimeValue, AnalyzerPeriodTimeValue } from "../model";
import { BasicTimeAnalyzerVisitor } from "./basic";
import { getCurrentYear, parsePeriodDateTimeToTime, parseYearValue } from "./common.utils";
import { parseToInt, parseToMonthValue } from "../utils/convert";

export class StdTimeAnalyzerVisitor extends BasicTimeAnalyzerVisitor {

	visitStdPeriodDateToDate(ctx: StdPeriodDateToDateContext): AnalyzerValue | null {
    const start = this.visit(ctx.stdDate()[0]) as AnalyzerDateValue;
    const end = this.visit(ctx.stdDate()[1]) as AnalyzerDateValue;
    if (!start || !end) {
      return null;
    }
    return new AnalyzerPeriodDateValue(
      start,
      end,
      ctx,
    );
  };

	visitStdPeriodDateTimeToDateTime(ctx: StdPeriodDateTimeToDateTimeContext): AnalyzerValue | null {
    const start = this.visit(ctx.stdDateTime()[0]) as AnalyzerDateTimeValue;
    const end = this.visit(ctx.stdDateTime()[1]) as AnalyzerDateTimeValue;
    if (!start || !end) {
      return null;
    }
    return new AnalyzerPeriodDateTimeValue(
      start,
      end,
      ctx,
    );
  };

	visitStdPeriodDateTimeToTime(ctx: StdPeriodDateTimeToTimeContext): AnalyzerValue | null {
    return parsePeriodDateTimeToTime(
      this.visit(ctx.stdDateTime()) as AnalyzerDateTimeValue,
      this.visit(ctx.stdTime()) as AnalyzerTimeValue,
      ctx,
    );
  };

	visitStdPeriodTimeToTime(ctx: StdPeriodTimeToTimeContext): AnalyzerValue | null {
    let date: AnalyzerDateValue = null;
    if (ctx.stdDate()) {
      date = this.visit(ctx.stdDate()) as AnalyzerDateValue;
    }
    const start = this.visit(ctx.stdTime()[0]) as AnalyzerTimeValue;
    const end = this.visit(ctx.stdTime()[1]) as AnalyzerTimeValue;
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
        ctx,
      );
    }
    return new AnalyzerPeriodTimeValue(
      start,
      end,
      ctx,
    );
  };

  visitStdDateTime(ctx: StdDateTimeContext): AnalyzerValue {
    return AnalyzerDateTimeValue.create(
      this.visit(ctx.stdDate()) as AnalyzerDateValue, 
      this.visit(ctx.stdTime()) as AnalyzerTimeValue,
    );
  };

  visitStdDate(ctx: StdDateContext): AnalyzerValue | null {
    const year = ctx.yearValue()
      ? parseYearValue(ctx.yearValue())
      : getCurrentYear();
    const month = parseToMonthValue(ctx.DateNumber()[0].text);
    const day = parseToInt(ctx.DateNumber()[1].text);

    if (year < 0
      || month < 0 || month > 11
      || day < 1 || day > 31) {
      return null;
    }

    return new AnalyzerDateValue(year, month, day, ctx);
  };
  
  visitStdTime(ctx: StdTimeContext): AnalyzerTimeValue | null {
    const hour = parseToInt(ctx.DateNumber()[0].text);
    const minute = parseToInt(ctx.DateNumber()[1].text);
    const second = ctx.DateNumber()[2]? parseToInt(ctx.DateNumber()[2].text) : 0;

    if (hour >= 24 || hour < 0
      || minute >= 60 || minute < 0
      || second >= 60 || second < 0) {
      return null;
    }
    
    return new AnalyzerTimeValue(hour, minute, second, ctx);
  };
}