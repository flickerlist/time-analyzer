import { StdContext, StdDateTimeContext, StdDateContext, StdTimeContext, StdDateConnectorContext, StdTimeConnectorContext, StdDateTimeConnectorContext } from "../grammar/TimeParser";
import { AnalyzerValue, AnalyzerDateTimeValue, AnalyzerDateValue, AnalyzerTimeValue, SourceMapPosition } from "../model";
import { BasicTimeAnalyzerVisitor } from "./basic";
import { getCurrentYear, parseYearValue } from "./std.utils";

export class StdTimeAnalyzerVisitor extends BasicTimeAnalyzerVisitor {
  visitStd = (ctx: StdContext): AnalyzerValue => {
    return this.visitChildren(ctx);
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
      mapPosition: SourceMapPosition.fromInterval(ctx.sourceInterval),
    });

  };
  
  visitStdTime = (ctx: StdTimeContext): AnalyzerValue => {
    const hour = parseInt(ctx.DateNumber()[0].text);
    const minute = parseInt(ctx.DateNumber()[1].text);
    const second = ctx.DateNumber()[2]? parseInt(ctx.DateNumber()[2].text) : 0;
    
    return new AnalyzerTimeValue(hour, minute, second, {
      mapPosition: SourceMapPosition.fromInterval(ctx.sourceInterval),
    });
  };
  visitStdDateConnector?: (ctx: StdDateConnectorContext) => AnalyzerValue;
  visitStdTimeConnector?: (ctx: StdTimeConnectorContext) => AnalyzerValue;
  visitStdDateTimeConnector?: (ctx: StdDateTimeConnectorContext) => AnalyzerValue;
}