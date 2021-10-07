// Generated from lib/grammar/TimeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { EnDateWeekAroundAliasContext } from "./TimeParser";
import { EnDateWeekAroundStepContext } from "./TimeParser";
import { ZhPeriodWeekDayNodeContext } from "./TimeParser";
import { ZhPeriodMonthDayToMonthDayContext } from "./TimeParser";
import { ZhPeriodDateToDateContext } from "./TimeParser";
import { ZhPeriodDateTimeToDateTimeContext } from "./TimeParser";
import { ZhPeriodDateTimeToTimeContext } from "./TimeParser";
import { ZhPeriodTimeToTimeContext } from "./TimeParser";
import { EnTimeOClockContext } from "./TimeParser";
import { EnTimeNormalContext } from "./TimeParser";
import { EnDateDayAroundAliasContext } from "./TimeParser";
import { EnDateDayAroundAlias_2Context } from "./TimeParser";
import { EnDateDayAroundStepContext } from "./TimeParser";
import { ZhDateDayAroundAliasContext } from "./TimeParser";
import { ZhDateDayAroundStepContext } from "./TimeParser";
import { StdPeriodDateToDateContext } from "./TimeParser";
import { StdPeriodDateTimeToDateTimeContext } from "./TimeParser";
import { StdPeriodDateTimeToTimeContext } from "./TimeParser";
import { StdPeriodTimeToTimeContext } from "./TimeParser";
import { ZhTimeHourStepContext } from "./TimeParser";
import { ZhTimeMinuteStepContext } from "./TimeParser";
import { EnPeriodWeekDayNodeContext } from "./TimeParser";
import { EnPeriodMonthDayToMonthDayContext } from "./TimeParser";
import { EnPeriodDateTimeToDateTimeContext } from "./TimeParser";
import { EnPeriodDateTimeToTimeContext } from "./TimeParser";
import { EnPeriodDateToDateContext } from "./TimeParser";
import { EnPeriodTimeToTimeContext } from "./TimeParser";
import { EnPeriodWeek_1Context } from "./TimeParser";
import { EnPeriodWeek_2Context } from "./TimeParser";
import { EnTimeHourStepContext } from "./TimeParser";
import { EnTimeMinuteStepContext } from "./TimeParser";
import { ZhPeriodWeek_1Context } from "./TimeParser";
import { ZhPeriodWeek_2Context } from "./TimeParser";
import { ProgramContext } from "./TimeParser";
import { StatementListContext } from "./TimeParser";
import { StatementContext } from "./TimeParser";
import { StdPeriodContext } from "./TimeParser";
import { StdDateTimeContext } from "./TimeParser";
import { StdDateContext } from "./TimeParser";
import { StdTimeContext } from "./TimeParser";
import { StdDateConnectorContext } from "./TimeParser";
import { StdTimeConnectorContext } from "./TimeParser";
import { StdDateTimeConnectorContext } from "./TimeParser";
import { StdPeriodToContext } from "./TimeParser";
import { EnPeriodContext } from "./TimeParser";
import { EnPeriodWeekContext } from "./TimeParser";
import { EnDateTimeContext } from "./TimeParser";
import { EnDateContext } from "./TimeParser";
import { EnDateNormalContext } from "./TimeParser";
import { EnDateAroundContext } from "./TimeParser";
import { EnWeekDayContext } from "./TimeParser";
import { EnMonthDayContext } from "./TimeParser";
import { EnYearContext } from "./TimeParser";
import { EnMonthContext } from "./TimeParser";
import { EnDayContext } from "./TimeParser";
import { EnTimeContext } from "./TimeParser";
import { EnDirectTimeAroundContext } from "./TimeParser";
import { EnStepAliasMarkContext } from "./TimeParser";
import { EnPeriodToContext } from "./TimeParser";
import { EnAtContext } from "./TimeParser";
import { ZhPeriodContext } from "./TimeParser";
import { ZhPeriodWeekContext } from "./TimeParser";
import { ZhDateTimeContext } from "./TimeParser";
import { ZhDateContext } from "./TimeParser";
import { ZhDateNormalContext } from "./TimeParser";
import { ZhDateAroundContext } from "./TimeParser";
import { ZhWeekDayContext } from "./TimeParser";
import { ZhMonthDayContext } from "./TimeParser";
import { ZhYearContext } from "./TimeParser";
import { ZhMonthContext } from "./TimeParser";
import { ZhDayContext } from "./TimeParser";
import { ZhTimeContext } from "./TimeParser";
import { ZhTimeNormalContext } from "./TimeParser";
import { ZhDirectTimeAroundContext } from "./TimeParser";
import { ZhNumberValueContext } from "./TimeParser";
import { ZhWeekValueContext } from "./TimeParser";
import { ZhYearValueContext } from "./TimeParser";
import { ZhDateValueContext } from "./TimeParser";
import { ZhStepAliasMarkContext } from "./TimeParser";
import { ZhAroundAliasMarkContext } from "./TimeParser";
import { ZhTimePeriodAliasMarkContext } from "./TimeParser";
import { ZhHourMarkContext } from "./TimeParser";
import { ZhMinuteMarkContext } from "./TimeParser";
import { ZhSecondMarkContext } from "./TimeParser";
import { ZhPeriodToContext } from "./TimeParser";
import { ZhAtContext } from "./TimeParser";
import { YearValueContext } from "./TimeParser";
import { NumberValueContext } from "./TimeParser";
import { UselessWordsContext } from "./TimeParser";
import { StdUselessWordsContext } from "./TimeParser";
import { EnUselessWordsContext } from "./TimeParser";
import { ZhUselessWordsContext } from "./TimeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TimeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TimeParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `EnDateWeekAroundAlias`
	 * labeled alternative in `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateWeekAroundAlias?: (ctx: EnDateWeekAroundAliasContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnDateWeekAroundStep`
	 * labeled alternative in `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateWeekAroundStep?: (ctx: EnDateWeekAroundStepContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodWeekDayNode`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodWeekDayNode?: (ctx: ZhPeriodWeekDayNodeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodMonthDayToMonthDay`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodMonthDayToMonthDay?: (ctx: ZhPeriodMonthDayToMonthDayContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodDateToDate`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodDateToDate?: (ctx: ZhPeriodDateToDateContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodDateTimeToDateTime?: (ctx: ZhPeriodDateTimeToDateTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodDateTimeToTime?: (ctx: ZhPeriodDateTimeToTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodTimeToTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodTimeToTime?: (ctx: ZhPeriodTimeToTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnTimeOClock`
	 * labeled alternative in `TimeParser.enTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnTimeOClock?: (ctx: EnTimeOClockContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnTimeNormal`
	 * labeled alternative in `TimeParser.enTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnTimeNormal?: (ctx: EnTimeNormalContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnDateDayAroundAlias`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateDayAroundAlias?: (ctx: EnDateDayAroundAliasContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnDateDayAroundAlias_2`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateDayAroundAlias_2?: (ctx: EnDateDayAroundAlias_2Context) => Result;

	/**
	 * Visit a parse tree produced by the `EnDateDayAroundStep`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateDayAroundStep?: (ctx: EnDateDayAroundStepContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhDateDayAroundAlias`
	 * labeled alternative in `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDateDayAroundAlias?: (ctx: ZhDateDayAroundAliasContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhDateDayAroundStep`
	 * labeled alternative in `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDateDayAroundStep?: (ctx: ZhDateDayAroundStepContext) => Result;

	/**
	 * Visit a parse tree produced by the `StdPeriodDateToDate`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdPeriodDateToDate?: (ctx: StdPeriodDateToDateContext) => Result;

	/**
	 * Visit a parse tree produced by the `StdPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdPeriodDateTimeToDateTime?: (ctx: StdPeriodDateTimeToDateTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `StdPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdPeriodDateTimeToTime?: (ctx: StdPeriodDateTimeToTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `StdPeriodTimeToTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdPeriodTimeToTime?: (ctx: StdPeriodTimeToTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhTimeHourStep`
	 * labeled alternative in `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhTimeHourStep?: (ctx: ZhTimeHourStepContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhTimeMinuteStep`
	 * labeled alternative in `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhTimeMinuteStep?: (ctx: ZhTimeMinuteStepContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodWeekDayNode`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodWeekDayNode?: (ctx: EnPeriodWeekDayNodeContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodMonthDayToMonthDay`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodMonthDayToMonthDay?: (ctx: EnPeriodMonthDayToMonthDayContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodDateTimeToDateTime?: (ctx: EnPeriodDateTimeToDateTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodDateTimeToTime?: (ctx: EnPeriodDateTimeToTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodDateToDate`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodDateToDate?: (ctx: EnPeriodDateToDateContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodTimeToTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodTimeToTime?: (ctx: EnPeriodTimeToTimeContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodWeek_1`
	 * labeled alternative in `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodWeek_1?: (ctx: EnPeriodWeek_1Context) => Result;

	/**
	 * Visit a parse tree produced by the `EnPeriodWeek_2`
	 * labeled alternative in `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodWeek_2?: (ctx: EnPeriodWeek_2Context) => Result;

	/**
	 * Visit a parse tree produced by the `EnTimeHourStep`
	 * labeled alternative in `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnTimeHourStep?: (ctx: EnTimeHourStepContext) => Result;

	/**
	 * Visit a parse tree produced by the `EnTimeMinuteStep`
	 * labeled alternative in `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnTimeMinuteStep?: (ctx: EnTimeMinuteStepContext) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodWeek_1`
	 * labeled alternative in `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodWeek_1?: (ctx: ZhPeriodWeek_1Context) => Result;

	/**
	 * Visit a parse tree produced by the `ZhPeriodWeek_2`
	 * labeled alternative in `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodWeek_2?: (ctx: ZhPeriodWeek_2Context) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdPeriod?: (ctx: StdPeriodContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdDateTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdDateTime?: (ctx: StdDateTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdDate?: (ctx: StdDateContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdTime?: (ctx: StdTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdDateConnector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdDateConnector?: (ctx: StdDateConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdTimeConnector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdTimeConnector?: (ctx: StdTimeConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdDateTimeConnector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdDateTimeConnector?: (ctx: StdDateTimeConnectorContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdPeriodTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdPeriodTo?: (ctx: StdPeriodToContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriod?: (ctx: EnPeriodContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodWeek?: (ctx: EnPeriodWeekContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enDateTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateTime?: (ctx: EnDateTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDate?: (ctx: EnDateContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enDateNormal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateNormal?: (ctx: EnDateNormalContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDateAround?: (ctx: EnDateAroundContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnWeekDay?: (ctx: EnWeekDayContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enMonthDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnMonthDay?: (ctx: EnMonthDayContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enYear`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnYear?: (ctx: EnYearContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enMonth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnMonth?: (ctx: EnMonthContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDay?: (ctx: EnDayContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnTime?: (ctx: EnTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnDirectTimeAround?: (ctx: EnDirectTimeAroundContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enStepAliasMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnStepAliasMark?: (ctx: EnStepAliasMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enPeriodTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnPeriodTo?: (ctx: EnPeriodToContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enAt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnAt?: (ctx: EnAtContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriod?: (ctx: ZhPeriodContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodWeek?: (ctx: ZhPeriodWeekContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhDateTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDateTime?: (ctx: ZhDateTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDate?: (ctx: ZhDateContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhDateNormal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDateNormal?: (ctx: ZhDateNormalContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDateAround?: (ctx: ZhDateAroundContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhWeekDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhWeekDay?: (ctx: ZhWeekDayContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhMonthDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhMonthDay?: (ctx: ZhMonthDayContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhYear`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhYear?: (ctx: ZhYearContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhMonth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhMonth?: (ctx: ZhMonthContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDay?: (ctx: ZhDayContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhTime?: (ctx: ZhTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhTimeNormal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhTimeNormal?: (ctx: ZhTimeNormalContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDirectTimeAround?: (ctx: ZhDirectTimeAroundContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhNumberValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhNumberValue?: (ctx: ZhNumberValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhWeekValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhWeekValue?: (ctx: ZhWeekValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhYearValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhYearValue?: (ctx: ZhYearValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhDateValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhDateValue?: (ctx: ZhDateValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhStepAliasMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhStepAliasMark?: (ctx: ZhStepAliasMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhAroundAliasMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhAroundAliasMark?: (ctx: ZhAroundAliasMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhTimePeriodAliasMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhTimePeriodAliasMark?: (ctx: ZhTimePeriodAliasMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhHourMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhHourMark?: (ctx: ZhHourMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhMinuteMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhMinuteMark?: (ctx: ZhMinuteMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhSecondMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhSecondMark?: (ctx: ZhSecondMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhPeriodTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhPeriodTo?: (ctx: ZhPeriodToContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhAt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhAt?: (ctx: ZhAtContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.yearValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYearValue?: (ctx: YearValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.numberValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberValue?: (ctx: NumberValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.uselessWords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUselessWords?: (ctx: UselessWordsContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.stdUselessWords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStdUselessWords?: (ctx: StdUselessWordsContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.enUselessWords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnUselessWords?: (ctx: EnUselessWordsContext) => Result;

	/**
	 * Visit a parse tree produced by `TimeParser.zhUselessWords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZhUselessWords?: (ctx: ZhUselessWordsContext) => Result;
}

