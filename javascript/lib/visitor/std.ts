import { StdContext, StdDateTimeContext, StdDateContext, StdTimeContext, StdDateConnectorContext, StdTimeConnectorContext, StdDateTimeConnectorContext } from "lib/grammar/TimeParser";
import { BasicTimeAnalyzerVisitor } from "./basic";

export class StdTimeAnalyzerVisitor extends BasicTimeAnalyzerVisitor {
  visitStd?: (ctx: StdContext) => AnalyzerValue;
  visitStdDateTime?: (ctx: StdDateTimeContext) => AnalyzerValue;
  visitStdDate?: (ctx: StdDateContext) => AnalyzerValue;
  visitStdTime?: (ctx: StdTimeContext) => AnalyzerValue;
  visitStdDateConnector?: (ctx: StdDateConnectorContext) => AnalyzerValue;
  visitStdTimeConnector?: (ctx: StdTimeConnectorContext) => AnalyzerValue;
  visitStdDateTimeConnector?: (ctx: StdDateTimeConnectorContext) => AnalyzerValue;
}