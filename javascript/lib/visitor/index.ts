import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ZhTimeHourStepContext, ZhTimeMinuteStepContext, EnTimeHourStepContext, EnTimeHourStep_2Context, EnTimeMinuteStepContext, EnTimeMinuteStep_2Context, EnDateYearAroundAliasContext, EnDateYearAroundAlias_2Context, EnDateMonthAroundAliasContext, EnDateMonthAroundAlias_2Context, EnDateDayAroundAliasContext, EnDateDayAroundAlias_2Context, EnDateWeekAroundAliasContext, EnDateWeekAroundAlias_2Context, EnDateYearAroundStepContext, EnDateYearAroundStep_2Context, EnDateMonthAroundStepContext, EnDateDayAroundStepContext, EnDateDayAroundStep_2Context, EnDateWeekAroundStepContext, EnDateWeekAroundStep_2Context, ZhDateYearAroundAliasContext, ZhDateMonthAroundAliasContext, ZhDateDayAroundAliasContext, ZhDateWeekAroundAliasContext, ZhDateYearAroundStepContext, ZhDateMonthAroundStepContext, ZhDateDayAroundStepContext, ZhDateWeekAroundStepContext, ProgramContext, StatementListContext, StatementContext, StdContext, StdDateTimeContext, StdDateContext, StdTimeContext, StdDateConnectorContext, StdTimeConnectorContext, StdDateTimeConnectorContext, EnContext, EnDateTimeContext, EnDateContext, EnDateNormalContext, EnDateAroundContext, EnMonthDayContext, EnDayContext, EnTimeContext, EnDirectTimeAroundContext, EnAroundMarkContext, ZhContext, ZhDateTimeContext, ZhDateContext, ZhDateNormalContext, ZhDateAroundContext, ZhDateMonthDayContext, ZhDateDayContext, ZhWeekDayValueContext, ZhMonthDayMarkContext, ZhAroundAliasMarkContext, ZhTimeContext, ZhTimeNormalContext, ZhTimePeriodAliasMarkContext, ZhHourMarkContext, ZhMinuteMarkContext, ZhSecondMarkContext, ZhDirectTimeAroundContext, ZhDateValueContext, ZhAroundStepMarkContext, YearValueContext, StepValueContext, UselessWordsContext, StdUselessWordsContext, EnUselessWordsContext, ZhUselessWordsContext } from "lib/grammar/TimeParser";
import { TimeParserVisitor } from "lib/grammar/TimeParserVisitor";

export class TimeAnalyzerVisitor implements TimeParserVisitor<AnalyzerValue> {
  visitZhTimeHourStep?: (ctx: ZhTimeHourStepContext) => AnalyzerValue;
  visitZhTimeMinuteStep?: (ctx: ZhTimeMinuteStepContext) => AnalyzerValue;
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
  visitZhDateYearAroundAlias?: (ctx: ZhDateYearAroundAliasContext) => AnalyzerValue;
  visitZhDateMonthAroundAlias?: (ctx: ZhDateMonthAroundAliasContext) => AnalyzerValue;
  visitZhDateDayAroundAlias?: (ctx: ZhDateDayAroundAliasContext) => AnalyzerValue;
  visitZhDateWeekAroundAlias?: (ctx: ZhDateWeekAroundAliasContext) => AnalyzerValue;
  visitZhDateYearAroundStep?: (ctx: ZhDateYearAroundStepContext) => AnalyzerValue;
  visitZhDateMonthAroundStep?: (ctx: ZhDateMonthAroundStepContext) => AnalyzerValue;
  visitZhDateDayAroundStep?: (ctx: ZhDateDayAroundStepContext) => AnalyzerValue;
  visitZhDateWeekAroundStep?: (ctx: ZhDateWeekAroundStepContext) => AnalyzerValue;
  visitProgram?: (ctx: ProgramContext) => AnalyzerValue;
  visitStatementList?: (ctx: StatementListContext) => AnalyzerValue;
  visitStatement?: (ctx: StatementContext) => AnalyzerValue;
  visitStd?: (ctx: StdContext) => AnalyzerValue;
  visitStdDateTime?: (ctx: StdDateTimeContext) => AnalyzerValue;
  visitStdDate?: (ctx: StdDateContext) => AnalyzerValue;
  visitStdTime?: (ctx: StdTimeContext) => AnalyzerValue;
  visitStdDateConnector?: (ctx: StdDateConnectorContext) => AnalyzerValue;
  visitStdTimeConnector?: (ctx: StdTimeConnectorContext) => AnalyzerValue;
  visitStdDateTimeConnector?: (ctx: StdDateTimeConnectorContext) => AnalyzerValue;
  visitEn?: (ctx: EnContext) => AnalyzerValue;
  visitEnDateTime?: (ctx: EnDateTimeContext) => AnalyzerValue;
  visitEnDate?: (ctx: EnDateContext) => AnalyzerValue;
  visitEnDateNormal?: (ctx: EnDateNormalContext) => AnalyzerValue;
  visitEnDateAround?: (ctx: EnDateAroundContext) => AnalyzerValue;
  visitEnMonthDay?: (ctx: EnMonthDayContext) => AnalyzerValue;
  visitEnDay?: (ctx: EnDayContext) => AnalyzerValue;
  visitEnTime?: (ctx: EnTimeContext) => AnalyzerValue;
  visitEnDirectTimeAround?: (ctx: EnDirectTimeAroundContext) => AnalyzerValue;
  visitEnAroundMark?: (ctx: EnAroundMarkContext) => AnalyzerValue;
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
  visitYearValue?: (ctx: YearValueContext) => AnalyzerValue;
  visitStepValue?: (ctx: StepValueContext) => AnalyzerValue;
  visitUselessWords?: (ctx: UselessWordsContext) => AnalyzerValue;
  visitStdUselessWords?: (ctx: StdUselessWordsContext) => AnalyzerValue;
  visitEnUselessWords?: (ctx: EnUselessWordsContext) => AnalyzerValue;
  visitZhUselessWords?: (ctx: ZhUselessWordsContext) => AnalyzerValue;
  visit(tree: ParseTree): AnalyzerValue {
    throw new Error("Method not implemented.");
  }
  visitChildren(node: RuleNode): AnalyzerValue {
    throw new Error("Method not implemented.");
  }
  visitTerminal(node: TerminalNode): AnalyzerValue {
    throw new Error("Method not implemented.");
  }
  visitErrorNode(node: ErrorNode): AnalyzerValue {
    throw new Error("Method not implemented.");
  }
  
}