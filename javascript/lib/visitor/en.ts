import { EnTimeHourStepContext, EnTimeHourStep_2Context, EnTimeMinuteStepContext, EnTimeMinuteStep_2Context, EnDateYearAroundAliasContext, EnDateYearAroundAlias_2Context, EnDateMonthAroundAliasContext, EnDateMonthAroundAlias_2Context, EnDateDayAroundAliasContext, EnDateDayAroundAlias_2Context, EnDateWeekAroundAliasContext, EnDateWeekAroundAlias_2Context, EnDateYearAroundStepContext, EnDateYearAroundStep_2Context, EnDateMonthAroundStepContext, EnDateDayAroundStepContext, EnDateDayAroundStep_2Context, EnDateWeekAroundStepContext, EnDateWeekAroundStep_2Context } from "lib/grammar/TimeParser";
import { ZhTimeAnalyzerVisitor } from "./zh";

export class EnTimeAnalyzerVisitor extends ZhTimeAnalyzerVisitor {
  visitEnTimeHourStep?: (ctx: EnTimeHourStepContext) => AnalyzerValue;
  visitEnTimeHourStep_2?: (ctx: EnTimeHourStep_2Context) => AnalyzerValue;
  visitEnTimeMinuteStep?: (ctx: EnTimeMinuteStepContext) => AnalyzerValue;
  visitEnTimeMinuteStep_2?: (ctx: EnTimeMinuteStep_2Context) => AnalyzerValue;
  visitEnDateYearAroundAlias?: (ctx: EnDateYearAroundAliasContext) => AnalyzerValue;
  visitEnDateYearAroundAlias_2?: (ctx: EnDateYearAroundAlias_2Context) => AnalyzerValue;
  visitEnDateMonthAroundAlias?: (ctx: EnDateMonthAroundAliasContext) => AnalyzerValue;
  visitEnDateMonthAroundAlias_2?: (ctx: EnDateMonthAroundAlias_2Context) => AnalyzerValue;
  visitEnDateDayAroundAlias?: (ctx: EnDateDayAroundAliasContext) => AnalyzerValue;
  visitEnDateDayAroundAlias_2?: (ctx: EnDateDayAroundAlias_2Context) => AnalyzerValue;
  visitEnDateWeekAroundAlias?: (ctx: EnDateWeekAroundAliasContext) => AnalyzerValue;
  visitEnDateWeekAroundAlias_2?: (ctx: EnDateWeekAroundAlias_2Context) => AnalyzerValue;
  visitEnDateYearAroundStep?: (ctx: EnDateYearAroundStepContext) => AnalyzerValue;
  visitEnDateYearAroundStep_2?: (ctx: EnDateYearAroundStep_2Context) => AnalyzerValue;
  visitEnDateMonthAroundStep?: (ctx: EnDateMonthAroundStepContext) => AnalyzerValue;
  visitEnDateDayAroundStep?: (ctx: EnDateDayAroundStepContext) => AnalyzerValue;
  visitEnDateDayAroundStep_2?: (ctx: EnDateDayAroundStep_2Context) => AnalyzerValue;
  visitEnDateWeekAroundStep?: (ctx: EnDateWeekAroundStepContext) => AnalyzerValue;
  visitEnDateWeekAroundStep_2?: (ctx: EnDateWeekAroundStep_2Context) => AnalyzerValue;
}