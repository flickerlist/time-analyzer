// Generated from lib/grammar/TimeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `TimeParser`.
 */
export interface TimeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `EnDateWeekAroundAlias`
	 * labeled alternative in `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 */
	enterEnDateWeekAroundAlias?: (ctx: EnDateWeekAroundAliasContext) => void;
	/**
	 * Exit a parse tree produced by the `EnDateWeekAroundAlias`
	 * labeled alternative in `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 */
	exitEnDateWeekAroundAlias?: (ctx: EnDateWeekAroundAliasContext) => void;

	/**
	 * Enter a parse tree produced by the `EnDateWeekAroundStep`
	 * labeled alternative in `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 */
	enterEnDateWeekAroundStep?: (ctx: EnDateWeekAroundStepContext) => void;
	/**
	 * Exit a parse tree produced by the `EnDateWeekAroundStep`
	 * labeled alternative in `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 */
	exitEnDateWeekAroundStep?: (ctx: EnDateWeekAroundStepContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodWeekDayNode`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodWeekDayNode?: (ctx: ZhPeriodWeekDayNodeContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodWeekDayNode`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodWeekDayNode?: (ctx: ZhPeriodWeekDayNodeContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodMonthDayToMonthDay`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodMonthDayToMonthDay?: (ctx: ZhPeriodMonthDayToMonthDayContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodMonthDayToMonthDay`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodMonthDayToMonthDay?: (ctx: ZhPeriodMonthDayToMonthDayContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodDateToDate`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodDateToDate?: (ctx: ZhPeriodDateToDateContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodDateToDate`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodDateToDate?: (ctx: ZhPeriodDateToDateContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodDateTimeToDateTime?: (ctx: ZhPeriodDateTimeToDateTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodDateTimeToDateTime?: (ctx: ZhPeriodDateTimeToDateTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodDateTimeToTime?: (ctx: ZhPeriodDateTimeToTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodDateTimeToTime?: (ctx: ZhPeriodDateTimeToTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodTimeToTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodTimeToTime?: (ctx: ZhPeriodTimeToTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodTimeToTime`
	 * labeled alternative in `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodTimeToTime?: (ctx: ZhPeriodTimeToTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `EnTimeOClock`
	 * labeled alternative in `TimeParser.enTime`.
	 * @param ctx the parse tree
	 */
	enterEnTimeOClock?: (ctx: EnTimeOClockContext) => void;
	/**
	 * Exit a parse tree produced by the `EnTimeOClock`
	 * labeled alternative in `TimeParser.enTime`.
	 * @param ctx the parse tree
	 */
	exitEnTimeOClock?: (ctx: EnTimeOClockContext) => void;

	/**
	 * Enter a parse tree produced by the `EnTimeNormal`
	 * labeled alternative in `TimeParser.enTime`.
	 * @param ctx the parse tree
	 */
	enterEnTimeNormal?: (ctx: EnTimeNormalContext) => void;
	/**
	 * Exit a parse tree produced by the `EnTimeNormal`
	 * labeled alternative in `TimeParser.enTime`.
	 * @param ctx the parse tree
	 */
	exitEnTimeNormal?: (ctx: EnTimeNormalContext) => void;

	/**
	 * Enter a parse tree produced by the `EnDateDayAroundAlias`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	enterEnDateDayAroundAlias?: (ctx: EnDateDayAroundAliasContext) => void;
	/**
	 * Exit a parse tree produced by the `EnDateDayAroundAlias`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	exitEnDateDayAroundAlias?: (ctx: EnDateDayAroundAliasContext) => void;

	/**
	 * Enter a parse tree produced by the `EnDateDayAroundAlias_2`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	enterEnDateDayAroundAlias_2?: (ctx: EnDateDayAroundAlias_2Context) => void;
	/**
	 * Exit a parse tree produced by the `EnDateDayAroundAlias_2`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	exitEnDateDayAroundAlias_2?: (ctx: EnDateDayAroundAlias_2Context) => void;

	/**
	 * Enter a parse tree produced by the `EnDateDayAroundStep`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	enterEnDateDayAroundStep?: (ctx: EnDateDayAroundStepContext) => void;
	/**
	 * Exit a parse tree produced by the `EnDateDayAroundStep`
	 * labeled alternative in `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	exitEnDateDayAroundStep?: (ctx: EnDateDayAroundStepContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhDateDayAroundAlias`
	 * labeled alternative in `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 */
	enterZhDateDayAroundAlias?: (ctx: ZhDateDayAroundAliasContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhDateDayAroundAlias`
	 * labeled alternative in `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 */
	exitZhDateDayAroundAlias?: (ctx: ZhDateDayAroundAliasContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhDateDayAroundStep`
	 * labeled alternative in `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 */
	enterZhDateDayAroundStep?: (ctx: ZhDateDayAroundStepContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhDateDayAroundStep`
	 * labeled alternative in `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 */
	exitZhDateDayAroundStep?: (ctx: ZhDateDayAroundStepContext) => void;

	/**
	 * Enter a parse tree produced by the `StdPeriodDateToDate`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	enterStdPeriodDateToDate?: (ctx: StdPeriodDateToDateContext) => void;
	/**
	 * Exit a parse tree produced by the `StdPeriodDateToDate`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	exitStdPeriodDateToDate?: (ctx: StdPeriodDateToDateContext) => void;

	/**
	 * Enter a parse tree produced by the `StdPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	enterStdPeriodDateTimeToDateTime?: (ctx: StdPeriodDateTimeToDateTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `StdPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	exitStdPeriodDateTimeToDateTime?: (ctx: StdPeriodDateTimeToDateTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `StdPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	enterStdPeriodDateTimeToTime?: (ctx: StdPeriodDateTimeToTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `StdPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	exitStdPeriodDateTimeToTime?: (ctx: StdPeriodDateTimeToTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `StdPeriodTimeToTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	enterStdPeriodTimeToTime?: (ctx: StdPeriodTimeToTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `StdPeriodTimeToTime`
	 * labeled alternative in `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	exitStdPeriodTimeToTime?: (ctx: StdPeriodTimeToTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhTimeHourStep`
	 * labeled alternative in `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	enterZhTimeHourStep?: (ctx: ZhTimeHourStepContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhTimeHourStep`
	 * labeled alternative in `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	exitZhTimeHourStep?: (ctx: ZhTimeHourStepContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhTimeMinuteStep`
	 * labeled alternative in `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	enterZhTimeMinuteStep?: (ctx: ZhTimeMinuteStepContext) => void;
	/**
	 * Exit a parse tree produced by the `ZhTimeMinuteStep`
	 * labeled alternative in `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	exitZhTimeMinuteStep?: (ctx: ZhTimeMinuteStepContext) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodWeekDayNode`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodWeekDayNode?: (ctx: EnPeriodWeekDayNodeContext) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodWeekDayNode`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodWeekDayNode?: (ctx: EnPeriodWeekDayNodeContext) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodMonthDayToMonthDay`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodMonthDayToMonthDay?: (ctx: EnPeriodMonthDayToMonthDayContext) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodMonthDayToMonthDay`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodMonthDayToMonthDay?: (ctx: EnPeriodMonthDayToMonthDayContext) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodDateTimeToDateTime?: (ctx: EnPeriodDateTimeToDateTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodDateTimeToDateTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodDateTimeToDateTime?: (ctx: EnPeriodDateTimeToDateTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodDateTimeToTime?: (ctx: EnPeriodDateTimeToTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodDateTimeToTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodDateTimeToTime?: (ctx: EnPeriodDateTimeToTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodDateToDate`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodDateToDate?: (ctx: EnPeriodDateToDateContext) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodDateToDate`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodDateToDate?: (ctx: EnPeriodDateToDateContext) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodTimeToTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodTimeToTime?: (ctx: EnPeriodTimeToTimeContext) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodTimeToTime`
	 * labeled alternative in `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodTimeToTime?: (ctx: EnPeriodTimeToTimeContext) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodWeek_1`
	 * labeled alternative in `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodWeek_1?: (ctx: EnPeriodWeek_1Context) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodWeek_1`
	 * labeled alternative in `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodWeek_1?: (ctx: EnPeriodWeek_1Context) => void;

	/**
	 * Enter a parse tree produced by the `EnPeriodWeek_2`
	 * labeled alternative in `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodWeek_2?: (ctx: EnPeriodWeek_2Context) => void;
	/**
	 * Exit a parse tree produced by the `EnPeriodWeek_2`
	 * labeled alternative in `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodWeek_2?: (ctx: EnPeriodWeek_2Context) => void;

	/**
	 * Enter a parse tree produced by the `EnTimeHourStep`
	 * labeled alternative in `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	enterEnTimeHourStep?: (ctx: EnTimeHourStepContext) => void;
	/**
	 * Exit a parse tree produced by the `EnTimeHourStep`
	 * labeled alternative in `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	exitEnTimeHourStep?: (ctx: EnTimeHourStepContext) => void;

	/**
	 * Enter a parse tree produced by the `EnTimeMinuteStep`
	 * labeled alternative in `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	enterEnTimeMinuteStep?: (ctx: EnTimeMinuteStepContext) => void;
	/**
	 * Exit a parse tree produced by the `EnTimeMinuteStep`
	 * labeled alternative in `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	exitEnTimeMinuteStep?: (ctx: EnTimeMinuteStepContext) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodWeek_1`
	 * labeled alternative in `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodWeek_1?: (ctx: ZhPeriodWeek_1Context) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodWeek_1`
	 * labeled alternative in `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodWeek_1?: (ctx: ZhPeriodWeek_1Context) => void;

	/**
	 * Enter a parse tree produced by the `ZhPeriodWeek_2`
	 * labeled alternative in `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodWeek_2?: (ctx: ZhPeriodWeek_2Context) => void;
	/**
	 * Exit a parse tree produced by the `ZhPeriodWeek_2`
	 * labeled alternative in `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodWeek_2?: (ctx: ZhPeriodWeek_2Context) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	enterStdPeriod?: (ctx: StdPeriodContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdPeriod`.
	 * @param ctx the parse tree
	 */
	exitStdPeriod?: (ctx: StdPeriodContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdDateTime`.
	 * @param ctx the parse tree
	 */
	enterStdDateTime?: (ctx: StdDateTimeContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdDateTime`.
	 * @param ctx the parse tree
	 */
	exitStdDateTime?: (ctx: StdDateTimeContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdDate`.
	 * @param ctx the parse tree
	 */
	enterStdDate?: (ctx: StdDateContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdDate`.
	 * @param ctx the parse tree
	 */
	exitStdDate?: (ctx: StdDateContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdTime`.
	 * @param ctx the parse tree
	 */
	enterStdTime?: (ctx: StdTimeContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdTime`.
	 * @param ctx the parse tree
	 */
	exitStdTime?: (ctx: StdTimeContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdDateConnector`.
	 * @param ctx the parse tree
	 */
	enterStdDateConnector?: (ctx: StdDateConnectorContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdDateConnector`.
	 * @param ctx the parse tree
	 */
	exitStdDateConnector?: (ctx: StdDateConnectorContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdTimeConnector`.
	 * @param ctx the parse tree
	 */
	enterStdTimeConnector?: (ctx: StdTimeConnectorContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdTimeConnector`.
	 * @param ctx the parse tree
	 */
	exitStdTimeConnector?: (ctx: StdTimeConnectorContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdDateTimeConnector`.
	 * @param ctx the parse tree
	 */
	enterStdDateTimeConnector?: (ctx: StdDateTimeConnectorContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdDateTimeConnector`.
	 * @param ctx the parse tree
	 */
	exitStdDateTimeConnector?: (ctx: StdDateTimeConnectorContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdPeriodTo`.
	 * @param ctx the parse tree
	 */
	enterStdPeriodTo?: (ctx: StdPeriodToContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdPeriodTo`.
	 * @param ctx the parse tree
	 */
	exitStdPeriodTo?: (ctx: StdPeriodToContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	enterEnPeriod?: (ctx: EnPeriodContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enPeriod`.
	 * @param ctx the parse tree
	 */
	exitEnPeriod?: (ctx: EnPeriodContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodWeek?: (ctx: EnPeriodWeekContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enPeriodWeek`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodWeek?: (ctx: EnPeriodWeekContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enDateTime`.
	 * @param ctx the parse tree
	 */
	enterEnDateTime?: (ctx: EnDateTimeContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enDateTime`.
	 * @param ctx the parse tree
	 */
	exitEnDateTime?: (ctx: EnDateTimeContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enDate`.
	 * @param ctx the parse tree
	 */
	enterEnDate?: (ctx: EnDateContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enDate`.
	 * @param ctx the parse tree
	 */
	exitEnDate?: (ctx: EnDateContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enDateNormal`.
	 * @param ctx the parse tree
	 */
	enterEnDateNormal?: (ctx: EnDateNormalContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enDateNormal`.
	 * @param ctx the parse tree
	 */
	exitEnDateNormal?: (ctx: EnDateNormalContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	enterEnDateAround?: (ctx: EnDateAroundContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enDateAround`.
	 * @param ctx the parse tree
	 */
	exitEnDateAround?: (ctx: EnDateAroundContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 */
	enterEnWeekDay?: (ctx: EnWeekDayContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enWeekDay`.
	 * @param ctx the parse tree
	 */
	exitEnWeekDay?: (ctx: EnWeekDayContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enMonthDay`.
	 * @param ctx the parse tree
	 */
	enterEnMonthDay?: (ctx: EnMonthDayContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enMonthDay`.
	 * @param ctx the parse tree
	 */
	exitEnMonthDay?: (ctx: EnMonthDayContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enYear`.
	 * @param ctx the parse tree
	 */
	enterEnYear?: (ctx: EnYearContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enYear`.
	 * @param ctx the parse tree
	 */
	exitEnYear?: (ctx: EnYearContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enMonth`.
	 * @param ctx the parse tree
	 */
	enterEnMonth?: (ctx: EnMonthContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enMonth`.
	 * @param ctx the parse tree
	 */
	exitEnMonth?: (ctx: EnMonthContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enDay`.
	 * @param ctx the parse tree
	 */
	enterEnDay?: (ctx: EnDayContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enDay`.
	 * @param ctx the parse tree
	 */
	exitEnDay?: (ctx: EnDayContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enTime`.
	 * @param ctx the parse tree
	 */
	enterEnTime?: (ctx: EnTimeContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enTime`.
	 * @param ctx the parse tree
	 */
	exitEnTime?: (ctx: EnTimeContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	enterEnDirectTimeAround?: (ctx: EnDirectTimeAroundContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	exitEnDirectTimeAround?: (ctx: EnDirectTimeAroundContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enStepAliasMark`.
	 * @param ctx the parse tree
	 */
	enterEnStepAliasMark?: (ctx: EnStepAliasMarkContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enStepAliasMark`.
	 * @param ctx the parse tree
	 */
	exitEnStepAliasMark?: (ctx: EnStepAliasMarkContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enPeriodTo`.
	 * @param ctx the parse tree
	 */
	enterEnPeriodTo?: (ctx: EnPeriodToContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enPeriodTo`.
	 * @param ctx the parse tree
	 */
	exitEnPeriodTo?: (ctx: EnPeriodToContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enAt`.
	 * @param ctx the parse tree
	 */
	enterEnAt?: (ctx: EnAtContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enAt`.
	 * @param ctx the parse tree
	 */
	exitEnAt?: (ctx: EnAtContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	enterZhPeriod?: (ctx: ZhPeriodContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhPeriod`.
	 * @param ctx the parse tree
	 */
	exitZhPeriod?: (ctx: ZhPeriodContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodWeek?: (ctx: ZhPeriodWeekContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhPeriodWeek`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodWeek?: (ctx: ZhPeriodWeekContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhDateTime`.
	 * @param ctx the parse tree
	 */
	enterZhDateTime?: (ctx: ZhDateTimeContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhDateTime`.
	 * @param ctx the parse tree
	 */
	exitZhDateTime?: (ctx: ZhDateTimeContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhDate`.
	 * @param ctx the parse tree
	 */
	enterZhDate?: (ctx: ZhDateContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhDate`.
	 * @param ctx the parse tree
	 */
	exitZhDate?: (ctx: ZhDateContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhDateNormal`.
	 * @param ctx the parse tree
	 */
	enterZhDateNormal?: (ctx: ZhDateNormalContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhDateNormal`.
	 * @param ctx the parse tree
	 */
	exitZhDateNormal?: (ctx: ZhDateNormalContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 */
	enterZhDateAround?: (ctx: ZhDateAroundContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhDateAround`.
	 * @param ctx the parse tree
	 */
	exitZhDateAround?: (ctx: ZhDateAroundContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhWeekDay`.
	 * @param ctx the parse tree
	 */
	enterZhWeekDay?: (ctx: ZhWeekDayContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhWeekDay`.
	 * @param ctx the parse tree
	 */
	exitZhWeekDay?: (ctx: ZhWeekDayContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhMonthDay`.
	 * @param ctx the parse tree
	 */
	enterZhMonthDay?: (ctx: ZhMonthDayContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhMonthDay`.
	 * @param ctx the parse tree
	 */
	exitZhMonthDay?: (ctx: ZhMonthDayContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhYear`.
	 * @param ctx the parse tree
	 */
	enterZhYear?: (ctx: ZhYearContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhYear`.
	 * @param ctx the parse tree
	 */
	exitZhYear?: (ctx: ZhYearContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhMonth`.
	 * @param ctx the parse tree
	 */
	enterZhMonth?: (ctx: ZhMonthContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhMonth`.
	 * @param ctx the parse tree
	 */
	exitZhMonth?: (ctx: ZhMonthContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhDay`.
	 * @param ctx the parse tree
	 */
	enterZhDay?: (ctx: ZhDayContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhDay`.
	 * @param ctx the parse tree
	 */
	exitZhDay?: (ctx: ZhDayContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhTime`.
	 * @param ctx the parse tree
	 */
	enterZhTime?: (ctx: ZhTimeContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhTime`.
	 * @param ctx the parse tree
	 */
	exitZhTime?: (ctx: ZhTimeContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhTimeNormal`.
	 * @param ctx the parse tree
	 */
	enterZhTimeNormal?: (ctx: ZhTimeNormalContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhTimeNormal`.
	 * @param ctx the parse tree
	 */
	exitZhTimeNormal?: (ctx: ZhTimeNormalContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	enterZhDirectTimeAround?: (ctx: ZhDirectTimeAroundContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhDirectTimeAround`.
	 * @param ctx the parse tree
	 */
	exitZhDirectTimeAround?: (ctx: ZhDirectTimeAroundContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhNumberValue`.
	 * @param ctx the parse tree
	 */
	enterZhNumberValue?: (ctx: ZhNumberValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhNumberValue`.
	 * @param ctx the parse tree
	 */
	exitZhNumberValue?: (ctx: ZhNumberValueContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhWeekValue`.
	 * @param ctx the parse tree
	 */
	enterZhWeekValue?: (ctx: ZhWeekValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhWeekValue`.
	 * @param ctx the parse tree
	 */
	exitZhWeekValue?: (ctx: ZhWeekValueContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhYearValue`.
	 * @param ctx the parse tree
	 */
	enterZhYearValue?: (ctx: ZhYearValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhYearValue`.
	 * @param ctx the parse tree
	 */
	exitZhYearValue?: (ctx: ZhYearValueContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhDateValue`.
	 * @param ctx the parse tree
	 */
	enterZhDateValue?: (ctx: ZhDateValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhDateValue`.
	 * @param ctx the parse tree
	 */
	exitZhDateValue?: (ctx: ZhDateValueContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhStepAliasMark`.
	 * @param ctx the parse tree
	 */
	enterZhStepAliasMark?: (ctx: ZhStepAliasMarkContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhStepAliasMark`.
	 * @param ctx the parse tree
	 */
	exitZhStepAliasMark?: (ctx: ZhStepAliasMarkContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhAroundAliasMark`.
	 * @param ctx the parse tree
	 */
	enterZhAroundAliasMark?: (ctx: ZhAroundAliasMarkContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhAroundAliasMark`.
	 * @param ctx the parse tree
	 */
	exitZhAroundAliasMark?: (ctx: ZhAroundAliasMarkContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhTimePeriodAliasMark`.
	 * @param ctx the parse tree
	 */
	enterZhTimePeriodAliasMark?: (ctx: ZhTimePeriodAliasMarkContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhTimePeriodAliasMark`.
	 * @param ctx the parse tree
	 */
	exitZhTimePeriodAliasMark?: (ctx: ZhTimePeriodAliasMarkContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhHourMark`.
	 * @param ctx the parse tree
	 */
	enterZhHourMark?: (ctx: ZhHourMarkContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhHourMark`.
	 * @param ctx the parse tree
	 */
	exitZhHourMark?: (ctx: ZhHourMarkContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhMinuteMark`.
	 * @param ctx the parse tree
	 */
	enterZhMinuteMark?: (ctx: ZhMinuteMarkContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhMinuteMark`.
	 * @param ctx the parse tree
	 */
	exitZhMinuteMark?: (ctx: ZhMinuteMarkContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhSecondMark`.
	 * @param ctx the parse tree
	 */
	enterZhSecondMark?: (ctx: ZhSecondMarkContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhSecondMark`.
	 * @param ctx the parse tree
	 */
	exitZhSecondMark?: (ctx: ZhSecondMarkContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhPeriodTo`.
	 * @param ctx the parse tree
	 */
	enterZhPeriodTo?: (ctx: ZhPeriodToContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhPeriodTo`.
	 * @param ctx the parse tree
	 */
	exitZhPeriodTo?: (ctx: ZhPeriodToContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhAt`.
	 * @param ctx the parse tree
	 */
	enterZhAt?: (ctx: ZhAtContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhAt`.
	 * @param ctx the parse tree
	 */
	exitZhAt?: (ctx: ZhAtContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.yearValue`.
	 * @param ctx the parse tree
	 */
	enterYearValue?: (ctx: YearValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.yearValue`.
	 * @param ctx the parse tree
	 */
	exitYearValue?: (ctx: YearValueContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.numberValue`.
	 * @param ctx the parse tree
	 */
	enterNumberValue?: (ctx: NumberValueContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.numberValue`.
	 * @param ctx the parse tree
	 */
	exitNumberValue?: (ctx: NumberValueContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.uselessWords`.
	 * @param ctx the parse tree
	 */
	enterUselessWords?: (ctx: UselessWordsContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.uselessWords`.
	 * @param ctx the parse tree
	 */
	exitUselessWords?: (ctx: UselessWordsContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.stdUselessWords`.
	 * @param ctx the parse tree
	 */
	enterStdUselessWords?: (ctx: StdUselessWordsContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.stdUselessWords`.
	 * @param ctx the parse tree
	 */
	exitStdUselessWords?: (ctx: StdUselessWordsContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.enUselessWords`.
	 * @param ctx the parse tree
	 */
	enterEnUselessWords?: (ctx: EnUselessWordsContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.enUselessWords`.
	 * @param ctx the parse tree
	 */
	exitEnUselessWords?: (ctx: EnUselessWordsContext) => void;

	/**
	 * Enter a parse tree produced by `TimeParser.zhUselessWords`.
	 * @param ctx the parse tree
	 */
	enterZhUselessWords?: (ctx: ZhUselessWordsContext) => void;
	/**
	 * Exit a parse tree produced by `TimeParser.zhUselessWords`.
	 * @param ctx the parse tree
	 */
	exitZhUselessWords?: (ctx: ZhUselessWordsContext) => void;
}

