import { ZhTimeHourStepContext, ZhTimeMinuteStepContext, ZhDateYearAroundAliasContext, ZhDateMonthAroundAliasContext, ZhDateDayAroundAliasContext, ZhDateWeekAroundAliasContext, ZhDateYearAroundStepContext, ZhDateMonthAroundStepContext, ZhDateDayAroundStepContext, ZhDateWeekAroundStepContext, ZhContext, ZhDateTimeContext, ZhDateContext, ZhDateNormalContext, ZhDateAroundContext, ZhDateMonthDayContext, ZhDateDayContext, ZhWeekDayValueContext, ZhMonthDayMarkContext, ZhAroundAliasMarkContext, ZhTimeContext, ZhTimeNormalContext, ZhTimePeriodAliasMarkContext, ZhHourMarkContext, ZhMinuteMarkContext, ZhSecondMarkContext, ZhDirectTimeAroundContext, ZhDateValueContext, ZhAroundStepMarkContext, ZhUselessWordsContext } from "lib/grammar/TimeParser";
import { StdTimeAnalyzerVisitor } from "./std";

export class ZhTimeAnalyzerVisitor extends StdTimeAnalyzerVisitor {
  visitZh?: (ctx: ZhContext) => AnalyzerValue;
  visitZhDateTime?: (ctx: ZhDateTimeContext) => AnalyzerValue;
  visitZhDate?: (ctx: ZhDateContext) => AnalyzerValue;
  visitZhDateNormal?: (ctx: ZhDateNormalContext) => AnalyzerValue;
  visitZhDateAround?: (ctx: ZhDateAroundContext) => AnalyzerValue;
  visitZhDateMonthDay?: (ctx: ZhDateMonthDayContext) => AnalyzerValue;
  visitZhDateDay?: (ctx: ZhDateDayContext) => AnalyzerValue;
  visitZhWeekDayValue?: (ctx: ZhWeekDayValueContext) => AnalyzerValue;
  visitZhMonthDayMark?: (ctx: ZhMonthDayMarkContext) => AnalyzerValue;
  visitZhAroundAliasMark?: (ctx: ZhAroundAliasMarkContext) => AnalyzerValue;
  visitZhTime?: (ctx: ZhTimeContext) => AnalyzerValue;
  visitZhTimeNormal?: (ctx: ZhTimeNormalContext) => AnalyzerValue;
  visitZhTimePeriodAliasMark?: (ctx: ZhTimePeriodAliasMarkContext) => AnalyzerValue;
  visitZhHourMark?: (ctx: ZhHourMarkContext) => AnalyzerValue;
  visitZhMinuteMark?: (ctx: ZhMinuteMarkContext) => AnalyzerValue;
  visitZhSecondMark?: (ctx: ZhSecondMarkContext) => AnalyzerValue;
  visitZhDirectTimeAround?: (ctx: ZhDirectTimeAroundContext) => AnalyzerValue;
  visitZhDateValue?: (ctx: ZhDateValueContext) => AnalyzerValue;
  visitZhAroundStepMark?: (ctx: ZhAroundStepMarkContext) => AnalyzerValue;
  visitZhUselessWords?: (ctx: ZhUselessWordsContext) => AnalyzerValue;
  visitZhTimeHourStep?: (ctx: ZhTimeHourStepContext) => AnalyzerValue;
  visitZhTimeMinuteStep?: (ctx: ZhTimeMinuteStepContext) => AnalyzerValue;
  visitZhDateYearAroundAlias?: (ctx: ZhDateYearAroundAliasContext) => AnalyzerValue;
  visitZhDateMonthAroundAlias?: (ctx: ZhDateMonthAroundAliasContext) => AnalyzerValue;
  visitZhDateDayAroundAlias?: (ctx: ZhDateDayAroundAliasContext) => AnalyzerValue;
  visitZhDateWeekAroundAlias?: (ctx: ZhDateWeekAroundAliasContext) => AnalyzerValue;
  visitZhDateYearAroundStep?: (ctx: ZhDateYearAroundStepContext) => AnalyzerValue;
  visitZhDateMonthAroundStep?: (ctx: ZhDateMonthAroundStepContext) => AnalyzerValue;
  visitZhDateDayAroundStep?: (ctx: ZhDateDayAroundStepContext) => AnalyzerValue;
  visitZhDateWeekAroundStep?: (ctx: ZhDateWeekAroundStepContext) => AnalyzerValue;
}