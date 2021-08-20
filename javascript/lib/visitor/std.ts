import { StdDateTimeContext, StdDateContext, StdTimeContext, StdPeriodDateToDateContext, StdPeriodDateTimeToTimeContext, StdPeriodDateTimeToDateTimeContext, StdPeriodTimeToTimeContext } from "../grammar/TimeParser";
import { AnalyzerValue, AnalyzerDateTimeValue, AnalyzerDateValue, AnalyzerTimeValue, SourceMapPosition, AnalyzerPeriodDateTimeValue } from "../model";
import { BasicTimeAnalyzerVisitor } from "./basic";
import { getCurrentYear, parseYearValue } from "./std.utils";

export class StdTimeAnalyzerVisitor extends BasicTimeAnalyzerVisitor {

	visitStdPeriodDateToDate = (ctx: StdPeriodDateToDateContext): AnalyzerValue => {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.stdDate()[0]),
      this.visit(ctx.stdDate()[1]), {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };

	visitStdPeriodDateTimeToDateTime = (ctx: StdPeriodDateTimeToDateTimeContext): AnalyzerValue => {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.stdDateTime()[0]),
      this.visit(ctx.stdDateTime()[1]), {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };

	visitStdPeriodDateTimeToTime = (ctx: StdPeriodDateTimeToTimeContext): AnalyzerValue => {
    const startDateTime = this.visit(ctx.stdDateTime()) as AnalyzerDateTimeValue;
    const endTime = this.visit(ctx.stdTime()) as AnalyzerTimeValue;
    const endDateTime = new AnalyzerDateTimeValue(
      startDateTime.year,
      startDateTime.month,
      startDateTime.day,
      endTime.hour,
      endTime.minute,
      endTime.second, {
        mapPosition: null,
      }
    );
    
    return new AnalyzerPeriodDateTimeValue(
      startDateTime,
      endDateTime, {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };

	visitStdPeriodTimeToTime = (ctx: StdPeriodTimeToTimeContext): AnalyzerValue => {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.stdTime()[0]),
      this.visit(ctx.stdTime()[1]), {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };

  visitStdDateTime = (ctx: StdDateTimeContext): AnalyzerValue => {
    return AnalyzerDateTimeValue.create(
      this.visit(ctx.stdDate()) as AnalyzerDateValue, 
      this.visit(ctx.stdTime()) as AnalyzerTimeValue,
    );
  };

  visitStdDate = (ctx: StdDateContext): AnalyzerValue => {
    const year = ctx.yearValue() ? parseYearValue(ctx.yearValue()) : getCurrentYear();
    const month = parseInt(ctx.DateNumber()[0].text);
    const day = parseInt(ctx.DateNumber()[1].text);

    return new AnalyzerDateValue(year, month, day, {
      mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
    });

  };
  
  visitStdTime = (ctx: StdTimeContext): AnalyzerValue => {
    const hour = parseInt(ctx.DateNumber()[0].text);
    const minute = parseInt(ctx.DateNumber()[1].text);
    const second = ctx.DateNumber()[2]? parseInt(ctx.DateNumber()[2].text) : 0;
    
    return new AnalyzerTimeValue(hour, minute, second, {
      mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
    });
  };

  // visitStdDateConnector = (ctx: StdDateConnectorContext) => AnalyzerValue;
  // visitStdTimeConnector = (ctx: StdTimeConnectorContext) => AnalyzerValue;
  // visitStdDateTimeConnector = (ctx: StdDateTimeConnectorContext) => AnalyzerValue;
}