import { StdDateTimeContext, StdDateContext, StdTimeContext, StdPeriodDateToDateContext, StdPeriodDateTimeToTimeContext, StdPeriodDateTimeToDateTimeContext, StdPeriodTimeToTimeContext } from "../grammar/TimeParser";
import { AnalyzerValue, AnalyzerDateTimeValue, AnalyzerDateValue, AnalyzerTimeValue, AnalyzerPeriodDateTimeValue, AnalyzerPeriodValueType } from "../model";
import { BasicTimeAnalyzerVisitor } from "./basic";
import { parsePeriodDateTimeToTime } from "./common.utils";
import { getCurrentYear, parseYearValue } from "./std.utils";
import { parseToInt, parseToMonthValue } from "../utils/convert";

export class StdTimeAnalyzerVisitor extends BasicTimeAnalyzerVisitor {

	visitStdPeriodDateToDate = (ctx: StdPeriodDateToDateContext): AnalyzerValue => {
    return new AnalyzerPeriodDateTimeValue(
      AnalyzerPeriodValueType.Date,
      this.visit(ctx.stdDate()[0]),
      this.visit(ctx.stdDate()[1]),
      ctx,
    );
  };

	visitStdPeriodDateTimeToDateTime = (ctx: StdPeriodDateTimeToDateTimeContext): AnalyzerValue => {
    return new AnalyzerPeriodDateTimeValue(
      AnalyzerPeriodValueType.DateTime,
      this.visit(ctx.stdDateTime()[0]),
      this.visit(ctx.stdDateTime()[1]),
      ctx,
    );
  };

	visitStdPeriodDateTimeToTime = (ctx: StdPeriodDateTimeToTimeContext): AnalyzerValue => {
    return parsePeriodDateTimeToTime(
      this.visit(ctx.stdDateTime()) as AnalyzerDateTimeValue,
      this.visit(ctx.stdTime()) as AnalyzerTimeValue,
      ctx,
    );
  };

	visitStdPeriodTimeToTime = (ctx: StdPeriodTimeToTimeContext): AnalyzerValue => {
    return new AnalyzerPeriodDateTimeValue(
      AnalyzerPeriodValueType.Time,
      this.visit(ctx.stdTime()[0]),
      this.visit(ctx.stdTime()[1]),
      ctx,
    );
  };

  visitStdDateTime = (ctx: StdDateTimeContext): AnalyzerValue => {
    return AnalyzerDateTimeValue.create(
      this.visit(ctx.stdDate()) as AnalyzerDateValue, 
      this.visit(ctx.stdTime()) as AnalyzerTimeValue,
    );
  };

  visitStdDate = (ctx: StdDateContext): AnalyzerValue => {
    const year = ctx.yearValue()
      ? parseYearValue(ctx.yearValue())
      : getCurrentYear();
    const month = parseToMonthValue(ctx.DateNumber()[0].text);
    const day = parseToInt(ctx.DateNumber()[1].text);

    if (month < 0) {
      return null;
    }

    return new AnalyzerDateValue(year, month, day, ctx);

  };
  
  visitStdTime = (ctx: StdTimeContext): AnalyzerValue => {
    const hour = parseToInt(ctx.DateNumber()[0].text);
    const minute = parseToInt(ctx.DateNumber()[1].text);
    const second = ctx.DateNumber()[2]? parseToInt(ctx.DateNumber()[2].text) : 0;
    
    return new AnalyzerTimeValue(hour, minute, second, ctx);
  };
}