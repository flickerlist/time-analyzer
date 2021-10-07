// Generated from lib/grammar/TimeParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TimeParserListener } from "./TimeParserListener";
import { TimeParserVisitor } from "./TimeParserVisitor";


export class TimeParser extends Parser {
	public static readonly EnMonthValue = 1;
	public static readonly EnWeekValue = 2;
	public static readonly EnDayValue = 3;
	public static readonly EnAroundWord = 4;
	public static readonly EnAroundDayWord = 5;
	public static readonly EnBeforeWord = 6;
	public static readonly EnAfterWord = 7;
	public static readonly EnYearWord = 8;
	public static readonly EnMonthWord = 9;
	public static readonly EnDayWord = 10;
	public static readonly EnWeekWord = 11;
	public static readonly EnHourWord = 12;
	public static readonly EnMinuteWord = 13;
	public static readonly EnSecondWord = 14;
	public static readonly EnMorningWord = 15;
	public static readonly EnAfternoonWord = 16;
	public static readonly EnHourWholeWord = 17;
	public static readonly EnAtWord = 18;
	public static readonly EnAndWord = 19;
	public static readonly EnToWord = 20;
	public static readonly EnFrom = 21;
	public static readonly ZhValueWord = 22;
	public static readonly ZhAroundWord = 23;
	public static readonly ZhBeforeWord = 24;
	public static readonly ZhAfterWord = 25;
	public static readonly ZhYearWord = 26;
	public static readonly ZhMonthWord = 27;
	public static readonly ZhCountMonth = 28;
	public static readonly ZhDayWord = 29;
	public static readonly ZhDayWord_2 = 30;
	public static readonly ZhTian = 31;
	public static readonly ZhWeekWord = 32;
	public static readonly ZhHourWord = 33;
	public static readonly ZhHourWholeWord = 34;
	public static readonly ZhCountHour = 35;
	public static readonly ZhMinuteWord = 36;
	public static readonly ZhCountMinute = 37;
	public static readonly ZhSecondWord = 38;
	public static readonly ZhCountSecond = 39;
	public static readonly ZhMorningWord = 40;
	public static readonly ZhAfternoonWord = 41;
	public static readonly ZhToWord = 42;
	public static readonly ZhAtWord = 43;
	public static readonly ZhOf = 44;
	public static readonly ZhFrom = 45;
	public static readonly YearNumber = 46;
	public static readonly DateNumber = 47;
	public static readonly NormalNumber = 48;
	public static readonly MiddelConnectorWord = 49;
	public static readonly MiddelConnectorCurve = 50;
	public static readonly SlashConnectorWord = 51;
	public static readonly TimeConnectorWord = 52;
	public static readonly DateTimeConnectorWord = 53;
	public static readonly Comma = 54;
	public static readonly NEWLINE = 55;
	public static readonly WS = 56;
	public static readonly ANY = 57;
	public static readonly RULE_program = 0;
	public static readonly RULE_statementList = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_stdPeriod = 3;
	public static readonly RULE_stdDateTime = 4;
	public static readonly RULE_stdDate = 5;
	public static readonly RULE_stdTime = 6;
	public static readonly RULE_stdDateConnector = 7;
	public static readonly RULE_stdTimeConnector = 8;
	public static readonly RULE_stdDateTimeConnector = 9;
	public static readonly RULE_stdPeriodTo = 10;
	public static readonly RULE_enPeriod = 11;
	public static readonly RULE_enPeriodWeek = 12;
	public static readonly RULE_enDateTime = 13;
	public static readonly RULE_enDate = 14;
	public static readonly RULE_enDateNormal = 15;
	public static readonly RULE_enDateAround = 16;
	public static readonly RULE_enWeekDay = 17;
	public static readonly RULE_enMonthDay = 18;
	public static readonly RULE_enYear = 19;
	public static readonly RULE_enMonth = 20;
	public static readonly RULE_enDay = 21;
	public static readonly RULE_enTime = 22;
	public static readonly RULE_enDirectTimeAround = 23;
	public static readonly RULE_enStepAliasMark = 24;
	public static readonly RULE_enPeriodTo = 25;
	public static readonly RULE_enAt = 26;
	public static readonly RULE_zhPeriod = 27;
	public static readonly RULE_zhPeriodWeek = 28;
	public static readonly RULE_zhDateTime = 29;
	public static readonly RULE_zhDate = 30;
	public static readonly RULE_zhDateNormal = 31;
	public static readonly RULE_zhDateAround = 32;
	public static readonly RULE_zhWeekDay = 33;
	public static readonly RULE_zhMonthDay = 34;
	public static readonly RULE_zhYear = 35;
	public static readonly RULE_zhMonth = 36;
	public static readonly RULE_zhDay = 37;
	public static readonly RULE_zhTime = 38;
	public static readonly RULE_zhTimeNormal = 39;
	public static readonly RULE_zhDirectTimeAround = 40;
	public static readonly RULE_zhNumberValue = 41;
	public static readonly RULE_zhWeekValue = 42;
	public static readonly RULE_zhYearValue = 43;
	public static readonly RULE_zhDateValue = 44;
	public static readonly RULE_zhStepAliasMark = 45;
	public static readonly RULE_zhAroundAliasMark = 46;
	public static readonly RULE_zhTimePeriodAliasMark = 47;
	public static readonly RULE_zhHourMark = 48;
	public static readonly RULE_zhMinuteMark = 49;
	public static readonly RULE_zhSecondMark = 50;
	public static readonly RULE_zhPeriodTo = 51;
	public static readonly RULE_zhAt = 52;
	public static readonly RULE_yearValue = 53;
	public static readonly RULE_numberValue = 54;
	public static readonly RULE_uselessWords = 55;
	public static readonly RULE_stdUselessWords = 56;
	public static readonly RULE_enUselessWords = 57;
	public static readonly RULE_zhUselessWords = 58;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statementList", "statement", "stdPeriod", "stdDateTime", "stdDate", 
		"stdTime", "stdDateConnector", "stdTimeConnector", "stdDateTimeConnector", 
		"stdPeriodTo", "enPeriod", "enPeriodWeek", "enDateTime", "enDate", "enDateNormal", 
		"enDateAround", "enWeekDay", "enMonthDay", "enYear", "enMonth", "enDay", 
		"enTime", "enDirectTimeAround", "enStepAliasMark", "enPeriodTo", "enAt", 
		"zhPeriod", "zhPeriodWeek", "zhDateTime", "zhDate", "zhDateNormal", "zhDateAround", 
		"zhWeekDay", "zhMonthDay", "zhYear", "zhMonth", "zhDay", "zhTime", "zhTimeNormal", 
		"zhDirectTimeAround", "zhNumberValue", "zhWeekValue", "zhYearValue", "zhDateValue", 
		"zhStepAliasMark", "zhAroundAliasMark", "zhTimePeriodAliasMark", "zhHourMark", 
		"zhMinuteMark", "zhSecondMark", "zhPeriodTo", "zhAt", "yearValue", "numberValue", 
		"uselessWords", "stdUselessWords", "enUselessWords", "zhUselessWords",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'\u524D'", undefined, "'\u5E74'", "'\u6708'", 
		"'\u4E2A\u6708'", "'\u65E5'", undefined, "'\u5929'", undefined, undefined, 
		"'\u6574'", undefined, "'\u5206'", undefined, "'\u79D2'", undefined, undefined, 
		undefined, undefined, undefined, "'\u7684'", "'\u4ECE'", undefined, undefined, 
		undefined, "'-'", "'~'", "'/'", "':'", "'T'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EnMonthValue", "EnWeekValue", "EnDayValue", "EnAroundWord", 
		"EnAroundDayWord", "EnBeforeWord", "EnAfterWord", "EnYearWord", "EnMonthWord", 
		"EnDayWord", "EnWeekWord", "EnHourWord", "EnMinuteWord", "EnSecondWord", 
		"EnMorningWord", "EnAfternoonWord", "EnHourWholeWord", "EnAtWord", "EnAndWord", 
		"EnToWord", "EnFrom", "ZhValueWord", "ZhAroundWord", "ZhBeforeWord", "ZhAfterWord", 
		"ZhYearWord", "ZhMonthWord", "ZhCountMonth", "ZhDayWord", "ZhDayWord_2", 
		"ZhTian", "ZhWeekWord", "ZhHourWord", "ZhHourWholeWord", "ZhCountHour", 
		"ZhMinuteWord", "ZhCountMinute", "ZhSecondWord", "ZhCountSecond", "ZhMorningWord", 
		"ZhAfternoonWord", "ZhToWord", "ZhAtWord", "ZhOf", "ZhFrom", "YearNumber", 
		"DateNumber", "NormalNumber", "MiddelConnectorWord", "MiddelConnectorCurve", 
		"SlashConnectorWord", "TimeConnectorWord", "DateTimeConnectorWord", "Comma", 
		"NEWLINE", "WS", "ANY",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TimeParser._LITERAL_NAMES, TimeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TimeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TimeParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TimeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TimeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TimeParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TimeParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TimeParser.EnMonthValue) | (1 << TimeParser.EnWeekValue) | (1 << TimeParser.EnDayValue) | (1 << TimeParser.EnAroundWord) | (1 << TimeParser.EnAroundDayWord) | (1 << TimeParser.EnBeforeWord) | (1 << TimeParser.EnAfterWord) | (1 << TimeParser.EnYearWord) | (1 << TimeParser.EnMonthWord) | (1 << TimeParser.EnDayWord) | (1 << TimeParser.EnWeekWord) | (1 << TimeParser.EnHourWord) | (1 << TimeParser.EnMinuteWord) | (1 << TimeParser.EnSecondWord) | (1 << TimeParser.EnMorningWord) | (1 << TimeParser.EnAfternoonWord) | (1 << TimeParser.EnHourWholeWord) | (1 << TimeParser.EnAtWord) | (1 << TimeParser.EnAndWord) | (1 << TimeParser.EnToWord) | (1 << TimeParser.EnFrom) | (1 << TimeParser.ZhValueWord) | (1 << TimeParser.ZhAroundWord) | (1 << TimeParser.ZhBeforeWord) | (1 << TimeParser.ZhAfterWord) | (1 << TimeParser.ZhYearWord) | (1 << TimeParser.ZhMonthWord) | (1 << TimeParser.ZhCountMonth) | (1 << TimeParser.ZhDayWord) | (1 << TimeParser.ZhDayWord_2) | (1 << TimeParser.ZhTian))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TimeParser.ZhWeekWord - 32)) | (1 << (TimeParser.ZhHourWord - 32)) | (1 << (TimeParser.ZhHourWholeWord - 32)) | (1 << (TimeParser.ZhCountHour - 32)) | (1 << (TimeParser.ZhMinuteWord - 32)) | (1 << (TimeParser.ZhCountMinute - 32)) | (1 << (TimeParser.ZhSecondWord - 32)) | (1 << (TimeParser.ZhCountSecond - 32)) | (1 << (TimeParser.ZhMorningWord - 32)) | (1 << (TimeParser.ZhAfternoonWord - 32)) | (1 << (TimeParser.ZhAtWord - 32)) | (1 << (TimeParser.ZhOf - 32)) | (1 << (TimeParser.ZhFrom - 32)) | (1 << (TimeParser.YearNumber - 32)) | (1 << (TimeParser.DateNumber - 32)) | (1 << (TimeParser.NormalNumber - 32)) | (1 << (TimeParser.MiddelConnectorWord - 32)) | (1 << (TimeParser.SlashConnectorWord - 32)) | (1 << (TimeParser.TimeConnectorWord - 32)) | (1 << (TimeParser.DateTimeConnectorWord - 32)) | (1 << (TimeParser.Comma - 32)))) !== 0)) {
				{
				this.state = 118;
				this.statementList();
				}
			}

			this.state = 121;
			this.match(TimeParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TimeParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 125;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 123;
					this.statement();
					}
					break;

				case 2:
					{
					this.state = 124;
					this.uselessWords();
					}
					break;
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TimeParser.EnMonthValue) | (1 << TimeParser.EnWeekValue) | (1 << TimeParser.EnDayValue) | (1 << TimeParser.EnAroundWord) | (1 << TimeParser.EnAroundDayWord) | (1 << TimeParser.EnBeforeWord) | (1 << TimeParser.EnAfterWord) | (1 << TimeParser.EnYearWord) | (1 << TimeParser.EnMonthWord) | (1 << TimeParser.EnDayWord) | (1 << TimeParser.EnWeekWord) | (1 << TimeParser.EnHourWord) | (1 << TimeParser.EnMinuteWord) | (1 << TimeParser.EnSecondWord) | (1 << TimeParser.EnMorningWord) | (1 << TimeParser.EnAfternoonWord) | (1 << TimeParser.EnHourWholeWord) | (1 << TimeParser.EnAtWord) | (1 << TimeParser.EnAndWord) | (1 << TimeParser.EnToWord) | (1 << TimeParser.EnFrom) | (1 << TimeParser.ZhValueWord) | (1 << TimeParser.ZhAroundWord) | (1 << TimeParser.ZhBeforeWord) | (1 << TimeParser.ZhAfterWord) | (1 << TimeParser.ZhYearWord) | (1 << TimeParser.ZhMonthWord) | (1 << TimeParser.ZhCountMonth) | (1 << TimeParser.ZhDayWord) | (1 << TimeParser.ZhDayWord_2) | (1 << TimeParser.ZhTian))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TimeParser.ZhWeekWord - 32)) | (1 << (TimeParser.ZhHourWord - 32)) | (1 << (TimeParser.ZhHourWholeWord - 32)) | (1 << (TimeParser.ZhCountHour - 32)) | (1 << (TimeParser.ZhMinuteWord - 32)) | (1 << (TimeParser.ZhCountMinute - 32)) | (1 << (TimeParser.ZhSecondWord - 32)) | (1 << (TimeParser.ZhCountSecond - 32)) | (1 << (TimeParser.ZhMorningWord - 32)) | (1 << (TimeParser.ZhAfternoonWord - 32)) | (1 << (TimeParser.ZhAtWord - 32)) | (1 << (TimeParser.ZhOf - 32)) | (1 << (TimeParser.ZhFrom - 32)) | (1 << (TimeParser.YearNumber - 32)) | (1 << (TimeParser.DateNumber - 32)) | (1 << (TimeParser.NormalNumber - 32)) | (1 << (TimeParser.MiddelConnectorWord - 32)) | (1 << (TimeParser.SlashConnectorWord - 32)) | (1 << (TimeParser.TimeConnectorWord - 32)) | (1 << (TimeParser.DateTimeConnectorWord - 32)) | (1 << (TimeParser.Comma - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TimeParser.RULE_statement);
		let _la: number;
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 129;
					this.enAt();
					}
				}

				this.state = 132;
				this.enPeriod();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhAtWord) {
					{
					this.state = 133;
					this.zhAt();
					}
				}

				this.state = 136;
				this.zhPeriod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 137;
					this.enAt();
					}
				}

				this.state = 140;
				this.enDateTime();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhAtWord) {
					{
					this.state = 141;
					this.zhAt();
					}
				}

				this.state = 144;
				this.zhDateTime();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 145;
					this.enAt();
					}
				}

				this.state = 148;
				this.stdDateTime();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 149;
					this.enAt();
					}
				}

				this.state = 152;
				this.enDate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhAtWord) {
					{
					this.state = 153;
					this.zhAt();
					}
				}

				this.state = 156;
				this.zhDate();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 157;
					this.enAt();
					}
				}

				this.state = 160;
				this.enTime();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhAtWord) {
					{
					this.state = 161;
					this.zhAt();
					}
				}

				this.state = 164;
				this.zhTime();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 165;
					this.enAt();
					}
				}

				this.state = 168;
				this.enDirectTimeAround();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhAtWord) {
					{
					this.state = 169;
					this.zhAt();
					}
				}

				this.state = 172;
				this.zhDirectTimeAround();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdPeriod(): StdPeriodContext {
		let _localctx: StdPeriodContext = new StdPeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TimeParser.RULE_stdPeriod);
		let _la: number;
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				_localctx = new StdPeriodDateToDateContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.stdDate();
				this.state = 176;
				this.stdPeriodTo();
				this.state = 177;
				this.stdDate();
				}
				break;

			case 2:
				_localctx = new StdPeriodDateTimeToDateTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.stdDateTime();
				this.state = 180;
				this.stdPeriodTo();
				this.state = 181;
				this.stdDateTime();
				}
				break;

			case 3:
				_localctx = new StdPeriodDateTimeToTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 183;
				this.stdDateTime();
				this.state = 184;
				this.stdPeriodTo();
				this.state = 185;
				this.stdTime();
				}
				break;

			case 4:
				_localctx = new StdPeriodTimeToTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 187;
				this.stdTime();
				this.state = 188;
				this.stdPeriodTo();
				this.state = 189;
				this.stdTime();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 190;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.YearNumber || _la === TimeParser.DateNumber) {
					{
					this.state = 193;
					this.stdDate();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdDateTime(): StdDateTimeContext {
		let _localctx: StdDateTimeContext = new StdDateTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TimeParser.RULE_stdDateTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.stdDate();
			this.state = 199;
			this.stdDateTimeConnector();
			this.state = 200;
			this.stdTime();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdDate(): StdDateContext {
		let _localctx: StdDateContext = new StdDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TimeParser.RULE_stdDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 202;
				this.yearValue();
				this.state = 203;
				this.stdDateConnector();
				}
				break;
			}
			this.state = 207;
			this.match(TimeParser.DateNumber);
			this.state = 208;
			this.stdDateConnector();
			this.state = 209;
			this.match(TimeParser.DateNumber);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdTime(): StdTimeContext {
		let _localctx: StdTimeContext = new StdTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TimeParser.RULE_stdTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(TimeParser.DateNumber);
			this.state = 212;
			this.stdTimeConnector();
			this.state = 213;
			this.match(TimeParser.DateNumber);
			this.state = 217;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 214;
				this.stdTimeConnector();
				this.state = 215;
				this.match(TimeParser.DateNumber);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdDateConnector(): StdDateConnectorContext {
		let _localctx: StdDateConnectorContext = new StdDateConnectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TimeParser.RULE_stdDateConnector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.MiddelConnectorWord || _la === TimeParser.SlashConnectorWord)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdTimeConnector(): StdTimeConnectorContext {
		let _localctx: StdTimeConnectorContext = new StdTimeConnectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TimeParser.RULE_stdTimeConnector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(TimeParser.TimeConnectorWord);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdDateTimeConnector(): StdDateTimeConnectorContext {
		let _localctx: StdDateTimeConnectorContext = new StdDateTimeConnectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TimeParser.RULE_stdDateTimeConnector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TimeParser.DateTimeConnectorWord) {
				{
				this.state = 223;
				this.match(TimeParser.DateTimeConnectorWord);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdPeriodTo(): StdPeriodToContext {
		let _localctx: StdPeriodToContext = new StdPeriodToContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TimeParser.RULE_stdPeriodTo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.MiddelConnectorWord || _la === TimeParser.MiddelConnectorCurve)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enPeriod(): EnPeriodContext {
		let _localctx: EnPeriodContext = new EnPeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TimeParser.RULE_enPeriod);
		let _la: number;
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				_localctx = new EnPeriodWeekDayNodeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.enPeriodWeek();
				}
				break;

			case 2:
				_localctx = new EnPeriodMonthDayToMonthDayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnFrom) {
					{
					this.state = 229;
					this.match(TimeParser.EnFrom);
					}
				}

				this.state = 257;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					{
					this.state = 232;
					this.enMonth();
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 233;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAtWord) {
						{
						this.state = 236;
						this.enAt();
						}
					}

					this.state = 239;
					this.enDay();
					this.state = 240;
					this.enPeriodTo();
					this.state = 242;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
					case 1:
						{
						this.state = 241;
						this.enMonth();
						}
						break;
					}
					this.state = 244;
					this.enDay();
					}
					}
					break;

				case 2:
					{
					{
					this.state = 246;
					this.enDay();
					this.state = 247;
					this.enPeriodTo();
					this.state = 248;
					this.enDay();
					this.state = 250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 249;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAtWord) {
						{
						this.state = 252;
						this.enAt();
						}
					}

					this.state = 255;
					this.enMonth();
					}
					}
					break;
				}
				this.state = 260;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 259;
					this.match(TimeParser.Comma);
					}
					break;
				}
				this.state = 263;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 262;
					this.enAt();
					}
					break;
				}
				this.state = 266;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 265;
					this.enYear();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new EnPeriodDateTimeToDateTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnFrom) {
					{
					this.state = 268;
					this.match(TimeParser.EnFrom);
					}
				}

				this.state = 271;
				this.enDateTime();
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 272;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 275;
					this.enAt();
					}
				}

				this.state = 278;
				this.enPeriodTo();
				this.state = 279;
				this.enDateTime();
				}
				break;

			case 4:
				_localctx = new EnPeriodDateTimeToTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnFrom) {
					{
					this.state = 281;
					this.match(TimeParser.EnFrom);
					}
				}

				this.state = 284;
				this.enDateTime();
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 285;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 288;
					this.enAt();
					}
				}

				this.state = 291;
				this.enPeriodTo();
				this.state = 292;
				this.enTime();
				}
				break;

			case 5:
				_localctx = new EnPeriodDateToDateContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnFrom) {
					{
					this.state = 294;
					this.match(TimeParser.EnFrom);
					}
				}

				this.state = 297;
				this.enDate();
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 298;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 301;
					this.enAt();
					}
				}

				this.state = 304;
				this.enPeriodTo();
				this.state = 305;
				this.enDate();
				}
				break;

			case 6:
				_localctx = new EnPeriodTimeToTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnFrom) {
					{
					this.state = 307;
					this.match(TimeParser.EnFrom);
					}
				}

				this.state = 310;
				this.enTime();
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 311;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 314;
					this.enAt();
					}
				}

				this.state = 317;
				this.enPeriodTo();
				this.state = 318;
				this.enTime();
				this.state = 326;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 319;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAtWord) {
						{
						this.state = 322;
						this.enAt();
						}
					}

					this.state = 325;
					this.enDate();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enPeriodWeek(): EnPeriodWeekContext {
		let _localctx: EnPeriodWeekContext = new EnPeriodWeekContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TimeParser.RULE_enPeriodWeek);
		let _la: number;
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				_localctx = new EnPeriodWeek_1Context(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TimeParser.EnWeekValue:
				case TimeParser.EnFrom:
					{
					{
					this.state = 331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnFrom) {
						{
						this.state = 330;
						this.match(TimeParser.EnFrom);
						}
					}

					this.state = 333;
					this.match(TimeParser.EnWeekValue);
					this.state = 334;
					this.enPeriodTo();
					this.state = 335;
					this.match(TimeParser.EnWeekValue);
					this.state = 337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 336;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAtWord) {
						{
						this.state = 339;
						this.enAt();
						}
					}

					this.state = 342;
					this.enStepAliasMark();
					this.state = 343;
					this.numberValue();
					this.state = 344;
					this.match(TimeParser.EnWeekWord);
					}
					}
					break;
				case TimeParser.EnBeforeWord:
				case TimeParser.EnAfterWord:
					{
					{
					this.state = 346;
					this.enStepAliasMark();
					this.state = 347;
					this.numberValue();
					this.state = 348;
					this.match(TimeParser.EnWeekWord);
					this.state = 350;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 349;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 353;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAtWord) {
						{
						this.state = 352;
						this.enAt();
						}
					}

					this.state = 355;
					this.match(TimeParser.EnWeekValue);
					this.state = 356;
					this.enPeriodTo();
					this.state = 357;
					this.match(TimeParser.EnWeekValue);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				_localctx = new EnPeriodWeek_2Context(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 386;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnFrom) {
						{
						this.state = 361;
						this.match(TimeParser.EnFrom);
						}
					}

					{
					this.state = 364;
					this.match(TimeParser.EnWeekValue);
					this.state = 365;
					this.enPeriodTo();
					this.state = 366;
					this.match(TimeParser.EnWeekValue);
					this.state = 368;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 367;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 371;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAtWord) {
						{
						this.state = 370;
						this.enAt();
						}
					}

					this.state = 373;
					this.match(TimeParser.EnAroundWord);
					this.state = 374;
					this.match(TimeParser.EnWeekWord);
					}
					}
					break;

				case 2:
					{
					{
					this.state = 377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAroundWord) {
						{
						this.state = 376;
						this.match(TimeParser.EnAroundWord);
						}
					}

					this.state = 379;
					this.match(TimeParser.EnWeekValue);
					this.state = 380;
					this.enPeriodTo();
					this.state = 382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAroundWord) {
						{
						this.state = 381;
						this.match(TimeParser.EnAroundWord);
						}
					}

					this.state = 384;
					this.match(TimeParser.EnWeekValue);
					}
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enDateTime(): EnDateTimeContext {
		let _localctx: EnDateTimeContext = new EnDateTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TimeParser.RULE_enDateTime);
		let _la: number;
		try {
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 390;
				this.enDate();
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 391;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 394;
					this.enAt();
					}
				}

				this.state = 397;
				this.enTime();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.enTime();
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 400;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 403;
					this.enAt();
					}
				}

				this.state = 406;
				this.enDate();
				this.state = 408;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 407;
					_la = this._input.LA(1);
					if (!(_la === TimeParser.EnMorningWord || _la === TimeParser.EnAfternoonWord)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enDate(): EnDateContext {
		let _localctx: EnDateContext = new EnDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TimeParser.RULE_enDate);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.enDateAround();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.enDateNormal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.stdDate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enDateNormal(): EnDateNormalContext {
		let _localctx: EnDateNormalContext = new EnDateNormalContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TimeParser.RULE_enDateNormal);
		let _la: number;
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.enMonthDay();
				this.state = 419;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 418;
					this.match(TimeParser.Comma);
					}
					break;
				}
				this.state = 422;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 421;
					this.enAt();
					}
					break;
				}
				this.state = 425;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 424;
					this.enYear();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.enYear();
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 428;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 431;
					this.enAt();
					}
				}

				this.state = 434;
				this.enMonthDay();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 436;
				this.enWeekDay();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enDateAround(): EnDateAroundContext {
		let _localctx: EnDateAroundContext = new EnDateAroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TimeParser.RULE_enDateAround);
		try {
			this.state = 452;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.EnAroundWord:
				_localctx = new EnDateDayAroundAliasContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 439;
				this.match(TimeParser.EnAroundWord);
				this.state = 440;
				this.match(TimeParser.EnDayWord);
				}
				break;
			case TimeParser.EnAroundDayWord:
				_localctx = new EnDateDayAroundAlias_2Context(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.match(TimeParser.EnAroundDayWord);
				}
				break;
			case TimeParser.EnBeforeWord:
			case TimeParser.EnAfterWord:
			case TimeParser.YearNumber:
			case TimeParser.DateNumber:
			case TimeParser.NormalNumber:
				_localctx = new EnDateDayAroundStepContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 450;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TimeParser.YearNumber:
				case TimeParser.DateNumber:
				case TimeParser.NormalNumber:
					{
					{
					this.state = 442;
					this.numberValue();
					this.state = 443;
					this.match(TimeParser.EnDayWord);
					this.state = 444;
					this.enStepAliasMark();
					}
					}
					break;
				case TimeParser.EnBeforeWord:
				case TimeParser.EnAfterWord:
					{
					{
					this.state = 446;
					this.enStepAliasMark();
					this.state = 447;
					this.numberValue();
					this.state = 448;
					this.match(TimeParser.EnDayWord);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enWeekDay(): EnWeekDayContext {
		let _localctx: EnWeekDayContext = new EnWeekDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TimeParser.RULE_enWeekDay);
		let _la: number;
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				_localctx = new EnDateWeekAroundAliasContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					{
					this.state = 455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAroundWord) {
						{
						this.state = 454;
						this.match(TimeParser.EnAroundWord);
						}
					}

					this.state = 457;
					this.match(TimeParser.EnWeekValue);
					}
					}
					break;

				case 2:
					{
					{
					this.state = 458;
					this.match(TimeParser.EnWeekValue);
					this.state = 460;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 459;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 463;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAtWord) {
						{
						this.state = 462;
						this.enAt();
						}
					}

					this.state = 465;
					this.match(TimeParser.EnAroundWord);
					this.state = 466;
					this.match(TimeParser.EnWeekWord);
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new EnDateWeekAroundStepContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 485;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					{
					this.state = 469;
					this.match(TimeParser.EnWeekValue);
					this.state = 471;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 470;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 473;
					this.numberValue();
					this.state = 474;
					this.match(TimeParser.EnWeekWord);
					this.state = 475;
					this.enStepAliasMark();
					}
					}
					break;

				case 2:
					{
					{
					this.state = 477;
					this.match(TimeParser.EnWeekValue);
					this.state = 479;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 478;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 481;
					this.enStepAliasMark();
					this.state = 482;
					this.numberValue();
					this.state = 483;
					this.match(TimeParser.EnWeekWord);
					}
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enMonthDay(): EnMonthDayContext {
		let _localctx: EnMonthDayContext = new EnMonthDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TimeParser.RULE_enMonthDay);
		let _la: number;
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.enMonth();
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 490;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 493;
					this.enAt();
					}
				}

				this.state = 496;
				this.enDay();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.enDay();
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 499;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAtWord) {
					{
					this.state = 502;
					this.enAt();
					}
				}

				this.state = 505;
				this.enMonth();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enYear(): EnYearContext {
		let _localctx: EnYearContext = new EnYearContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TimeParser.RULE_enYear);
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(TimeParser.EnAroundWord);
				this.state = 510;
				this.match(TimeParser.EnYearWord);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 511;
				this.numberValue();
				this.state = 512;
				this.match(TimeParser.EnYearWord);
				this.state = 513;
				this.enStepAliasMark();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 515;
				this.yearValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enMonth(): EnMonthContext {
		let _localctx: EnMonthContext = new EnMonthContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TimeParser.RULE_enMonth);
		let _la: number;
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.EnAroundWord) {
					{
					this.state = 518;
					this.match(TimeParser.EnAroundWord);
					}
				}

				this.state = 521;
				this.match(TimeParser.EnMonthValue);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.match(TimeParser.EnAroundWord);
				this.state = 523;
				this.match(TimeParser.EnMonthWord);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 532;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TimeParser.YearNumber:
				case TimeParser.DateNumber:
				case TimeParser.NormalNumber:
					{
					{
					this.state = 524;
					this.numberValue();
					this.state = 525;
					this.match(TimeParser.EnMonthWord);
					this.state = 526;
					this.enStepAliasMark();
					}
					}
					break;
				case TimeParser.EnBeforeWord:
				case TimeParser.EnAfterWord:
					{
					{
					this.state = 528;
					this.enStepAliasMark();
					this.state = 529;
					this.numberValue();
					this.state = 530;
					this.match(TimeParser.EnMonthWord);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enDay(): EnDayContext {
		let _localctx: EnDayContext = new EnDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TimeParser.RULE_enDay);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.EnDayValue || _la === TimeParser.DateNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enTime(): EnTimeContext {
		let _localctx: EnTimeContext = new EnTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TimeParser.RULE_enTime);
		let _la: number;
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				_localctx = new EnTimeOClockContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 545;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					{
					this.state = 538;
					this.match(TimeParser.DateNumber);
					this.state = 539;
					this.match(TimeParser.EnHourWholeWord);
					this.state = 541;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						this.state = 540;
						_la = this._input.LA(1);
						if (!(_la === TimeParser.EnMorningWord || _la === TimeParser.EnAfternoonWord)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					}
					}
					break;

				case 2:
					{
					{
					this.state = 543;
					this.match(TimeParser.DateNumber);
					this.state = 544;
					_la = this._input.LA(1);
					if (!(_la === TimeParser.EnMorningWord || _la === TimeParser.EnAfternoonWord)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new EnTimeNormalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 547;
				this.stdTime();
				this.state = 549;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 548;
					_la = this._input.LA(1);
					if (!(_la === TimeParser.EnMorningWord || _la === TimeParser.EnAfternoonWord)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enDirectTimeAround(): EnDirectTimeAroundContext {
		let _localctx: EnDirectTimeAroundContext = new EnDirectTimeAroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TimeParser.RULE_enDirectTimeAround);
		let _la: number;
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				_localctx = new EnTimeHourStepContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TimeParser.EnBeforeWord:
				case TimeParser.EnAfterWord:
					{
					{
					this.state = 553;
					this.enStepAliasMark();
					this.state = 554;
					this.numberValue();
					this.state = 555;
					this.match(TimeParser.EnHourWord);
					this.state = 560;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
					case 1:
						{
						this.state = 556;
						this.match(TimeParser.EnAndWord);
						this.state = 557;
						this.numberValue();
						this.state = 558;
						this.match(TimeParser.EnMinuteWord);
						}
						break;
					}
					}
					}
					break;
				case TimeParser.YearNumber:
				case TimeParser.DateNumber:
				case TimeParser.NormalNumber:
					{
					{
					this.state = 562;
					this.numberValue();
					this.state = 563;
					this.match(TimeParser.EnHourWord);
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.EnAndWord) {
						{
						this.state = 564;
						this.match(TimeParser.EnAndWord);
						this.state = 565;
						this.numberValue();
						this.state = 566;
						this.match(TimeParser.EnMinuteWord);
						}
					}

					this.state = 570;
					this.enStepAliasMark();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				_localctx = new EnTimeMinuteStepContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 582;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TimeParser.EnBeforeWord:
				case TimeParser.EnAfterWord:
					{
					{
					this.state = 574;
					this.enStepAliasMark();
					this.state = 575;
					this.numberValue();
					this.state = 576;
					this.match(TimeParser.EnMinuteWord);
					}
					}
					break;
				case TimeParser.YearNumber:
				case TimeParser.DateNumber:
				case TimeParser.NormalNumber:
					{
					{
					this.state = 578;
					this.numberValue();
					this.state = 579;
					this.match(TimeParser.EnMinuteWord);
					this.state = 580;
					this.enStepAliasMark();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enStepAliasMark(): EnStepAliasMarkContext {
		let _localctx: EnStepAliasMarkContext = new EnStepAliasMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TimeParser.RULE_enStepAliasMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.EnBeforeWord || _la === TimeParser.EnAfterWord)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enPeriodTo(): EnPeriodToContext {
		let _localctx: EnPeriodToContext = new EnPeriodToContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TimeParser.RULE_enPeriodTo);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.EnToWord:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 588;
				this.match(TimeParser.EnToWord);
				}
				break;
			case TimeParser.MiddelConnectorWord:
			case TimeParser.MiddelConnectorCurve:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 589;
				this.stdPeriodTo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enAt(): EnAtContext {
		let _localctx: EnAtContext = new EnAtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TimeParser.RULE_enAt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(TimeParser.EnAtWord);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhPeriod(): ZhPeriodContext {
		let _localctx: ZhPeriodContext = new ZhPeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TimeParser.RULE_zhPeriod);
		let _la: number;
		try {
			this.state = 646;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				_localctx = new ZhPeriodWeekDayNodeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 594;
				this.zhPeriodWeek();
				}
				break;

			case 2:
				_localctx = new ZhPeriodMonthDayToMonthDayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
				case 1:
					{
					this.state = 595;
					this.zhYear();
					this.state = 597;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 596;
						this.match(TimeParser.Comma);
						}
					}

					}
					break;
				}
				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhFrom) {
					{
					this.state = 601;
					this.match(TimeParser.ZhFrom);
					}
				}

				this.state = 604;
				this.zhMonth();
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 605;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhFrom) {
					{
					this.state = 608;
					this.match(TimeParser.ZhFrom);
					}
				}

				this.state = 611;
				this.zhDay();
				this.state = 612;
				this.zhPeriodTo();
				this.state = 614;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 613;
					this.zhMonth();
					}
					break;
				}
				this.state = 616;
				this.zhDay();
				}
				break;

			case 3:
				_localctx = new ZhPeriodDateToDateContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhFrom) {
					{
					this.state = 618;
					this.match(TimeParser.ZhFrom);
					}
				}

				this.state = 621;
				this.zhDate();
				this.state = 622;
				this.zhPeriodTo();
				this.state = 623;
				this.zhDate();
				}
				break;

			case 4:
				_localctx = new ZhPeriodDateTimeToDateTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhFrom) {
					{
					this.state = 625;
					this.match(TimeParser.ZhFrom);
					}
				}

				this.state = 628;
				this.zhDateTime();
				this.state = 629;
				this.zhPeriodTo();
				this.state = 630;
				this.zhDateTime();
				}
				break;

			case 5:
				_localctx = new ZhPeriodDateTimeToTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhFrom) {
					{
					this.state = 632;
					this.match(TimeParser.ZhFrom);
					}
				}

				this.state = 635;
				this.zhDateTime();
				this.state = 636;
				this.zhPeriodTo();
				this.state = 637;
				this.zhTime();
				}
				break;

			case 6:
				_localctx = new ZhPeriodTimeToTimeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhFrom) {
					{
					this.state = 639;
					this.match(TimeParser.ZhFrom);
					}
				}

				this.state = 642;
				this.zhTime();
				this.state = 643;
				this.zhPeriodTo();
				this.state = 644;
				this.zhTime();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhPeriodWeek(): ZhPeriodWeekContext {
		let _localctx: ZhPeriodWeekContext = new ZhPeriodWeekContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TimeParser.RULE_zhPeriodWeek);
		let _la: number;
		try {
			this.state = 687;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				_localctx = new ZhPeriodWeek_1Context(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 674;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TimeParser.ZhValueWord:
				case TimeParser.YearNumber:
				case TimeParser.DateNumber:
				case TimeParser.NormalNumber:
					{
					{
					this.state = 648;
					this.zhNumberValue();
					this.state = 649;
					this.match(TimeParser.ZhWeekWord);
					this.state = 650;
					this.zhStepAliasMark();
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 651;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.ZhOf) {
						{
						this.state = 654;
						this.match(TimeParser.ZhOf);
						}
					}

					this.state = 657;
					this.zhWeekValue();
					this.state = 658;
					this.zhPeriodTo();
					this.state = 659;
					this.zhWeekValue();
					}
					}
					break;
				case TimeParser.ZhWeekWord:
				case TimeParser.ZhFrom:
					{
					{
					this.state = 662;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.ZhFrom) {
						{
						this.state = 661;
						this.match(TimeParser.ZhFrom);
						}
					}

					this.state = 664;
					this.zhWeekValue();
					this.state = 665;
					this.zhPeriodTo();
					this.state = 666;
					this.zhWeekValue();
					this.state = 668;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TimeParser.Comma) {
						{
						this.state = 667;
						this.match(TimeParser.Comma);
						}
					}

					this.state = 670;
					this.zhNumberValue();
					this.state = 671;
					this.match(TimeParser.ZhWeekWord);
					this.state = 672;
					this.zhStepAliasMark();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				_localctx = new ZhPeriodWeek_2Context(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhFrom) {
					{
					this.state = 676;
					this.match(TimeParser.ZhFrom);
					}
				}

				this.state = 679;
				this.zhAroundAliasMark();
				this.state = 680;
				this.zhWeekValue();
				this.state = 681;
				this.zhPeriodTo();
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TimeParser.ZhAroundWord) | (1 << TimeParser.ZhBeforeWord) | (1 << TimeParser.ZhAfterWord))) !== 0)) {
					{
					this.state = 682;
					this.zhAroundAliasMark();
					}
				}

				this.state = 685;
				this.zhWeekValue();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhDateTime(): ZhDateTimeContext {
		let _localctx: ZhDateTimeContext = new ZhDateTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TimeParser.RULE_zhDateTime);
		let _la: number;
		try {
			this.state = 703;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 689;
				this.zhDate();
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 690;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 693;
				this.zhTime();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 695;
				this.zhTime();
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 696;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 699;
				this.zhDate();
				this.state = 701;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 700;
					this.zhTimePeriodAliasMark();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhDate(): ZhDateContext {
		let _localctx: ZhDateContext = new ZhDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TimeParser.RULE_zhDate);
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.zhDateAround();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.zhDateNormal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 707;
				this.stdDate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhDateNormal(): ZhDateNormalContext {
		let _localctx: ZhDateNormalContext = new ZhDateNormalContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TimeParser.RULE_zhDateNormal);
		let _la: number;
		try {
			this.state = 724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 710;
				this.zhYear();
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.Comma) {
					{
					this.state = 711;
					this.match(TimeParser.Comma);
					}
				}

				this.state = 714;
				this.zhMonthDay();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 716;
				this.zhMonthDay();
				this.state = 718;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 717;
					this.match(TimeParser.Comma);
					}
					break;
				}
				this.state = 721;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 720;
					this.zhYear();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 723;
				this.zhWeekDay();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhDateAround(): ZhDateAroundContext {
		let _localctx: ZhDateAroundContext = new ZhDateAroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TimeParser.RULE_zhDateAround);
		let _la: number;
		try {
			this.state = 733;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.ZhAroundWord:
			case TimeParser.ZhBeforeWord:
			case TimeParser.ZhAfterWord:
				_localctx = new ZhDateDayAroundAliasContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 726;
				this.zhAroundAliasMark();
				this.state = 727;
				_la = this._input.LA(1);
				if (!(_la === TimeParser.ZhDayWord || _la === TimeParser.ZhTian)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case TimeParser.ZhValueWord:
			case TimeParser.YearNumber:
			case TimeParser.DateNumber:
			case TimeParser.NormalNumber:
				_localctx = new ZhDateDayAroundStepContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 729;
				this.zhNumberValue();
				this.state = 730;
				_la = this._input.LA(1);
				if (!(_la === TimeParser.ZhDayWord || _la === TimeParser.ZhTian)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 731;
				this.zhStepAliasMark();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhWeekDay(): ZhWeekDayContext {
		let _localctx: ZhWeekDayContext = new ZhWeekDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TimeParser.RULE_zhWeekDay);
		let _la: number;
		try {
			this.state = 753;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.ZhValueWord:
			case TimeParser.YearNumber:
			case TimeParser.DateNumber:
			case TimeParser.NormalNumber:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.zhNumberValue();
				this.state = 736;
				this.match(TimeParser.ZhWeekWord);
				this.state = 737;
				this.zhStepAliasMark();
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhOf) {
					{
					this.state = 738;
					this.match(TimeParser.ZhOf);
					}
				}

				this.state = 741;
				this.zhWeekValue();
				}
				break;
			case TimeParser.ZhAroundWord:
			case TimeParser.ZhBeforeWord:
			case TimeParser.ZhAfterWord:
			case TimeParser.ZhWeekWord:
			case TimeParser.ZhOf:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TimeParser.ZhAroundWord) | (1 << TimeParser.ZhBeforeWord) | (1 << TimeParser.ZhAfterWord))) !== 0)) {
					{
					this.state = 743;
					this.zhAroundAliasMark();
					}
				}

				this.state = 747;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
				case 1:
					{
					this.state = 746;
					this.match(TimeParser.ZhWeekWord);
					}
					break;
				}
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TimeParser.ZhOf) {
					{
					this.state = 749;
					this.match(TimeParser.ZhOf);
					}
				}

				this.state = 752;
				this.zhWeekValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhMonthDay(): ZhMonthDayContext {
		let _localctx: ZhMonthDayContext = new ZhMonthDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, TimeParser.RULE_zhMonthDay);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.zhMonth();
			this.state = 756;
			this.zhDay();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhYear(): ZhYearContext {
		let _localctx: ZhYearContext = new ZhYearContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TimeParser.RULE_zhYear);
		try {
			this.state = 768;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 758;
				this.zhAroundAliasMark();
				this.state = 759;
				this.match(TimeParser.ZhYearWord);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 761;
				this.zhNumberValue();
				this.state = 762;
				this.match(TimeParser.ZhYearWord);
				this.state = 763;
				this.zhStepAliasMark();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 765;
				this.zhYearValue();
				this.state = 766;
				this.match(TimeParser.ZhYearWord);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhMonth(): ZhMonthContext {
		let _localctx: ZhMonthContext = new ZhMonthContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, TimeParser.RULE_zhMonth);
		let _la: number;
		try {
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 770;
				this.zhDateValue();
				this.state = 771;
				this.match(TimeParser.ZhMonthWord);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 773;
				this.zhAroundAliasMark();
				this.state = 774;
				_la = this._input.LA(1);
				if (!(_la === TimeParser.ZhMonthWord || _la === TimeParser.ZhCountMonth)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 776;
				this.zhNumberValue();
				this.state = 777;
				this.match(TimeParser.ZhCountMonth);
				this.state = 778;
				this.zhStepAliasMark();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhDay(): ZhDayContext {
		let _localctx: ZhDayContext = new ZhDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, TimeParser.RULE_zhDay);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.zhDateValue();
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 783;
				_la = this._input.LA(1);
				if (!(_la === TimeParser.ZhDayWord || _la === TimeParser.ZhDayWord_2)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhTime(): ZhTimeContext {
		let _localctx: ZhTimeContext = new ZhTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, TimeParser.RULE_zhTime);
		try {
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 786;
				this.zhTimeNormal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 787;
				this.stdTime();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhTimeNormal(): ZhTimeNormalContext {
		let _localctx: ZhTimeNormalContext = new ZhTimeNormalContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, TimeParser.RULE_zhTimeNormal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TimeParser.ZhMorningWord || _la === TimeParser.ZhAfternoonWord) {
				{
				this.state = 790;
				this.zhTimePeriodAliasMark();
				}
			}

			this.state = 793;
			this.zhNumberValue();
			this.state = 794;
			this.zhHourMark();
			this.state = 796;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 795;
				this.match(TimeParser.ZhHourWholeWord);
				}
				break;
			}
			this.state = 808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 798;
				this.zhNumberValue();
				this.state = 800;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
				case 1:
					{
					this.state = 799;
					this.zhMinuteMark();
					}
					break;
				}
				this.state = 806;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
				case 1:
					{
					this.state = 802;
					this.zhNumberValue();
					this.state = 804;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
					case 1:
						{
						this.state = 803;
						this.zhSecondMark();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhDirectTimeAround(): ZhDirectTimeAroundContext {
		let _localctx: ZhDirectTimeAroundContext = new ZhDirectTimeAroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, TimeParser.RULE_zhDirectTimeAround);
		let _la: number;
		try {
			this.state = 823;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				_localctx = new ZhTimeHourStepContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 810;
				this.zhNumberValue();
				this.state = 811;
				this.match(TimeParser.ZhCountHour);
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (TimeParser.ZhValueWord - 22)) | (1 << (TimeParser.YearNumber - 22)) | (1 << (TimeParser.DateNumber - 22)) | (1 << (TimeParser.NormalNumber - 22)))) !== 0)) {
					{
					this.state = 812;
					this.zhNumberValue();
					this.state = 813;
					this.match(TimeParser.ZhCountMinute);
					}
				}

				this.state = 817;
				this.zhStepAliasMark();
				}
				break;

			case 2:
				_localctx = new ZhTimeMinuteStepContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 819;
				this.zhNumberValue();
				this.state = 820;
				this.match(TimeParser.ZhCountMinute);
				this.state = 821;
				this.zhStepAliasMark();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhNumberValue(): ZhNumberValueContext {
		let _localctx: ZhNumberValueContext = new ZhNumberValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, TimeParser.RULE_zhNumberValue);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.ZhValueWord:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 825;
				this.match(TimeParser.ZhValueWord);
				}
				break;
			case TimeParser.YearNumber:
			case TimeParser.DateNumber:
			case TimeParser.NormalNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 826;
				this.numberValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhWeekValue(): ZhWeekValueContext {
		let _localctx: ZhWeekValueContext = new ZhWeekValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, TimeParser.RULE_zhWeekValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(TimeParser.ZhWeekWord);
			this.state = 833;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.ZhValueWord:
			case TimeParser.YearNumber:
			case TimeParser.DateNumber:
			case TimeParser.NormalNumber:
				{
				this.state = 830;
				this.zhNumberValue();
				}
				break;
			case TimeParser.ZhTian:
				{
				this.state = 831;
				this.match(TimeParser.ZhTian);
				}
				break;
			case TimeParser.ZhDayWord:
				{
				this.state = 832;
				this.match(TimeParser.ZhDayWord);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhYearValue(): ZhYearValueContext {
		let _localctx: ZhYearValueContext = new ZhYearValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, TimeParser.RULE_zhYearValue);
		try {
			this.state = 837;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.ZhValueWord:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
				this.match(TimeParser.ZhValueWord);
				}
				break;
			case TimeParser.YearNumber:
			case TimeParser.DateNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 836;
				this.yearValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhDateValue(): ZhDateValueContext {
		let _localctx: ZhDateValueContext = new ZhDateValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TimeParser.RULE_zhDateValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.ZhValueWord || _la === TimeParser.DateNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhStepAliasMark(): ZhStepAliasMarkContext {
		let _localctx: ZhStepAliasMarkContext = new ZhStepAliasMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TimeParser.RULE_zhStepAliasMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.ZhBeforeWord || _la === TimeParser.ZhAfterWord)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhAroundAliasMark(): ZhAroundAliasMarkContext {
		let _localctx: ZhAroundAliasMarkContext = new ZhAroundAliasMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, TimeParser.RULE_zhAroundAliasMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TimeParser.ZhAroundWord) | (1 << TimeParser.ZhBeforeWord) | (1 << TimeParser.ZhAfterWord))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhTimePeriodAliasMark(): ZhTimePeriodAliasMarkContext {
		let _localctx: ZhTimePeriodAliasMarkContext = new ZhTimePeriodAliasMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TimeParser.RULE_zhTimePeriodAliasMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.ZhMorningWord || _la === TimeParser.ZhAfternoonWord)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhHourMark(): ZhHourMarkContext {
		let _localctx: ZhHourMarkContext = new ZhHourMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, TimeParser.RULE_zhHourMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.ZhHourWord || _la === TimeParser.TimeConnectorWord)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhMinuteMark(): ZhMinuteMarkContext {
		let _localctx: ZhMinuteMarkContext = new ZhMinuteMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, TimeParser.RULE_zhMinuteMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.ZhMinuteWord || _la === TimeParser.TimeConnectorWord)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhSecondMark(): ZhSecondMarkContext {
		let _localctx: ZhSecondMarkContext = new ZhSecondMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, TimeParser.RULE_zhSecondMark);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this.match(TimeParser.ZhSecondWord);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhPeriodTo(): ZhPeriodToContext {
		let _localctx: ZhPeriodToContext = new ZhPeriodToContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, TimeParser.RULE_zhPeriodTo);
		try {
			this.state = 855;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.ZhToWord:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 853;
				this.match(TimeParser.ZhToWord);
				}
				break;
			case TimeParser.MiddelConnectorWord:
			case TimeParser.MiddelConnectorCurve:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 854;
				this.stdPeriodTo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhAt(): ZhAtContext {
		let _localctx: ZhAtContext = new ZhAtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, TimeParser.RULE_zhAt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.match(TimeParser.ZhAtWord);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yearValue(): YearValueContext {
		let _localctx: YearValueContext = new YearValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, TimeParser.RULE_yearValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			_la = this._input.LA(1);
			if (!(_la === TimeParser.YearNumber || _la === TimeParser.DateNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberValue(): NumberValueContext {
		let _localctx: NumberValueContext = new NumberValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, TimeParser.RULE_numberValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (TimeParser.YearNumber - 46)) | (1 << (TimeParser.DateNumber - 46)) | (1 << (TimeParser.NormalNumber - 46)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uselessWords(): UselessWordsContext {
		let _localctx: UselessWordsContext = new UselessWordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, TimeParser.RULE_uselessWords);
		try {
			this.state = 866;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TimeParser.MiddelConnectorWord:
			case TimeParser.SlashConnectorWord:
			case TimeParser.TimeConnectorWord:
			case TimeParser.DateTimeConnectorWord:
			case TimeParser.Comma:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 863;
				this.stdUselessWords();
				}
				break;
			case TimeParser.EnWeekValue:
			case TimeParser.EnDayValue:
			case TimeParser.EnAroundWord:
			case TimeParser.EnAroundDayWord:
			case TimeParser.EnBeforeWord:
			case TimeParser.EnAfterWord:
			case TimeParser.EnYearWord:
			case TimeParser.EnMonthWord:
			case TimeParser.EnDayWord:
			case TimeParser.EnWeekWord:
			case TimeParser.EnHourWord:
			case TimeParser.EnMinuteWord:
			case TimeParser.EnSecondWord:
			case TimeParser.EnMorningWord:
			case TimeParser.EnAfternoonWord:
			case TimeParser.EnHourWholeWord:
			case TimeParser.EnAtWord:
			case TimeParser.EnAndWord:
			case TimeParser.EnToWord:
			case TimeParser.EnFrom:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 864;
				this.enUselessWords();
				}
				break;
			case TimeParser.ZhValueWord:
			case TimeParser.ZhAroundWord:
			case TimeParser.ZhBeforeWord:
			case TimeParser.ZhAfterWord:
			case TimeParser.ZhYearWord:
			case TimeParser.ZhMonthWord:
			case TimeParser.ZhCountMonth:
			case TimeParser.ZhDayWord:
			case TimeParser.ZhDayWord_2:
			case TimeParser.ZhTian:
			case TimeParser.ZhWeekWord:
			case TimeParser.ZhHourWord:
			case TimeParser.ZhHourWholeWord:
			case TimeParser.ZhCountHour:
			case TimeParser.ZhMinuteWord:
			case TimeParser.ZhCountMinute:
			case TimeParser.ZhSecondWord:
			case TimeParser.ZhCountSecond:
			case TimeParser.ZhMorningWord:
			case TimeParser.ZhAfternoonWord:
			case TimeParser.ZhOf:
			case TimeParser.ZhFrom:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 865;
				this.zhUselessWords();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stdUselessWords(): StdUselessWordsContext {
		let _localctx: StdUselessWordsContext = new StdUselessWordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, TimeParser.RULE_stdUselessWords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			_la = this._input.LA(1);
			if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (TimeParser.MiddelConnectorWord - 49)) | (1 << (TimeParser.SlashConnectorWord - 49)) | (1 << (TimeParser.TimeConnectorWord - 49)) | (1 << (TimeParser.DateTimeConnectorWord - 49)) | (1 << (TimeParser.Comma - 49)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enUselessWords(): EnUselessWordsContext {
		let _localctx: EnUselessWordsContext = new EnUselessWordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, TimeParser.RULE_enUselessWords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 870;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TimeParser.EnWeekValue) | (1 << TimeParser.EnDayValue) | (1 << TimeParser.EnAroundWord) | (1 << TimeParser.EnAroundDayWord) | (1 << TimeParser.EnBeforeWord) | (1 << TimeParser.EnAfterWord) | (1 << TimeParser.EnYearWord) | (1 << TimeParser.EnMonthWord) | (1 << TimeParser.EnDayWord) | (1 << TimeParser.EnWeekWord) | (1 << TimeParser.EnHourWord) | (1 << TimeParser.EnMinuteWord) | (1 << TimeParser.EnSecondWord) | (1 << TimeParser.EnMorningWord) | (1 << TimeParser.EnAfternoonWord) | (1 << TimeParser.EnHourWholeWord) | (1 << TimeParser.EnAtWord) | (1 << TimeParser.EnAndWord) | (1 << TimeParser.EnToWord) | (1 << TimeParser.EnFrom))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public zhUselessWords(): ZhUselessWordsContext {
		let _localctx: ZhUselessWordsContext = new ZhUselessWordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, TimeParser.RULE_zhUselessWords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 872;
			_la = this._input.LA(1);
			if (!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & ((1 << (TimeParser.ZhValueWord - 22)) | (1 << (TimeParser.ZhAroundWord - 22)) | (1 << (TimeParser.ZhBeforeWord - 22)) | (1 << (TimeParser.ZhAfterWord - 22)) | (1 << (TimeParser.ZhYearWord - 22)) | (1 << (TimeParser.ZhMonthWord - 22)) | (1 << (TimeParser.ZhCountMonth - 22)) | (1 << (TimeParser.ZhDayWord - 22)) | (1 << (TimeParser.ZhDayWord_2 - 22)) | (1 << (TimeParser.ZhTian - 22)) | (1 << (TimeParser.ZhWeekWord - 22)) | (1 << (TimeParser.ZhHourWord - 22)) | (1 << (TimeParser.ZhHourWholeWord - 22)) | (1 << (TimeParser.ZhCountHour - 22)) | (1 << (TimeParser.ZhMinuteWord - 22)) | (1 << (TimeParser.ZhCountMinute - 22)) | (1 << (TimeParser.ZhSecondWord - 22)) | (1 << (TimeParser.ZhCountSecond - 22)) | (1 << (TimeParser.ZhMorningWord - 22)) | (1 << (TimeParser.ZhAfternoonWord - 22)) | (1 << (TimeParser.ZhOf - 22)) | (1 << (TimeParser.ZhFrom - 22)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03;\u036D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x03" +
		"\x02\x05\x02z\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x06\x03\x80\n\x03" +
		"\r\x03\x0E\x03\x81\x03\x04\x05\x04\x85\n\x04\x03\x04\x03\x04\x05\x04\x89" +
		"\n\x04\x03\x04\x03\x04\x05\x04\x8D\n\x04\x03\x04\x03\x04\x05\x04\x91\n" +
		"\x04\x03\x04\x03\x04\x05\x04\x95\n\x04\x03\x04\x03\x04\x05\x04\x99\n\x04" +
		"\x03\x04\x03\x04\x05\x04\x9D\n\x04\x03\x04\x03\x04\x05\x04\xA1\n\x04\x03" +
		"\x04\x03\x04\x05\x04\xA5\n\x04\x03\x04\x03\x04\x05\x04\xA9\n\x04\x03\x04" +
		"\x03\x04\x05\x04\xAD\n\x04\x03\x04\x05\x04\xB0\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xC2\n\x05\x03\x05\x05\x05" +
		"\xC5\n\x05\x05\x05\xC7\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\xD0\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xDC\n\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
		"\x05\v\xE3\n\v\x03\f\x03\f\x03\r\x03\r\x05\r\xE9\n\r\x03\r\x03\r\x05\r" +
		"\xED\n\r\x03\r\x05\r\xF0\n\r\x03\r\x03\r\x03\r\x05\r\xF5\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\xFD\n\r\x03\r\x05\r\u0100\n\r\x03\r\x03" +
		"\r\x05\r\u0104\n\r\x03\r\x05\r\u0107\n\r\x03\r\x05\r\u010A\n\r\x03\r\x05" +
		"\r\u010D\n\r\x03\r\x05\r\u0110\n\r\x03\r\x03\r\x05\r\u0114\n\r\x03\r\x05" +
		"\r\u0117\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u011D\n\r\x03\r\x03\r\x05\r" +
		"\u0121\n\r\x03\r\x05\r\u0124\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u012A\n" +
		"\r\x03\r\x03\r\x05\r\u012E\n\r\x03\r\x05\r\u0131\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\u0137\n\r\x03\r\x03\r\x05\r\u013B\n\r\x03\r\x05\r\u013E\n" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0143\n\r\x03\r\x05\r\u0146\n\r\x03\r\x05\r" +
		"\u0149\n\r\x05\r\u014B\n\r\x03\x0E\x05\x0E\u014E\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0154\n\x0E\x03\x0E\x05\x0E\u0157\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0161" +
		"\n\x0E\x03\x0E\x05\x0E\u0164\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u016A\n\x0E\x03\x0E\x05\x0E\u016D\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0173\n\x0E\x03\x0E\x05\x0E\u0176\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u017C\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0181" +
		"\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0185\n\x0E\x05\x0E\u0187\n\x0E\x03\x0F" +
		"\x03\x0F\x05\x0F\u018B\n\x0F\x03\x0F\x05\x0F\u018E\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0194\n\x0F\x03\x0F\x05\x0F\u0197\n\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u019B\n\x0F\x05\x0F\u019D\n\x0F\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\u01A2\n\x10\x03\x11\x03\x11\x05\x11\u01A6\n\x11\x03\x11\x05\x11" +
		"\u01A9\n\x11\x03\x11\x05\x11\u01AC\n\x11\x03\x11\x03\x11\x05\x11\u01B0" +
		"\n\x11\x03\x11\x05\x11\u01B3\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01B8" +
		"\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\u01C5\n\x12\x05\x12\u01C7\n\x12\x03\x13" +
		"\x05\x13\u01CA\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01CF\n\x13\x03\x13" +
		"\x05\x13\u01D2\n\x13\x03\x13\x03\x13\x05\x13\u01D6\n\x13\x03\x13\x03\x13" +
		"\x05\x13\u01DA\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u01E2\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01E8\n\x13\x05" +
		"\x13\u01EA\n\x13\x03\x14\x03\x14\x05\x14\u01EE\n\x14\x03\x14\x05\x14\u01F1" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u01F7\n\x14\x03\x14\x05" +
		"\x14\u01FA\n\x14\x03\x14\x03\x14\x05\x14\u01FE\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0207\n\x15\x03\x16\x05\x16" +
		"\u020A\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0217\n\x16\x05\x16\u0219\n\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0220\n\x18\x03\x18\x03\x18" +
		"\x05\x18\u0224\n\x18\x03\x18\x03\x18\x05\x18\u0228\n\x18\x05\x18\u022A" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\u0233\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u023B" +
		"\n\x19\x03\x19\x03\x19\x05\x19\u023F\n\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0249\n\x19\x05\x19\u024B" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0251\n\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0258\n\x1D\x05\x1D\u025A\n\x1D\x03" +
		"\x1D\x05\x1D\u025D\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0261\n\x1D\x03\x1D\x05" +
		"\x1D\u0264\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0269\n\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u026E\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u0275\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u027C" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0283\n\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0289\n\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u028F\n\x1E\x03\x1E\x05\x1E\u0292\n\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0299\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u029F\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u02A5" +
		"\n\x1E\x03\x1E\x05\x1E\u02A8\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u02AE\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02B2\n\x1E\x03\x1F\x03\x1F\x05" +
		"\x1F\u02B6\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02BC\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02C0\n\x1F\x05\x1F\u02C2\n\x1F\x03 \x03 \x03 \x05" +
		" \u02C7\n \x03!\x03!\x05!\u02CB\n!\x03!\x03!\x03!\x03!\x05!\u02D1\n!\x03" +
		"!\x05!\u02D4\n!\x03!\x05!\u02D7\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x05\"\u02E0\n\"\x03#\x03#\x03#\x03#\x05#\u02E6\n#\x03#\x03#\x03" +
		"#\x05#\u02EB\n#\x03#\x05#\u02EE\n#\x03#\x05#\u02F1\n#\x03#\x05#\u02F4" +
		"\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05" +
		"%\u0303\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u030F" +
		"\n&\x03\'\x03\'\x05\'\u0313\n\'\x03(\x03(\x05(\u0317\n(\x03)\x05)\u031A" +
		"\n)\x03)\x03)\x03)\x05)\u031F\n)\x03)\x03)\x05)\u0323\n)\x03)\x03)\x05" +
		")\u0327\n)\x05)\u0329\n)\x05)\u032B\n)\x03*\x03*\x03*\x03*\x03*\x05*\u0332" +
		"\n*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u033A\n*\x03+\x03+\x05+\u033E\n" +
		"+\x03,\x03,\x03,\x03,\x05,\u0344\n,\x03-\x03-\x05-\u0348\n-\x03.\x03." +
		"\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x034\x035\x03" +
		"5\x055\u035A\n5\x036\x036\x037\x037\x038\x038\x039\x039\x039\x059\u0365" +
		"\n9\x03:\x03:\x03;\x03;\x03<\x03<\x03<\x02\x02\x02=\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02\x02\x15\x04\x023355\x03\x0234\x03" +
		"\x02\x11\x12\x04\x02\x05\x0511\x03\x02\b\t\x04\x02\x1F\x1F!!\x03\x02\x1D" +
		"\x1E\x03\x02\x1F \x04\x02\x18\x1811\x03\x02\x1A\x1B\x03\x02\x19\x1B\x03" +
		"\x02*+\x04\x02##66\x04\x02&&66\x03\x0201\x03\x0202\x04\x023358\x03\x02" +
		"\x04\x17\x04\x02\x18+./\x02\u03E8\x02y\x03\x02\x02\x02\x04\x7F\x03\x02" +
		"\x02\x02\x06\xAF\x03\x02\x02\x02\b\xC6\x03\x02\x02\x02\n\xC8\x03\x02\x02" +
		"\x02\f\xCF\x03\x02\x02\x02\x0E\xD5\x03\x02\x02\x02\x10\xDD\x03\x02\x02" +
		"\x02\x12\xDF\x03\x02\x02\x02\x14\xE2\x03\x02\x02\x02\x16\xE4\x03\x02\x02" +
		"\x02\x18\u014A\x03\x02\x02\x02\x1A\u0186\x03\x02\x02\x02\x1C\u019C\x03" +
		"\x02\x02\x02\x1E\u01A1\x03\x02\x02\x02 \u01B7\x03\x02\x02\x02\"\u01C6" +
		"\x03\x02\x02\x02$\u01E9\x03\x02\x02\x02&\u01FD\x03\x02\x02\x02(\u0206" +
		"\x03\x02\x02\x02*\u0218\x03\x02\x02\x02,\u021A\x03\x02\x02\x02.\u0229" +
		"\x03\x02\x02\x020\u024A\x03\x02\x02\x022\u024C\x03\x02\x02\x024\u0250" +
		"\x03\x02\x02\x026\u0252\x03\x02\x02\x028\u0288\x03\x02\x02\x02:\u02B1" +
		"\x03\x02\x02\x02<\u02C1\x03\x02\x02\x02>\u02C6\x03\x02\x02\x02@\u02D6" +
		"\x03\x02\x02\x02B\u02DF\x03\x02\x02\x02D\u02F3\x03\x02\x02\x02F\u02F5" +
		"\x03\x02\x02\x02H\u0302\x03\x02\x02\x02J\u030E\x03\x02\x02\x02L\u0310" +
		"\x03\x02\x02\x02N\u0316\x03\x02\x02\x02P\u0319\x03\x02\x02\x02R\u0339" +
		"\x03\x02\x02\x02T\u033D\x03\x02\x02\x02V\u033F\x03\x02\x02\x02X\u0347" +
		"\x03\x02\x02\x02Z\u0349\x03\x02\x02\x02\\\u034B\x03\x02\x02\x02^\u034D" +
		"\x03\x02\x02\x02`\u034F\x03\x02\x02\x02b\u0351\x03\x02\x02\x02d\u0353" +
		"\x03\x02\x02\x02f\u0355\x03\x02\x02\x02h\u0359\x03\x02\x02\x02j\u035B" +
		"\x03\x02\x02\x02l\u035D\x03\x02\x02\x02n\u035F\x03\x02\x02\x02p\u0364" +
		"\x03\x02\x02\x02r\u0366\x03\x02\x02\x02t\u0368\x03\x02\x02\x02v\u036A" +
		"\x03\x02\x02\x02xz\x05\x04\x03\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02" +
		"z{\x03\x02\x02\x02{|\x07\x02\x02\x03|\x03\x03\x02\x02\x02}\x80\x05\x06" +
		"\x04\x02~\x80\x05p9\x02\x7F}\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80" +
		"\x81\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82" +
		"\x05\x03\x02\x02\x02\x83\x85\x056\x1C\x02\x84\x83\x03\x02\x02\x02\x84" +
		"\x85\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\xB0\x05\x18\r\x02\x87" +
		"\x89\x05j6\x02\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\xB0\x058\x1D\x02\x8B\x8D\x056\x1C\x02\x8C\x8B\x03" +
		"\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\xB0\x05" +
		"\x1C\x0F\x02\x8F\x91\x05j6\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02" +
		"\x02\x02\x91\x92\x03\x02\x02\x02\x92\xB0\x05<\x1F\x02\x93\x95\x056\x1C" +
		"\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x03\x02\x02" +
		"\x02\x96\xB0\x05\n\x06\x02\x97\x99\x056\x1C\x02\x98\x97\x03\x02\x02\x02" +
		"\x98\x99\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\xB0\x05\x1E\x10\x02" +
		"\x9B\x9D\x05j6\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D" +
		"\x9E\x03\x02\x02\x02\x9E\xB0\x05> \x02\x9F\xA1\x056\x1C\x02\xA0\x9F\x03" +
		"\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xB0\x05" +
		".\x18\x02\xA3\xA5\x05j6\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03\x02\x02" +
		"\x02\xA5\xA6\x03\x02\x02\x02\xA6\xB0\x05N(\x02\xA7\xA9\x056\x1C\x02\xA8" +
		"\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA" +
		"\xB0\x050\x19\x02\xAB\xAD\x05j6\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03" +
		"\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x05R*\x02\xAF\x84\x03\x02" +
		"\x02\x02\xAF\x88\x03\x02\x02\x02\xAF\x8C\x03\x02\x02\x02\xAF\x90\x03\x02" +
		"\x02\x02\xAF\x94\x03\x02\x02\x02\xAF\x98\x03\x02\x02\x02\xAF\x9C\x03\x02" +
		"\x02\x02\xAF\xA0\x03\x02\x02\x02\xAF\xA4\x03\x02\x02\x02\xAF\xA8\x03\x02" +
		"\x02\x02\xAF\xAC\x03\x02\x02\x02\xB0\x07\x03\x02\x02\x02\xB1\xB2\x05\f" +
		"\x07\x02\xB2\xB3\x05\x16\f\x02\xB3\xB4\x05\f\x07\x02\xB4\xC7\x03\x02\x02" +
		"\x02\xB5\xB6\x05\n\x06\x02\xB6\xB7\x05\x16\f\x02\xB7\xB8\x05\n\x06\x02" +
		"\xB8\xC7\x03\x02\x02\x02\xB9\xBA\x05\n\x06\x02\xBA\xBB\x05\x16\f\x02\xBB" +
		"\xBC\x05\x0E\b\x02\xBC\xC7\x03\x02\x02\x02\xBD\xBE\x05\x0E\b\x02\xBE\xBF" +
		"\x05\x16\f\x02\xBF\xC1\x05\x0E\b\x02\xC0\xC2\x078\x02\x02\xC1\xC0\x03" +
		"\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC5\x05" +
		"\f\x07\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x03" +
		"\x02\x02\x02\xC6\xB1\x03\x02\x02\x02\xC6\xB5\x03\x02\x02\x02\xC6\xB9\x03" +
		"\x02\x02\x02\xC6\xBD\x03\x02\x02\x02\xC7\t\x03\x02\x02\x02\xC8\xC9\x05" +
		"\f\x07\x02\xC9\xCA\x05\x14\v\x02\xCA\xCB\x05\x0E\b\x02\xCB\v\x03\x02\x02" +
		"\x02\xCC\xCD\x05l7\x02\xCD\xCE\x05\x10\t\x02\xCE\xD0\x03\x02\x02\x02\xCF" +
		"\xCC\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1" +
		"\xD2\x071\x02\x02\xD2\xD3\x05\x10\t\x02\xD3\xD4\x071\x02\x02\xD4\r\x03" +
		"\x02\x02\x02\xD5\xD6\x071\x02\x02\xD6\xD7\x05\x12\n\x02\xD7\xDB\x071\x02" +
		"\x02\xD8\xD9\x05\x12\n\x02\xD9\xDA\x071\x02\x02\xDA\xDC\x03\x02\x02\x02" +
		"\xDB\xD8\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x0F\x03\x02\x02\x02" +
		"\xDD\xDE\t\x02\x02\x02\xDE\x11\x03\x02\x02\x02\xDF\xE0\x076\x02\x02\xE0" +
		"\x13\x03\x02\x02\x02\xE1\xE3\x077\x02\x02\xE2\xE1\x03\x02\x02\x02\xE2" +
		"\xE3\x03\x02\x02\x02\xE3\x15\x03\x02\x02\x02\xE4\xE5\t\x03\x02\x02\xE5" +
		"\x17\x03\x02\x02\x02\xE6\u014B\x05\x1A\x0E\x02\xE7\xE9\x07\x17\x02\x02" +
		"\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\u0103\x03\x02\x02" +
		"\x02\xEA\xEC\x05*\x16\x02\xEB\xED\x078\x02\x02\xEC\xEB\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xF0\x056\x1C\x02" +
		"\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02" +
		"\xF1\xF2\x05,\x17\x02\xF2\xF4\x054\x1B\x02\xF3\xF5\x05*\x16\x02\xF4\xF3" +
		"\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7" +
		"\x05,\x17\x02\xF7\u0104\x03\x02\x02\x02\xF8\xF9\x05,\x17\x02\xF9\xFA\x05" +
		"4\x1B\x02\xFA\xFC\x05,\x17\x02\xFB\xFD\x078\x02\x02\xFC\xFB\x03\x02\x02" +
		"\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\u0100\x056\x1C" +
		"\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03" +
		"\x02\x02\x02\u0101\u0102\x05*\x16\x02\u0102\u0104\x03\x02\x02\x02\u0103" +
		"\xEA\x03\x02\x02\x02\u0103\xF8\x03\x02\x02\x02\u0104\u0106\x03\x02\x02" +
		"\x02\u0105\u0107\x078\x02\x02\u0106\u0105\x03\x02\x02\x02\u0106\u0107" +
		"\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\u010A\x056\x1C\x02" +
		"\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010C\x03" +
		"\x02\x02\x02\u010B\u010D\x05(\x15\x02\u010C\u010B\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u014B\x03\x02\x02\x02\u010E\u0110\x07\x17" +
		"\x02\x02\u010F\u010E\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0113\x05\x1C\x0F\x02\u0112\u0114\x078\x02" +
		"\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0116" +
		"\x03\x02\x02\x02\u0115\u0117\x056\x1C\x02\u0116\u0115\x03\x02\x02\x02" +
		"\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x05" +
		"4\x1B\x02\u0119\u011A\x05\x1C\x0F\x02\u011A\u014B\x03\x02\x02\x02\u011B" +
		"\u011D\x07\x17\x02\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02" +
		"\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0120\x05\x1C\x0F\x02\u011F" +
		"\u0121\x078\x02\x02\u0120\u011F\x03\x02\x02\x02\u0120\u0121\x03\x02\x02" +
		"\x02\u0121\u0123\x03\x02\x02\x02\u0122\u0124\x056\x1C\x02\u0123\u0122" +
		"\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02" +
		"\u0125\u0126\x054\x1B\x02\u0126\u0127\x05.\x18\x02\u0127\u014B\x03\x02" +
		"\x02\x02\u0128\u012A\x07\x17\x02\x02\u0129\u0128\x03\x02\x02\x02\u0129" +
		"\u012A\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x05\x1E" +
		"\x10\x02\u012C\u012E\x078\x02\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E" +
		"\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0131\x056\x1C\x02" +
		"\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03" +
		"\x02\x02\x02\u0132\u0133\x054\x1B\x02\u0133\u0134\x05\x1E\x10\x02\u0134" +
		"\u014B\x03\x02\x02\x02\u0135\u0137\x07\x17\x02\x02\u0136\u0135\x03\x02" +
		"\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138" +
		"\u013A\x05.\x18\x02\u0139\u013B\x078\x02\x02\u013A\u0139\x03\x02\x02\x02" +
		"\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013E\x05" +
		"6\x1C\x02\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0140\x054\x1B\x02\u0140\u0148\x05.\x18\x02" +
		"\u0141\u0143\x078\x02\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03" +
		"\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144\u0146\x056\x1C\x02\u0145" +
		"\u0144\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x03\x02" +
		"\x02\x02\u0147\u0149\x05\x1E\x10\x02\u0148\u0142\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02\x02\x02\u014A\xE6\x03\x02\x02" +
		"\x02\u014A\xE8\x03\x02\x02\x02\u014A\u010F\x03\x02\x02\x02\u014A\u011C" +
		"\x03\x02\x02\x02\u014A\u0129\x03\x02\x02\x02\u014A\u0136\x03\x02\x02\x02" +
		"\u014B\x19\x03\x02\x02\x02\u014C\u014E\x07\x17\x02\x02\u014D\u014C\x03" +
		"\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F" +
		"\u0150\x07\x04\x02\x02\u0150\u0151\x054\x1B\x02\u0151\u0153\x07\x04\x02" +
		"\x02\u0152\u0154\x078\x02\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154" +
		"\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0157\x056\x1C\x02" +
		"\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03" +
		"\x02\x02\x02\u0158\u0159\x052\x1A\x02\u0159\u015A\x05n8\x02\u015A\u015B" +
		"\x07\r\x02\x02\u015B\u016A\x03\x02\x02\x02\u015C\u015D\x052\x1A\x02\u015D" +
		"\u015E\x05n8\x02\u015E\u0160\x07\r\x02\x02\u015F\u0161\x078\x02\x02\u0160" +
		"\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x03\x02" +
		"\x02\x02\u0162\u0164\x056\x1C\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164" +
		"\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x07\x04\x02\x02" +
		"\u0166\u0167\x054\x1B\x02\u0167\u0168\x07\x04\x02\x02\u0168\u016A\x03" +
		"\x02\x02\x02\u0169\u014D\x03\x02\x02\x02\u0169\u015C\x03\x02\x02\x02\u016A" +
		"\u0187\x03\x02\x02\x02\u016B\u016D\x07\x17\x02\x02\u016C\u016B\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"\u016F\x07\x04\x02\x02\u016F\u0170\x054\x1B\x02\u0170\u0172\x07\x04\x02" +
		"\x02\u0171\u0173\x078\x02\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173" +
		"\x03\x02\x02\x02\u0173\u0175\x03\x02\x02\x02\u0174\u0176\x056\x1C\x02" +
		"\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x03" +
		"\x02\x02\x02\u0177\u0178\x07\x06\x02\x02\u0178\u0179\x07\r\x02\x02\u0179" +
		"\u0185\x03\x02\x02\x02\u017A\u017C\x07\x06\x02\x02\u017B\u017A\x03\x02" +
		"\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
		"\u017E\x07\x04\x02\x02\u017E\u0180\x054\x1B\x02\u017F\u0181\x07\x06\x02" +
		"\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0183\x07\x04\x02\x02\u0183\u0185\x03\x02\x02\x02" +
		"\u0184\u016C\x03\x02\x02\x02\u0184\u017B\x03\x02\x02\x02\u0185\u0187\x03" +
		"\x02\x02\x02\u0186\u0169\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187" +
		"\x1B\x03\x02\x02\x02\u0188\u018A\x05\x1E\x10\x02\u0189\u018B\x078\x02" +
		"\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D" +
		"\x03\x02\x02\x02\u018C\u018E\x056\x1C\x02\u018D\u018C\x03\x02\x02\x02" +
		"\u018D\u018E\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x05" +
		".\x18\x02\u0190\u019D\x03\x02\x02\x02\u0191\u0193\x05.\x18\x02\u0192\u0194" +
		"\x078\x02\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194\u0196\x03\x02\x02\x02\u0195\u0197\x056\x1C\x02\u0196\u0195\x03" +
		"\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u019A\x05\x1E\x10\x02\u0199\u019B\t\x04\x02\x02\u019A\u0199\x03\x02\x02" +
		"\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C\u0188" +
		"\x03\x02\x02\x02\u019C\u0191\x03\x02\x02\x02\u019D\x1D\x03\x02\x02\x02" +
		"\u019E\u01A2\x05\"\x12\x02\u019F\u01A2\x05 \x11\x02\u01A0\u01A2\x05\f" +
		"\x07\x02\u01A1\u019E\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1" +
		"\u01A0\x03\x02\x02\x02\u01A2\x1F\x03\x02\x02\x02\u01A3\u01A5\x05&\x14" +
		"\x02\u01A4\u01A6\x078\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6" +
		"\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A9\x056\x1C\x02" +
		"\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03" +
		"\x02\x02\x02\u01AA\u01AC\x05(\x15\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB" +
		"\u01AC\x03\x02\x02\x02\u01AC\u01B8\x03\x02\x02\x02\u01AD\u01AF\x05(\x15" +
		"\x02\u01AE\u01B0\x078\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0" +
		"\x03\x02\x02\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01B3\x056\x1C\x02" +
		"\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03" +
		"\x02\x02\x02\u01B4\u01B5\x05&\x14\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6" +
		"\u01B8\x05$\x13\x02\u01B7\u01A3\x03\x02\x02\x02\u01B7\u01AD\x03\x02\x02" +
		"\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8!\x03\x02\x02\x02\u01B9\u01BA\x07" +
		"\x06\x02\x02\u01BA\u01C7\x07\f\x02\x02\u01BB\u01C7\x07\x07\x02\x02\u01BC" +
		"\u01BD\x05n8\x02\u01BD\u01BE\x07\f\x02\x02\u01BE\u01BF\x052\x1A\x02\u01BF" +
		"\u01C5\x03\x02\x02\x02\u01C0\u01C1\x052\x1A";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01C1\u01C2\x05n8\x02\u01C2\u01C3\x07\f\x02\x02\u01C3\u01C5\x03\x02" +
		"\x02\x02\u01C4\u01BC\x03\x02\x02\x02\u01C4\u01C0\x03\x02\x02\x02\u01C5" +
		"\u01C7\x03\x02\x02\x02\u01C6\u01B9\x03\x02\x02\x02\u01C6\u01BB\x03\x02" +
		"\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7#\x03\x02\x02\x02\u01C8\u01CA" +
		"\x07\x06\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01D6\x07\x04\x02\x02\u01CC\u01CE\x07" +
		"\x04\x02\x02\u01CD\u01CF\x078\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE" +
		"\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02\u01D0\u01D2\x056\x1C" +
		"\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3" +
		"\x03\x02\x02\x02\u01D3\u01D4\x07\x06\x02\x02\u01D4\u01D6\x07\r\x02\x02" +
		"\u01D5\u01C9\x03\x02\x02\x02\u01D5\u01CC\x03\x02\x02\x02\u01D6\u01EA\x03" +
		"\x02\x02\x02\u01D7\u01D9\x07\x04\x02\x02\u01D8\u01DA\x078\x02\x02\u01D9" +
		"\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x03\x02" +
		"\x02\x02\u01DB\u01DC\x05n8\x02\u01DC\u01DD\x07\r\x02\x02\u01DD\u01DE\x05" +
		"2\x1A\x02\u01DE\u01E8\x03\x02\x02\x02\u01DF\u01E1\x07\x04\x02\x02\u01E0" +
		"\u01E2\x078\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02" +
		"\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x052\x1A\x02\u01E4\u01E5" +
		"\x05n8\x02\u01E5\u01E6\x07\r\x02\x02\u01E6\u01E8\x03\x02\x02\x02\u01E7" +
		"\u01D7\x03\x02\x02\x02\u01E7\u01DF\x03\x02\x02\x02\u01E8\u01EA\x03\x02" +
		"\x02\x02\u01E9\u01D5\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
		"%\x03\x02\x02\x02\u01EB\u01ED\x05*\x16\x02\u01EC\u01EE\x078\x02\x02\u01ED" +
		"\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03\x02" +
		"\x02\x02\u01EF\u01F1\x056\x1C\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1" +
		"\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x05,\x17\x02" +
		"\u01F3\u01FE\x03\x02\x02\x02\u01F4\u01F6\x05,\x17\x02\u01F5\u01F7\x07" +
		"8\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
		"\u01F9\x03\x02\x02\x02\u01F8\u01FA\x056\x1C\x02\u01F9\u01F8\x03\x02\x02" +
		"\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC" +
		"\x05*\x16\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01EB\x03\x02\x02\x02" +
		"\u01FD\u01F4\x03\x02\x02\x02\u01FE\'\x03\x02\x02\x02\u01FF\u0200\x07\x06" +
		"\x02\x02\u0200\u0207\x07\n\x02\x02\u0201\u0202\x05n8\x02\u0202\u0203\x07" +
		"\n\x02\x02\u0203\u0204\x052\x1A\x02\u0204\u0207\x03\x02\x02\x02\u0205" +
		"\u0207\x05l7\x02\u0206\u01FF\x03\x02\x02\x02\u0206\u0201\x03\x02\x02\x02" +
		"\u0206\u0205\x03\x02\x02\x02\u0207)\x03\x02\x02\x02\u0208\u020A\x07\x06" +
		"\x02\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020B\x03\x02\x02\x02\u020B\u0219\x07\x03\x02\x02\u020C\u020D\x07\x06" +
		"\x02\x02\u020D\u0219\x07\v\x02\x02\u020E\u020F\x05n8\x02\u020F\u0210\x07" +
		"\v\x02\x02\u0210\u0211\x052\x1A\x02\u0211\u0217\x03\x02\x02\x02\u0212" +
		"\u0213\x052\x1A\x02\u0213\u0214\x05n8\x02\u0214\u0215\x07\v\x02\x02\u0215" +
		"\u0217\x03\x02\x02\x02\u0216\u020E\x03\x02\x02\x02\u0216\u0212\x03\x02" +
		"\x02\x02\u0217\u0219\x03\x02\x02\x02\u0218\u0209\x03\x02\x02\x02\u0218" +
		"\u020C\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0219+\x03\x02\x02" +
		"\x02\u021A\u021B\t\x05\x02\x02\u021B-\x03\x02\x02\x02\u021C\u021D\x07" +
		"1\x02\x02\u021D\u021F\x07\x13\x02\x02\u021E\u0220\t\x04\x02\x02\u021F" +
		"\u021E\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0224\x03\x02" +
		"\x02\x02\u0221\u0222\x071\x02\x02\u0222\u0224\t\x04\x02\x02\u0223\u021C" +
		"\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224\u022A\x03\x02\x02\x02" +
		"\u0225\u0227\x05\x0E\b\x02\u0226\u0228\t\x04\x02\x02\u0227\u0226\x03\x02" +
		"\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u022A\x03\x02\x02\x02\u0229" +
		"\u0223\x03\x02\x02\x02\u0229\u0225\x03\x02\x02\x02\u022A/\x03\x02\x02" +
		"\x02\u022B\u022C\x052\x1A\x02\u022C\u022D\x05n8\x02\u022D\u0232\x07\x0E" +
		"\x02\x02\u022E\u022F\x07\x15\x02\x02\u022F\u0230\x05n8\x02\u0230\u0231" +
		"\x07\x0F\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u022E\x03\x02\x02\x02" +
		"\u0232\u0233\x03\x02\x02\x02\u0233\u023F\x03\x02\x02\x02\u0234\u0235\x05" +
		"n8\x02\u0235\u023A\x07\x0E\x02\x02\u0236\u0237\x07\x15\x02\x02\u0237\u0238" +
		"\x05n8\x02\u0238\u0239\x07\x0F\x02\x02\u0239\u023B\x03\x02\x02\x02\u023A" +
		"\u0236\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u023D\x052\x1A\x02\u023D\u023F\x03\x02\x02\x02\u023E\u022B" +
		"\x03\x02\x02\x02\u023E\u0234\x03\x02\x02\x02\u023F\u024B\x03\x02\x02\x02" +
		"\u0240\u0241\x052\x1A\x02\u0241\u0242\x05n8\x02\u0242\u0243\x07\x0F\x02" +
		"\x02\u0243\u0249\x03\x02\x02\x02\u0244\u0245\x05n8\x02\u0245\u0246\x07" +
		"\x0F\x02\x02\u0246\u0247\x052\x1A\x02\u0247\u0249\x03\x02\x02\x02\u0248" +
		"\u0240\x03\x02\x02\x02\u0248\u0244\x03\x02\x02\x02\u0249\u024B\x03\x02" +
		"\x02\x02\u024A\u023E\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024B" +
		"1\x03\x02\x02\x02\u024C\u024D\t\x06\x02\x02\u024D3\x03\x02\x02\x02\u024E" +
		"\u0251\x07\x16\x02\x02\u024F\u0251\x05\x16\f\x02\u0250\u024E\x03\x02\x02" +
		"\x02\u0250\u024F\x03\x02\x02\x02\u02515\x03\x02\x02\x02\u0252\u0253\x07" +
		"\x14\x02\x02\u02537\x03\x02\x02\x02\u0254\u0289\x05:\x1E\x02\u0255\u0257" +
		"\x05H%\x02\u0256\u0258\x078\x02\x02\u0257\u0256\x03\x02\x02\x02\u0257" +
		"\u0258\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u0255\x03\x02" +
		"\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B" +
		"\u025D\x07/\x02\x02\u025C\u025B\x03\x02\x02\x02\u025C\u025D\x03\x02\x02" +
		"\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260\x05J&\x02\u025F\u0261\x07" +
		"8\x02\x02\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261" +
		"\u0263\x03\x02\x02\x02\u0262\u0264\x07/\x02\x02\u0263\u0262\x03\x02\x02" +
		"\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0266" +
		"\x05L\'\x02\u0266\u0268\x05h5\x02\u0267\u0269\x05J&\x02\u0268\u0267\x03" +
		"\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A" +
		"\u026B\x05L\'\x02\u026B\u0289\x03\x02\x02\x02\u026C\u026E\x07/\x02\x02" +
		"\u026D\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x03" +
		"\x02\x02\x02\u026F\u0270\x05> \x02\u0270\u0271\x05h5\x02\u0271\u0272\x05" +
		"> \x02\u0272\u0289\x03\x02\x02\x02\u0273\u0275\x07/\x02\x02\u0274\u0273" +
		"\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02" +
		"\u0276\u0277\x05<\x1F\x02\u0277\u0278\x05h5\x02\u0278\u0279\x05<\x1F\x02" +
		"\u0279\u0289\x03\x02\x02\x02\u027A\u027C\x07/\x02\x02\u027B\u027A\x03" +
		"\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
		"\u027E\x05<\x1F\x02\u027E\u027F\x05h5\x02\u027F\u0280\x05N(\x02\u0280" +
		"\u0289\x03\x02\x02\x02\u0281\u0283\x07/\x02\x02\u0282\u0281\x03\x02\x02" +
		"\x02\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0285" +
		"\x05N(\x02\u0285\u0286\x05h5\x02\u0286\u0287\x05N(\x02\u0287\u0289\x03" +
		"\x02\x02\x02\u0288\u0254\x03\x02\x02\x02\u0288\u0259\x03\x02\x02\x02\u0288" +
		"\u026D\x03\x02\x02\x02\u0288\u0274\x03\x02\x02\x02\u0288\u027B\x03\x02" +
		"\x02\x02\u0288\u0282\x03\x02\x02\x02\u02899\x03\x02\x02\x02\u028A\u028B" +
		"\x05T+\x02\u028B\u028C\x07\"\x02\x02\u028C\u028E\x05\\/\x02\u028D\u028F" +
		"\x078\x02\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02" +
		"\u028F\u0291\x03\x02\x02\x02\u0290\u0292\x07.\x02\x02\u0291\u0290\x03" +
		"\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293" +
		"\u0294\x05V,\x02\u0294\u0295\x05h5\x02\u0295\u0296\x05V,\x02\u0296\u02A5" +
		"\x03\x02\x02\x02\u0297\u0299\x07/\x02\x02\u0298\u0297\x03\x02\x02\x02" +
		"\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x05" +
		"V,\x02\u029B\u029C\x05h5\x02\u029C\u029E\x05V,\x02\u029D\u029F\x078\x02" +
		"\x02\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0" +
		"\x03\x02\x02\x02\u02A0\u02A1\x05T+\x02\u02A1\u02A2\x07\"\x02\x02\u02A2" +
		"\u02A3\x05\\/\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u028A\x03\x02\x02" +
		"\x02\u02A4\u0298\x03\x02\x02\x02\u02A5\u02B2\x03\x02\x02\x02\u02A6\u02A8" +
		"\x07/\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02" +
		"\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AA\x05^0\x02\u02AA\u02AB\x05V,\x02" +
		"\u02AB\u02AD\x05h5\x02\u02AC\u02AE\x05^0\x02\u02AD\u02AC\x03\x02\x02\x02" +
		"\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0\x05" +
		"V,\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02A4\x03\x02\x02\x02\u02B1\u02A7" +
		"\x03\x02\x02\x02\u02B2;\x03\x02\x02\x02\u02B3\u02B5\x05> \x02\u02B4\u02B6" +
		"\x078\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02" +
		"\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B8\x05N(\x02\u02B8\u02C2\x03\x02" +
		"\x02\x02\u02B9\u02BB\x05N(\x02\u02BA\u02BC\x078\x02\x02\u02BB\u02BA\x03" +
		"\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD" +
		"\u02BF\x05> \x02\u02BE\u02C0\x05`1\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0\u02C2\x03\x02\x02\x02\u02C1\u02B3\x03\x02" +
		"\x02\x02\u02C1\u02B9\x03\x02\x02\x02\u02C2=\x03\x02\x02\x02\u02C3\u02C7" +
		"\x05B\"\x02\u02C4\u02C7\x05@!\x02\u02C5\u02C7\x05\f\x07\x02\u02C6\u02C3" +
		"\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C5\x03\x02\x02\x02" +
		"\u02C7?\x03\x02\x02\x02\u02C8\u02CA\x05H%\x02\u02C9\u02CB\x078\x02\x02" +
		"\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x03" +
		"\x02\x02\x02\u02CC\u02CD\x05F$\x02\u02CD\u02D7\x03\x02\x02\x02\u02CE\u02D0" +
		"\x05F$\x02\u02CF\u02D1\x078\x02\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0" +
		"\u02D1\x03\x02\x02\x02\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02D4\x05H%\x02" +
		"\u02D3\u02D2\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D7\x03" +
		"\x02\x02\x02\u02D5\u02D7\x05D#\x02\u02D6\u02C8\x03\x02\x02\x02\u02D6\u02CE" +
		"\x03\x02\x02\x02\u02D6\u02D5\x03\x02\x02\x02\u02D7A\x03\x02\x02\x02\u02D8" +
		"\u02D9\x05^0\x02\u02D9\u02DA\t\x07\x02\x02\u02DA\u02E0\x03\x02\x02\x02" +
		"\u02DB\u02DC\x05T+\x02\u02DC\u02DD\t\x07\x02\x02\u02DD\u02DE\x05\\/\x02" +
		"\u02DE\u02E0\x03\x02\x02\x02\u02DF\u02D8\x03\x02\x02\x02\u02DF\u02DB\x03" +
		"\x02\x02\x02\u02E0C\x03\x02\x02\x02\u02E1\u02E2\x05T+\x02\u02E2\u02E3" +
		"\x07\"\x02\x02\u02E3\u02E5\x05\\/\x02\u02E4\u02E6\x07.\x02\x02\u02E5\u02E4" +
		"\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02" +
		"\u02E7\u02E8\x05V,\x02\u02E8\u02F4\x03\x02\x02\x02\u02E9\u02EB\x05^0\x02" +
		"\u02EA\u02E9\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02ED\x03" +
		"\x02\x02\x02\u02EC\u02EE\x07\"\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED" +
		"\u02EE\x03\x02\x02\x02\u02EE\u02F0\x03\x02\x02\x02\u02EF\u02F1\x07.\x02" +
		"\x02\u02F0\u02EF\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2" +
		"\x03\x02\x02\x02\u02F2\u02F4\x05V,\x02\u02F3\u02E1\x03\x02\x02\x02\u02F3" +
		"\u02EA\x03\x02\x02\x02\u02F4E\x03\x02\x02\x02\u02F5\u02F6\x05J&\x02\u02F6" +
		"\u02F7\x05L\'\x02\u02F7G\x03\x02\x02\x02\u02F8\u02F9\x05^0\x02\u02F9\u02FA" +
		"\x07\x1C\x02\x02\u02FA\u0303\x03\x02\x02\x02\u02FB\u02FC\x05T+\x02\u02FC" +
		"\u02FD\x07\x1C\x02\x02\u02FD\u02FE\x05\\/\x02\u02FE\u0303\x03\x02\x02" +
		"\x02\u02FF\u0300\x05X-\x02\u0300\u0301\x07\x1C\x02\x02\u0301\u0303\x03" +
		"\x02\x02\x02\u0302\u02F8\x03\x02\x02\x02\u0302\u02FB\x03\x02\x02\x02\u0302" +
		"\u02FF\x03\x02\x02\x02\u0303I\x03\x02\x02\x02\u0304\u0305\x05Z.\x02\u0305" +
		"\u0306\x07\x1D\x02\x02\u0306\u030F\x03\x02\x02\x02\u0307\u0308\x05^0\x02" +
		"\u0308\u0309\t\b\x02\x02\u0309\u030F\x03\x02\x02\x02\u030A\u030B\x05T" +
		"+\x02\u030B\u030C\x07\x1E\x02\x02\u030C\u030D\x05\\/\x02\u030D\u030F\x03" +
		"\x02\x02\x02\u030E\u0304\x03\x02\x02\x02\u030E\u0307\x03\x02\x02\x02\u030E" +
		"\u030A\x03\x02\x02\x02\u030FK\x03\x02\x02\x02\u0310\u0312\x05Z.\x02\u0311" +
		"\u0313\t\t\x02\x02\u0312\u0311\x03\x02\x02\x02\u0312\u0313\x03\x02\x02" +
		"\x02\u0313M\x03\x02\x02\x02\u0314\u0317\x05P)\x02\u0315\u0317\x05\x0E" +
		"\b\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0315\x03\x02\x02\x02\u0317O" +
		"\x03\x02\x02\x02\u0318\u031A\x05`1\x02\u0319\u0318\x03\x02\x02\x02\u0319" +
		"\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031C\x05T+\x02" +
		"\u031C\u031E\x05b2\x02\u031D\u031F\x07$\x02\x02\u031E\u031D\x03\x02\x02" +
		"\x02\u031E\u031F\x03\x02\x02\x02\u031F\u032A\x03\x02\x02\x02\u0320\u0322" +
		"\x05T+\x02\u0321\u0323\x05d3\x02\u0322\u0321\x03\x02\x02\x02\u0322\u0323" +
		"\x03\x02\x02\x02\u0323\u0328\x03\x02\x02\x02\u0324\u0326\x05T+\x02\u0325" +
		"\u0327\x05f4\x02\u0326\u0325\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02" +
		"\u0327\u0329\x03\x02\x02\x02\u0328\u0324\x03\x02\x02\x02\u0328\u0329\x03" +
		"\x02\x02\x02\u0329\u032B\x03\x02\x02\x02\u032A\u0320\x03\x02\x02\x02\u032A" +
		"\u032B\x03\x02\x02\x02\u032BQ\x03\x02\x02\x02\u032C\u032D\x05T+\x02\u032D" +
		"\u0331\x07%\x02\x02\u032E\u032F\x05T+\x02\u032F\u0330\x07\'\x02\x02\u0330" +
		"\u0332\x03\x02\x02\x02\u0331\u032E\x03\x02\x02\x02\u0331\u0332\x03\x02" +
		"\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0334\x05\\/\x02\u0334\u033A" +
		"\x03\x02\x02\x02\u0335\u0336\x05T+\x02\u0336\u0337\x07\'\x02\x02\u0337" +
		"\u0338\x05\\/\x02\u0338\u033A\x03\x02\x02\x02\u0339\u032C\x03\x02\x02" +
		"\x02\u0339\u0335\x03\x02\x02\x02\u033AS\x03\x02\x02\x02\u033B\u033E\x07" +
		"\x18\x02\x02\u033C\u033E\x05n8\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C" +
		"\x03\x02\x02\x02\u033EU\x03\x02\x02\x02\u033F\u0343\x07\"\x02\x02\u0340" +
		"\u0344\x05T+\x02\u0341\u0344\x07!\x02\x02\u0342\u0344\x07\x1F\x02\x02" +
		"\u0343\u0340\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0342\x03" +
		"\x02\x02\x02\u0344W\x03\x02\x02\x02\u0345\u0348\x07\x18\x02\x02\u0346" +
		"\u0348\x05l7\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0346\x03\x02\x02\x02" +
		"\u0348Y\x03\x02\x02\x02\u0349\u034A\t\n\x02\x02\u034A[\x03\x02\x02\x02" +
		"\u034B\u034C\t\v\x02\x02\u034C]\x03\x02\x02\x02\u034D\u034E\t\f\x02\x02" +
		"\u034E_\x03\x02\x02\x02\u034F\u0350\t\r\x02\x02\u0350a\x03\x02\x02\x02" +
		"\u0351\u0352\t\x0E\x02\x02\u0352c\x03\x02\x02\x02\u0353\u0354\t\x0F\x02" +
		"\x02\u0354e\x03\x02\x02\x02\u0355\u0356\x07(\x02\x02\u0356g\x03\x02\x02" +
		"\x02\u0357\u035A\x07,\x02\x02\u0358\u035A\x05\x16\f\x02\u0359\u0357\x03" +
		"\x02\x02\x02\u0359\u0358\x03\x02\x02\x02\u035Ai\x03\x02\x02\x02\u035B" +
		"\u035C\x07-\x02\x02\u035Ck\x03\x02\x02\x02\u035D\u035E\t\x10\x02\x02\u035E" +
		"m\x03\x02\x02\x02\u035F\u0360\t\x11\x02\x02\u0360o\x03\x02\x02\x02\u0361" +
		"\u0365\x05r:\x02\u0362\u0365\x05t;\x02\u0363\u0365\x05v<\x02\u0364\u0361" +
		"\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0364\u0363\x03\x02\x02\x02" +
		"\u0365q\x03\x02\x02\x02\u0366\u0367\t\x12\x02\x02\u0367s\x03\x02\x02\x02" +
		"\u0368\u0369\t\x13\x02\x02\u0369u\x03\x02\x02\x02\u036A\u036B\t\x14\x02" +
		"\x02\u036Bw\x03\x02\x02\x02\x9By\x7F\x81\x84\x88\x8C\x90\x94\x98\x9C\xA0" +
		"\xA4\xA8\xAC\xAF\xC1\xC4\xC6\xCF\xDB\xE2\xE8\xEC\xEF\xF4\xFC\xFF\u0103" +
		"\u0106\u0109\u010C\u010F\u0113\u0116\u011C\u0120\u0123\u0129\u012D\u0130" +
		"\u0136\u013A\u013D\u0142\u0145\u0148\u014A\u014D\u0153\u0156\u0160\u0163" +
		"\u0169\u016C\u0172\u0175\u017B\u0180\u0184\u0186\u018A\u018D\u0193\u0196" +
		"\u019A\u019C\u01A1\u01A5\u01A8\u01AB\u01AF\u01B2\u01B7\u01C4\u01C6\u01C9" +
		"\u01CE\u01D1\u01D5\u01D9\u01E1\u01E7\u01E9\u01ED\u01F0\u01F6\u01F9\u01FD" +
		"\u0206\u0209\u0216\u0218\u021F\u0223\u0227\u0229\u0232\u023A\u023E\u0248" +
		"\u024A\u0250\u0257\u0259\u025C\u0260\u0263\u0268\u026D\u0274\u027B\u0282" +
		"\u0288\u028E\u0291\u0298\u029E\u02A4\u02A7\u02AD\u02B1\u02B5\u02BB\u02BF" +
		"\u02C1\u02C6\u02CA\u02D0\u02D3\u02D6\u02DF\u02E5\u02EA\u02ED\u02F0\u02F3" +
		"\u0302\u030E\u0312\u0316\u0319\u031E\u0322\u0326\u0328\u032A\u0331\u0339" +
		"\u033D\u0343\u0347\u0359\u0364";
	public static readonly _serializedATN: string = Utils.join(
		[
			TimeParser._serializedATNSegment0,
			TimeParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TimeParser.__ATN) {
			TimeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TimeParser._serializedATN));
		}

		return TimeParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TimeParser.EOF, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_program; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public uselessWords(): UselessWordsContext[];
	public uselessWords(i: number): UselessWordsContext;
	public uselessWords(i?: number): UselessWordsContext | UselessWordsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UselessWordsContext);
		} else {
			return this.getRuleContext(i, UselessWordsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_statementList; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public enPeriod(): EnPeriodContext | undefined {
		return this.tryGetRuleContext(0, EnPeriodContext);
	}
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	public zhPeriod(): ZhPeriodContext | undefined {
		return this.tryGetRuleContext(0, ZhPeriodContext);
	}
	public zhAt(): ZhAtContext | undefined {
		return this.tryGetRuleContext(0, ZhAtContext);
	}
	public enDateTime(): EnDateTimeContext | undefined {
		return this.tryGetRuleContext(0, EnDateTimeContext);
	}
	public zhDateTime(): ZhDateTimeContext | undefined {
		return this.tryGetRuleContext(0, ZhDateTimeContext);
	}
	public stdDateTime(): StdDateTimeContext | undefined {
		return this.tryGetRuleContext(0, StdDateTimeContext);
	}
	public enDate(): EnDateContext | undefined {
		return this.tryGetRuleContext(0, EnDateContext);
	}
	public zhDate(): ZhDateContext | undefined {
		return this.tryGetRuleContext(0, ZhDateContext);
	}
	public enTime(): EnTimeContext | undefined {
		return this.tryGetRuleContext(0, EnTimeContext);
	}
	public zhTime(): ZhTimeContext | undefined {
		return this.tryGetRuleContext(0, ZhTimeContext);
	}
	public enDirectTimeAround(): EnDirectTimeAroundContext | undefined {
		return this.tryGetRuleContext(0, EnDirectTimeAroundContext);
	}
	public zhDirectTimeAround(): ZhDirectTimeAroundContext | undefined {
		return this.tryGetRuleContext(0, ZhDirectTimeAroundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_statement; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdPeriodContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdPeriod; }
	public copyFrom(ctx: StdPeriodContext): void {
		super.copyFrom(ctx);
	}
}
export class StdPeriodDateToDateContext extends StdPeriodContext {
	public stdDate(): StdDateContext[];
	public stdDate(i: number): StdDateContext;
	public stdDate(i?: number): StdDateContext | StdDateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StdDateContext);
		} else {
			return this.getRuleContext(i, StdDateContext);
		}
	}
	public stdPeriodTo(): StdPeriodToContext {
		return this.getRuleContext(0, StdPeriodToContext);
	}
	constructor(ctx: StdPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdPeriodDateToDate) {
			listener.enterStdPeriodDateToDate(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdPeriodDateToDate) {
			listener.exitStdPeriodDateToDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdPeriodDateToDate) {
			return visitor.visitStdPeriodDateToDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StdPeriodDateTimeToDateTimeContext extends StdPeriodContext {
	public stdDateTime(): StdDateTimeContext[];
	public stdDateTime(i: number): StdDateTimeContext;
	public stdDateTime(i?: number): StdDateTimeContext | StdDateTimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StdDateTimeContext);
		} else {
			return this.getRuleContext(i, StdDateTimeContext);
		}
	}
	public stdPeriodTo(): StdPeriodToContext {
		return this.getRuleContext(0, StdPeriodToContext);
	}
	constructor(ctx: StdPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdPeriodDateTimeToDateTime) {
			listener.enterStdPeriodDateTimeToDateTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdPeriodDateTimeToDateTime) {
			listener.exitStdPeriodDateTimeToDateTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdPeriodDateTimeToDateTime) {
			return visitor.visitStdPeriodDateTimeToDateTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StdPeriodDateTimeToTimeContext extends StdPeriodContext {
	public stdDateTime(): StdDateTimeContext {
		return this.getRuleContext(0, StdDateTimeContext);
	}
	public stdPeriodTo(): StdPeriodToContext {
		return this.getRuleContext(0, StdPeriodToContext);
	}
	public stdTime(): StdTimeContext {
		return this.getRuleContext(0, StdTimeContext);
	}
	constructor(ctx: StdPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdPeriodDateTimeToTime) {
			listener.enterStdPeriodDateTimeToTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdPeriodDateTimeToTime) {
			listener.exitStdPeriodDateTimeToTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdPeriodDateTimeToTime) {
			return visitor.visitStdPeriodDateTimeToTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StdPeriodTimeToTimeContext extends StdPeriodContext {
	public stdTime(): StdTimeContext[];
	public stdTime(i: number): StdTimeContext;
	public stdTime(i?: number): StdTimeContext | StdTimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StdTimeContext);
		} else {
			return this.getRuleContext(i, StdTimeContext);
		}
	}
	public stdPeriodTo(): StdPeriodToContext {
		return this.getRuleContext(0, StdPeriodToContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public stdDate(): StdDateContext | undefined {
		return this.tryGetRuleContext(0, StdDateContext);
	}
	constructor(ctx: StdPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdPeriodTimeToTime) {
			listener.enterStdPeriodTimeToTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdPeriodTimeToTime) {
			listener.exitStdPeriodTimeToTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdPeriodTimeToTime) {
			return visitor.visitStdPeriodTimeToTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdDateTimeContext extends ParserRuleContext {
	public stdDate(): StdDateContext {
		return this.getRuleContext(0, StdDateContext);
	}
	public stdDateTimeConnector(): StdDateTimeConnectorContext {
		return this.getRuleContext(0, StdDateTimeConnectorContext);
	}
	public stdTime(): StdTimeContext {
		return this.getRuleContext(0, StdTimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdDateTime; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdDateTime) {
			listener.enterStdDateTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdDateTime) {
			listener.exitStdDateTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdDateTime) {
			return visitor.visitStdDateTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdDateContext extends ParserRuleContext {
	public DateNumber(): TerminalNode[];
	public DateNumber(i: number): TerminalNode;
	public DateNumber(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.DateNumber);
		} else {
			return this.getToken(TimeParser.DateNumber, i);
		}
	}
	public stdDateConnector(): StdDateConnectorContext[];
	public stdDateConnector(i: number): StdDateConnectorContext;
	public stdDateConnector(i?: number): StdDateConnectorContext | StdDateConnectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StdDateConnectorContext);
		} else {
			return this.getRuleContext(i, StdDateConnectorContext);
		}
	}
	public yearValue(): YearValueContext | undefined {
		return this.tryGetRuleContext(0, YearValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdDate; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdDate) {
			listener.enterStdDate(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdDate) {
			listener.exitStdDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdDate) {
			return visitor.visitStdDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdTimeContext extends ParserRuleContext {
	public DateNumber(): TerminalNode[];
	public DateNumber(i: number): TerminalNode;
	public DateNumber(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.DateNumber);
		} else {
			return this.getToken(TimeParser.DateNumber, i);
		}
	}
	public stdTimeConnector(): StdTimeConnectorContext[];
	public stdTimeConnector(i: number): StdTimeConnectorContext;
	public stdTimeConnector(i?: number): StdTimeConnectorContext | StdTimeConnectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StdTimeConnectorContext);
		} else {
			return this.getRuleContext(i, StdTimeConnectorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdTime; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdTime) {
			listener.enterStdTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdTime) {
			listener.exitStdTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdTime) {
			return visitor.visitStdTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdDateConnectorContext extends ParserRuleContext {
	public MiddelConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.MiddelConnectorWord, 0); }
	public SlashConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.SlashConnectorWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdDateConnector; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdDateConnector) {
			listener.enterStdDateConnector(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdDateConnector) {
			listener.exitStdDateConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdDateConnector) {
			return visitor.visitStdDateConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdTimeConnectorContext extends ParserRuleContext {
	public TimeConnectorWord(): TerminalNode { return this.getToken(TimeParser.TimeConnectorWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdTimeConnector; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdTimeConnector) {
			listener.enterStdTimeConnector(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdTimeConnector) {
			listener.exitStdTimeConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdTimeConnector) {
			return visitor.visitStdTimeConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdDateTimeConnectorContext extends ParserRuleContext {
	public DateTimeConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.DateTimeConnectorWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdDateTimeConnector; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdDateTimeConnector) {
			listener.enterStdDateTimeConnector(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdDateTimeConnector) {
			listener.exitStdDateTimeConnector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdDateTimeConnector) {
			return visitor.visitStdDateTimeConnector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdPeriodToContext extends ParserRuleContext {
	public MiddelConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.MiddelConnectorWord, 0); }
	public MiddelConnectorCurve(): TerminalNode | undefined { return this.tryGetToken(TimeParser.MiddelConnectorCurve, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdPeriodTo; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdPeriodTo) {
			listener.enterStdPeriodTo(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdPeriodTo) {
			listener.exitStdPeriodTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdPeriodTo) {
			return visitor.visitStdPeriodTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnPeriodContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enPeriod; }
	public copyFrom(ctx: EnPeriodContext): void {
		super.copyFrom(ctx);
	}
}
export class EnPeriodWeekDayNodeContext extends EnPeriodContext {
	public enPeriodWeek(): EnPeriodWeekContext {
		return this.getRuleContext(0, EnPeriodWeekContext);
	}
	constructor(ctx: EnPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodWeekDayNode) {
			listener.enterEnPeriodWeekDayNode(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodWeekDayNode) {
			listener.exitEnPeriodWeekDayNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodWeekDayNode) {
			return visitor.visitEnPeriodWeekDayNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnPeriodMonthDayToMonthDayContext extends EnPeriodContext {
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.Comma);
		} else {
			return this.getToken(TimeParser.Comma, i);
		}
	}
	public enAt(): EnAtContext[];
	public enAt(i: number): EnAtContext;
	public enAt(i?: number): EnAtContext | EnAtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnAtContext);
		} else {
			return this.getRuleContext(i, EnAtContext);
		}
	}
	public enYear(): EnYearContext | undefined {
		return this.tryGetRuleContext(0, EnYearContext);
	}
	public enMonth(): EnMonthContext[];
	public enMonth(i: number): EnMonthContext;
	public enMonth(i?: number): EnMonthContext | EnMonthContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnMonthContext);
		} else {
			return this.getRuleContext(i, EnMonthContext);
		}
	}
	public enDay(): EnDayContext[];
	public enDay(i: number): EnDayContext;
	public enDay(i?: number): EnDayContext | EnDayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnDayContext);
		} else {
			return this.getRuleContext(i, EnDayContext);
		}
	}
	public enPeriodTo(): EnPeriodToContext | undefined {
		return this.tryGetRuleContext(0, EnPeriodToContext);
	}
	constructor(ctx: EnPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodMonthDayToMonthDay) {
			listener.enterEnPeriodMonthDayToMonthDay(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodMonthDayToMonthDay) {
			listener.exitEnPeriodMonthDayToMonthDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodMonthDayToMonthDay) {
			return visitor.visitEnPeriodMonthDayToMonthDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnPeriodDateTimeToDateTimeContext extends EnPeriodContext {
	public enDateTime(): EnDateTimeContext[];
	public enDateTime(i: number): EnDateTimeContext;
	public enDateTime(i?: number): EnDateTimeContext | EnDateTimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnDateTimeContext);
		} else {
			return this.getRuleContext(i, EnDateTimeContext);
		}
	}
	public enPeriodTo(): EnPeriodToContext {
		return this.getRuleContext(0, EnPeriodToContext);
	}
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	constructor(ctx: EnPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodDateTimeToDateTime) {
			listener.enterEnPeriodDateTimeToDateTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodDateTimeToDateTime) {
			listener.exitEnPeriodDateTimeToDateTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodDateTimeToDateTime) {
			return visitor.visitEnPeriodDateTimeToDateTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnPeriodDateTimeToTimeContext extends EnPeriodContext {
	public enDateTime(): EnDateTimeContext {
		return this.getRuleContext(0, EnDateTimeContext);
	}
	public enPeriodTo(): EnPeriodToContext {
		return this.getRuleContext(0, EnPeriodToContext);
	}
	public enTime(): EnTimeContext {
		return this.getRuleContext(0, EnTimeContext);
	}
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	constructor(ctx: EnPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodDateTimeToTime) {
			listener.enterEnPeriodDateTimeToTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodDateTimeToTime) {
			listener.exitEnPeriodDateTimeToTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodDateTimeToTime) {
			return visitor.visitEnPeriodDateTimeToTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnPeriodDateToDateContext extends EnPeriodContext {
	public enDate(): EnDateContext[];
	public enDate(i: number): EnDateContext;
	public enDate(i?: number): EnDateContext | EnDateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnDateContext);
		} else {
			return this.getRuleContext(i, EnDateContext);
		}
	}
	public enPeriodTo(): EnPeriodToContext {
		return this.getRuleContext(0, EnPeriodToContext);
	}
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	constructor(ctx: EnPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodDateToDate) {
			listener.enterEnPeriodDateToDate(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodDateToDate) {
			listener.exitEnPeriodDateToDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodDateToDate) {
			return visitor.visitEnPeriodDateToDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnPeriodTimeToTimeContext extends EnPeriodContext {
	public enTime(): EnTimeContext[];
	public enTime(i: number): EnTimeContext;
	public enTime(i?: number): EnTimeContext | EnTimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnTimeContext);
		} else {
			return this.getRuleContext(i, EnTimeContext);
		}
	}
	public enPeriodTo(): EnPeriodToContext {
		return this.getRuleContext(0, EnPeriodToContext);
	}
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.Comma);
		} else {
			return this.getToken(TimeParser.Comma, i);
		}
	}
	public enAt(): EnAtContext[];
	public enAt(i: number): EnAtContext;
	public enAt(i?: number): EnAtContext | EnAtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnAtContext);
		} else {
			return this.getRuleContext(i, EnAtContext);
		}
	}
	public enDate(): EnDateContext | undefined {
		return this.tryGetRuleContext(0, EnDateContext);
	}
	constructor(ctx: EnPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodTimeToTime) {
			listener.enterEnPeriodTimeToTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodTimeToTime) {
			listener.exitEnPeriodTimeToTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodTimeToTime) {
			return visitor.visitEnPeriodTimeToTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnPeriodWeekContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enPeriodWeek; }
	public copyFrom(ctx: EnPeriodWeekContext): void {
		super.copyFrom(ctx);
	}
}
export class EnPeriodWeek_1Context extends EnPeriodWeekContext {
	public EnWeekValue(): TerminalNode[];
	public EnWeekValue(i: number): TerminalNode;
	public EnWeekValue(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.EnWeekValue);
		} else {
			return this.getToken(TimeParser.EnWeekValue, i);
		}
	}
	public enPeriodTo(): EnPeriodToContext | undefined {
		return this.tryGetRuleContext(0, EnPeriodToContext);
	}
	public enStepAliasMark(): EnStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, EnStepAliasMarkContext);
	}
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	public EnWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekWord, 0); }
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	constructor(ctx: EnPeriodWeekContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodWeek_1) {
			listener.enterEnPeriodWeek_1(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodWeek_1) {
			listener.exitEnPeriodWeek_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodWeek_1) {
			return visitor.visitEnPeriodWeek_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnPeriodWeek_2Context extends EnPeriodWeekContext {
	public EnWeekValue(): TerminalNode[];
	public EnWeekValue(i: number): TerminalNode;
	public EnWeekValue(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.EnWeekValue);
		} else {
			return this.getToken(TimeParser.EnWeekValue, i);
		}
	}
	public enPeriodTo(): EnPeriodToContext | undefined {
		return this.tryGetRuleContext(0, EnPeriodToContext);
	}
	public EnAroundWord(): TerminalNode[];
	public EnAroundWord(i: number): TerminalNode;
	public EnAroundWord(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.EnAroundWord);
		} else {
			return this.getToken(TimeParser.EnAroundWord, i);
		}
	}
	public EnWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekWord, 0); }
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	constructor(ctx: EnPeriodWeekContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodWeek_2) {
			listener.enterEnPeriodWeek_2(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodWeek_2) {
			listener.exitEnPeriodWeek_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodWeek_2) {
			return visitor.visitEnPeriodWeek_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnDateTimeContext extends ParserRuleContext {
	public enDate(): EnDateContext {
		return this.getRuleContext(0, EnDateContext);
	}
	public enTime(): EnTimeContext {
		return this.getRuleContext(0, EnTimeContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	public EnAfternoonWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAfternoonWord, 0); }
	public EnMorningWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMorningWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enDateTime; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDateTime) {
			listener.enterEnDateTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDateTime) {
			listener.exitEnDateTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDateTime) {
			return visitor.visitEnDateTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnDateContext extends ParserRuleContext {
	public enDateAround(): EnDateAroundContext | undefined {
		return this.tryGetRuleContext(0, EnDateAroundContext);
	}
	public enDateNormal(): EnDateNormalContext | undefined {
		return this.tryGetRuleContext(0, EnDateNormalContext);
	}
	public stdDate(): StdDateContext | undefined {
		return this.tryGetRuleContext(0, StdDateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enDate; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDate) {
			listener.enterEnDate(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDate) {
			listener.exitEnDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDate) {
			return visitor.visitEnDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnDateNormalContext extends ParserRuleContext {
	public enMonthDay(): EnMonthDayContext | undefined {
		return this.tryGetRuleContext(0, EnMonthDayContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	public enYear(): EnYearContext | undefined {
		return this.tryGetRuleContext(0, EnYearContext);
	}
	public enWeekDay(): EnWeekDayContext | undefined {
		return this.tryGetRuleContext(0, EnWeekDayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enDateNormal; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDateNormal) {
			listener.enterEnDateNormal(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDateNormal) {
			listener.exitEnDateNormal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDateNormal) {
			return visitor.visitEnDateNormal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnDateAroundContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enDateAround; }
	public copyFrom(ctx: EnDateAroundContext): void {
		super.copyFrom(ctx);
	}
}
export class EnDateDayAroundAliasContext extends EnDateAroundContext {
	public EnAroundWord(): TerminalNode { return this.getToken(TimeParser.EnAroundWord, 0); }
	public EnDayWord(): TerminalNode { return this.getToken(TimeParser.EnDayWord, 0); }
	constructor(ctx: EnDateAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDateDayAroundAlias) {
			listener.enterEnDateDayAroundAlias(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDateDayAroundAlias) {
			listener.exitEnDateDayAroundAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDateDayAroundAlias) {
			return visitor.visitEnDateDayAroundAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnDateDayAroundAlias_2Context extends EnDateAroundContext {
	public EnAroundDayWord(): TerminalNode { return this.getToken(TimeParser.EnAroundDayWord, 0); }
	constructor(ctx: EnDateAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDateDayAroundAlias_2) {
			listener.enterEnDateDayAroundAlias_2(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDateDayAroundAlias_2) {
			listener.exitEnDateDayAroundAlias_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDateDayAroundAlias_2) {
			return visitor.visitEnDateDayAroundAlias_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnDateDayAroundStepContext extends EnDateAroundContext {
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	public EnDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnDayWord, 0); }
	public enStepAliasMark(): EnStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, EnStepAliasMarkContext);
	}
	constructor(ctx: EnDateAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDateDayAroundStep) {
			listener.enterEnDateDayAroundStep(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDateDayAroundStep) {
			listener.exitEnDateDayAroundStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDateDayAroundStep) {
			return visitor.visitEnDateDayAroundStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnWeekDayContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enWeekDay; }
	public copyFrom(ctx: EnWeekDayContext): void {
		super.copyFrom(ctx);
	}
}
export class EnDateWeekAroundAliasContext extends EnWeekDayContext {
	public EnWeekValue(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekValue, 0); }
	public EnAroundWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAroundWord, 0); }
	public EnWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekWord, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	constructor(ctx: EnWeekDayContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDateWeekAroundAlias) {
			listener.enterEnDateWeekAroundAlias(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDateWeekAroundAlias) {
			listener.exitEnDateWeekAroundAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDateWeekAroundAlias) {
			return visitor.visitEnDateWeekAroundAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnDateWeekAroundStepContext extends EnWeekDayContext {
	public EnWeekValue(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekValue, 0); }
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	public EnWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekWord, 0); }
	public enStepAliasMark(): EnStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, EnStepAliasMarkContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	constructor(ctx: EnWeekDayContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDateWeekAroundStep) {
			listener.enterEnDateWeekAroundStep(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDateWeekAroundStep) {
			listener.exitEnDateWeekAroundStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDateWeekAroundStep) {
			return visitor.visitEnDateWeekAroundStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnMonthDayContext extends ParserRuleContext {
	public enMonth(): EnMonthContext {
		return this.getRuleContext(0, EnMonthContext);
	}
	public enDay(): EnDayContext {
		return this.getRuleContext(0, EnDayContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public enAt(): EnAtContext | undefined {
		return this.tryGetRuleContext(0, EnAtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enMonthDay; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnMonthDay) {
			listener.enterEnMonthDay(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnMonthDay) {
			listener.exitEnMonthDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnMonthDay) {
			return visitor.visitEnMonthDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnYearContext extends ParserRuleContext {
	public EnAroundWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAroundWord, 0); }
	public EnYearWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnYearWord, 0); }
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	public enStepAliasMark(): EnStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, EnStepAliasMarkContext);
	}
	public yearValue(): YearValueContext | undefined {
		return this.tryGetRuleContext(0, YearValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enYear; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnYear) {
			listener.enterEnYear(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnYear) {
			listener.exitEnYear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnYear) {
			return visitor.visitEnYear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnMonthContext extends ParserRuleContext {
	public EnMonthValue(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMonthValue, 0); }
	public EnAroundWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAroundWord, 0); }
	public EnMonthWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMonthWord, 0); }
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	public enStepAliasMark(): EnStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, EnStepAliasMarkContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enMonth; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnMonth) {
			listener.enterEnMonth(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnMonth) {
			listener.exitEnMonth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnMonth) {
			return visitor.visitEnMonth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnDayContext extends ParserRuleContext {
	public EnDayValue(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnDayValue, 0); }
	public DateNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.DateNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enDay; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnDay) {
			listener.enterEnDay(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnDay) {
			listener.exitEnDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnDay) {
			return visitor.visitEnDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnTimeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enTime; }
	public copyFrom(ctx: EnTimeContext): void {
		super.copyFrom(ctx);
	}
}
export class EnTimeOClockContext extends EnTimeContext {
	public DateNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.DateNumber, 0); }
	public EnHourWholeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnHourWholeWord, 0); }
	public EnAfternoonWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAfternoonWord, 0); }
	public EnMorningWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMorningWord, 0); }
	constructor(ctx: EnTimeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnTimeOClock) {
			listener.enterEnTimeOClock(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnTimeOClock) {
			listener.exitEnTimeOClock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnTimeOClock) {
			return visitor.visitEnTimeOClock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnTimeNormalContext extends EnTimeContext {
	public stdTime(): StdTimeContext {
		return this.getRuleContext(0, StdTimeContext);
	}
	public EnAfternoonWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAfternoonWord, 0); }
	public EnMorningWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMorningWord, 0); }
	constructor(ctx: EnTimeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnTimeNormal) {
			listener.enterEnTimeNormal(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnTimeNormal) {
			listener.exitEnTimeNormal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnTimeNormal) {
			return visitor.visitEnTimeNormal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnDirectTimeAroundContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enDirectTimeAround; }
	public copyFrom(ctx: EnDirectTimeAroundContext): void {
		super.copyFrom(ctx);
	}
}
export class EnTimeHourStepContext extends EnDirectTimeAroundContext {
	public enStepAliasMark(): EnStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, EnStepAliasMarkContext);
	}
	public numberValue(): NumberValueContext[];
	public numberValue(i: number): NumberValueContext;
	public numberValue(i?: number): NumberValueContext | NumberValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberValueContext);
		} else {
			return this.getRuleContext(i, NumberValueContext);
		}
	}
	public EnHourWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnHourWord, 0); }
	public EnAndWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAndWord, 0); }
	public EnMinuteWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMinuteWord, 0); }
	constructor(ctx: EnDirectTimeAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnTimeHourStep) {
			listener.enterEnTimeHourStep(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnTimeHourStep) {
			listener.exitEnTimeHourStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnTimeHourStep) {
			return visitor.visitEnTimeHourStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EnTimeMinuteStepContext extends EnDirectTimeAroundContext {
	public enStepAliasMark(): EnStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, EnStepAliasMarkContext);
	}
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	public EnMinuteWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMinuteWord, 0); }
	constructor(ctx: EnDirectTimeAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnTimeMinuteStep) {
			listener.enterEnTimeMinuteStep(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnTimeMinuteStep) {
			listener.exitEnTimeMinuteStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnTimeMinuteStep) {
			return visitor.visitEnTimeMinuteStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnStepAliasMarkContext extends ParserRuleContext {
	public EnBeforeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnBeforeWord, 0); }
	public EnAfterWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAfterWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enStepAliasMark; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnStepAliasMark) {
			listener.enterEnStepAliasMark(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnStepAliasMark) {
			listener.exitEnStepAliasMark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnStepAliasMark) {
			return visitor.visitEnStepAliasMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnPeriodToContext extends ParserRuleContext {
	public EnToWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnToWord, 0); }
	public stdPeriodTo(): StdPeriodToContext | undefined {
		return this.tryGetRuleContext(0, StdPeriodToContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enPeriodTo; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnPeriodTo) {
			listener.enterEnPeriodTo(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnPeriodTo) {
			listener.exitEnPeriodTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnPeriodTo) {
			return visitor.visitEnPeriodTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnAtContext extends ParserRuleContext {
	public EnAtWord(): TerminalNode { return this.getToken(TimeParser.EnAtWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enAt; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnAt) {
			listener.enterEnAt(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnAt) {
			listener.exitEnAt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnAt) {
			return visitor.visitEnAt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhPeriodContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhPeriod; }
	public copyFrom(ctx: ZhPeriodContext): void {
		super.copyFrom(ctx);
	}
}
export class ZhPeriodWeekDayNodeContext extends ZhPeriodContext {
	public zhPeriodWeek(): ZhPeriodWeekContext {
		return this.getRuleContext(0, ZhPeriodWeekContext);
	}
	constructor(ctx: ZhPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodWeekDayNode) {
			listener.enterZhPeriodWeekDayNode(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodWeekDayNode) {
			listener.exitZhPeriodWeekDayNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodWeekDayNode) {
			return visitor.visitZhPeriodWeekDayNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhPeriodMonthDayToMonthDayContext extends ZhPeriodContext {
	public zhMonth(): ZhMonthContext[];
	public zhMonth(i: number): ZhMonthContext;
	public zhMonth(i?: number): ZhMonthContext | ZhMonthContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhMonthContext);
		} else {
			return this.getRuleContext(i, ZhMonthContext);
		}
	}
	public zhDay(): ZhDayContext[];
	public zhDay(i: number): ZhDayContext;
	public zhDay(i?: number): ZhDayContext | ZhDayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhDayContext);
		} else {
			return this.getRuleContext(i, ZhDayContext);
		}
	}
	public zhPeriodTo(): ZhPeriodToContext {
		return this.getRuleContext(0, ZhPeriodToContext);
	}
	public zhYear(): ZhYearContext | undefined {
		return this.tryGetRuleContext(0, ZhYearContext);
	}
	public ZhFrom(): TerminalNode[];
	public ZhFrom(i: number): TerminalNode;
	public ZhFrom(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.ZhFrom);
		} else {
			return this.getToken(TimeParser.ZhFrom, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TimeParser.Comma);
		} else {
			return this.getToken(TimeParser.Comma, i);
		}
	}
	constructor(ctx: ZhPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodMonthDayToMonthDay) {
			listener.enterZhPeriodMonthDayToMonthDay(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodMonthDayToMonthDay) {
			listener.exitZhPeriodMonthDayToMonthDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodMonthDayToMonthDay) {
			return visitor.visitZhPeriodMonthDayToMonthDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhPeriodDateToDateContext extends ZhPeriodContext {
	public zhDate(): ZhDateContext[];
	public zhDate(i: number): ZhDateContext;
	public zhDate(i?: number): ZhDateContext | ZhDateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhDateContext);
		} else {
			return this.getRuleContext(i, ZhDateContext);
		}
	}
	public zhPeriodTo(): ZhPeriodToContext {
		return this.getRuleContext(0, ZhPeriodToContext);
	}
	public ZhFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhFrom, 0); }
	constructor(ctx: ZhPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodDateToDate) {
			listener.enterZhPeriodDateToDate(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodDateToDate) {
			listener.exitZhPeriodDateToDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodDateToDate) {
			return visitor.visitZhPeriodDateToDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhPeriodDateTimeToDateTimeContext extends ZhPeriodContext {
	public zhDateTime(): ZhDateTimeContext[];
	public zhDateTime(i: number): ZhDateTimeContext;
	public zhDateTime(i?: number): ZhDateTimeContext | ZhDateTimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhDateTimeContext);
		} else {
			return this.getRuleContext(i, ZhDateTimeContext);
		}
	}
	public zhPeriodTo(): ZhPeriodToContext {
		return this.getRuleContext(0, ZhPeriodToContext);
	}
	public ZhFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhFrom, 0); }
	constructor(ctx: ZhPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodDateTimeToDateTime) {
			listener.enterZhPeriodDateTimeToDateTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodDateTimeToDateTime) {
			listener.exitZhPeriodDateTimeToDateTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodDateTimeToDateTime) {
			return visitor.visitZhPeriodDateTimeToDateTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhPeriodDateTimeToTimeContext extends ZhPeriodContext {
	public zhDateTime(): ZhDateTimeContext {
		return this.getRuleContext(0, ZhDateTimeContext);
	}
	public zhPeriodTo(): ZhPeriodToContext {
		return this.getRuleContext(0, ZhPeriodToContext);
	}
	public zhTime(): ZhTimeContext {
		return this.getRuleContext(0, ZhTimeContext);
	}
	public ZhFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhFrom, 0); }
	constructor(ctx: ZhPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodDateTimeToTime) {
			listener.enterZhPeriodDateTimeToTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodDateTimeToTime) {
			listener.exitZhPeriodDateTimeToTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodDateTimeToTime) {
			return visitor.visitZhPeriodDateTimeToTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhPeriodTimeToTimeContext extends ZhPeriodContext {
	public zhTime(): ZhTimeContext[];
	public zhTime(i: number): ZhTimeContext;
	public zhTime(i?: number): ZhTimeContext | ZhTimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhTimeContext);
		} else {
			return this.getRuleContext(i, ZhTimeContext);
		}
	}
	public zhPeriodTo(): ZhPeriodToContext {
		return this.getRuleContext(0, ZhPeriodToContext);
	}
	public ZhFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhFrom, 0); }
	constructor(ctx: ZhPeriodContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodTimeToTime) {
			listener.enterZhPeriodTimeToTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodTimeToTime) {
			listener.exitZhPeriodTimeToTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodTimeToTime) {
			return visitor.visitZhPeriodTimeToTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhPeriodWeekContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhPeriodWeek; }
	public copyFrom(ctx: ZhPeriodWeekContext): void {
		super.copyFrom(ctx);
	}
}
export class ZhPeriodWeek_1Context extends ZhPeriodWeekContext {
	public zhNumberValue(): ZhNumberValueContext | undefined {
		return this.tryGetRuleContext(0, ZhNumberValueContext);
	}
	public ZhWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhWeekWord, 0); }
	public zhStepAliasMark(): ZhStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhStepAliasMarkContext);
	}
	public zhWeekValue(): ZhWeekValueContext[];
	public zhWeekValue(i: number): ZhWeekValueContext;
	public zhWeekValue(i?: number): ZhWeekValueContext | ZhWeekValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhWeekValueContext);
		} else {
			return this.getRuleContext(i, ZhWeekValueContext);
		}
	}
	public zhPeriodTo(): ZhPeriodToContext | undefined {
		return this.tryGetRuleContext(0, ZhPeriodToContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public ZhOf(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhOf, 0); }
	public ZhFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhFrom, 0); }
	constructor(ctx: ZhPeriodWeekContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodWeek_1) {
			listener.enterZhPeriodWeek_1(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodWeek_1) {
			listener.exitZhPeriodWeek_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodWeek_1) {
			return visitor.visitZhPeriodWeek_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhPeriodWeek_2Context extends ZhPeriodWeekContext {
	public zhAroundAliasMark(): ZhAroundAliasMarkContext[];
	public zhAroundAliasMark(i: number): ZhAroundAliasMarkContext;
	public zhAroundAliasMark(i?: number): ZhAroundAliasMarkContext | ZhAroundAliasMarkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhAroundAliasMarkContext);
		} else {
			return this.getRuleContext(i, ZhAroundAliasMarkContext);
		}
	}
	public zhWeekValue(): ZhWeekValueContext[];
	public zhWeekValue(i: number): ZhWeekValueContext;
	public zhWeekValue(i?: number): ZhWeekValueContext | ZhWeekValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhWeekValueContext);
		} else {
			return this.getRuleContext(i, ZhWeekValueContext);
		}
	}
	public zhPeriodTo(): ZhPeriodToContext {
		return this.getRuleContext(0, ZhPeriodToContext);
	}
	public ZhFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhFrom, 0); }
	constructor(ctx: ZhPeriodWeekContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodWeek_2) {
			listener.enterZhPeriodWeek_2(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodWeek_2) {
			listener.exitZhPeriodWeek_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodWeek_2) {
			return visitor.visitZhPeriodWeek_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhDateTimeContext extends ParserRuleContext {
	public zhDate(): ZhDateContext {
		return this.getRuleContext(0, ZhDateContext);
	}
	public zhTime(): ZhTimeContext {
		return this.getRuleContext(0, ZhTimeContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public zhTimePeriodAliasMark(): ZhTimePeriodAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhTimePeriodAliasMarkContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhDateTime; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhDateTime) {
			listener.enterZhDateTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhDateTime) {
			listener.exitZhDateTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhDateTime) {
			return visitor.visitZhDateTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhDateContext extends ParserRuleContext {
	public zhDateAround(): ZhDateAroundContext | undefined {
		return this.tryGetRuleContext(0, ZhDateAroundContext);
	}
	public zhDateNormal(): ZhDateNormalContext | undefined {
		return this.tryGetRuleContext(0, ZhDateNormalContext);
	}
	public stdDate(): StdDateContext | undefined {
		return this.tryGetRuleContext(0, StdDateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhDate; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhDate) {
			listener.enterZhDate(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhDate) {
			listener.exitZhDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhDate) {
			return visitor.visitZhDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhDateNormalContext extends ParserRuleContext {
	public zhYear(): ZhYearContext | undefined {
		return this.tryGetRuleContext(0, ZhYearContext);
	}
	public zhMonthDay(): ZhMonthDayContext | undefined {
		return this.tryGetRuleContext(0, ZhMonthDayContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	public zhWeekDay(): ZhWeekDayContext | undefined {
		return this.tryGetRuleContext(0, ZhWeekDayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhDateNormal; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhDateNormal) {
			listener.enterZhDateNormal(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhDateNormal) {
			listener.exitZhDateNormal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhDateNormal) {
			return visitor.visitZhDateNormal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhDateAroundContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhDateAround; }
	public copyFrom(ctx: ZhDateAroundContext): void {
		super.copyFrom(ctx);
	}
}
export class ZhDateDayAroundAliasContext extends ZhDateAroundContext {
	public zhAroundAliasMark(): ZhAroundAliasMarkContext {
		return this.getRuleContext(0, ZhAroundAliasMarkContext);
	}
	public ZhTian(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhTian, 0); }
	public ZhDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhDayWord, 0); }
	constructor(ctx: ZhDateAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhDateDayAroundAlias) {
			listener.enterZhDateDayAroundAlias(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhDateDayAroundAlias) {
			listener.exitZhDateDayAroundAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhDateDayAroundAlias) {
			return visitor.visitZhDateDayAroundAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhDateDayAroundStepContext extends ZhDateAroundContext {
	public zhNumberValue(): ZhNumberValueContext {
		return this.getRuleContext(0, ZhNumberValueContext);
	}
	public zhStepAliasMark(): ZhStepAliasMarkContext {
		return this.getRuleContext(0, ZhStepAliasMarkContext);
	}
	public ZhTian(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhTian, 0); }
	public ZhDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhDayWord, 0); }
	constructor(ctx: ZhDateAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhDateDayAroundStep) {
			listener.enterZhDateDayAroundStep(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhDateDayAroundStep) {
			listener.exitZhDateDayAroundStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhDateDayAroundStep) {
			return visitor.visitZhDateDayAroundStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhWeekDayContext extends ParserRuleContext {
	public zhNumberValue(): ZhNumberValueContext | undefined {
		return this.tryGetRuleContext(0, ZhNumberValueContext);
	}
	public ZhWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhWeekWord, 0); }
	public zhStepAliasMark(): ZhStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhStepAliasMarkContext);
	}
	public zhWeekValue(): ZhWeekValueContext {
		return this.getRuleContext(0, ZhWeekValueContext);
	}
	public ZhOf(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhOf, 0); }
	public zhAroundAliasMark(): ZhAroundAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhAroundAliasMarkContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhWeekDay; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhWeekDay) {
			listener.enterZhWeekDay(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhWeekDay) {
			listener.exitZhWeekDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhWeekDay) {
			return visitor.visitZhWeekDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhMonthDayContext extends ParserRuleContext {
	public zhMonth(): ZhMonthContext {
		return this.getRuleContext(0, ZhMonthContext);
	}
	public zhDay(): ZhDayContext {
		return this.getRuleContext(0, ZhDayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhMonthDay; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhMonthDay) {
			listener.enterZhMonthDay(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhMonthDay) {
			listener.exitZhMonthDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhMonthDay) {
			return visitor.visitZhMonthDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhYearContext extends ParserRuleContext {
	public zhAroundAliasMark(): ZhAroundAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhAroundAliasMarkContext);
	}
	public ZhYearWord(): TerminalNode { return this.getToken(TimeParser.ZhYearWord, 0); }
	public zhNumberValue(): ZhNumberValueContext | undefined {
		return this.tryGetRuleContext(0, ZhNumberValueContext);
	}
	public zhStepAliasMark(): ZhStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhStepAliasMarkContext);
	}
	public zhYearValue(): ZhYearValueContext | undefined {
		return this.tryGetRuleContext(0, ZhYearValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhYear; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhYear) {
			listener.enterZhYear(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhYear) {
			listener.exitZhYear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhYear) {
			return visitor.visitZhYear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhMonthContext extends ParserRuleContext {
	public zhDateValue(): ZhDateValueContext | undefined {
		return this.tryGetRuleContext(0, ZhDateValueContext);
	}
	public ZhMonthWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhMonthWord, 0); }
	public zhAroundAliasMark(): ZhAroundAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhAroundAliasMarkContext);
	}
	public ZhCountMonth(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhCountMonth, 0); }
	public zhNumberValue(): ZhNumberValueContext | undefined {
		return this.tryGetRuleContext(0, ZhNumberValueContext);
	}
	public zhStepAliasMark(): ZhStepAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhStepAliasMarkContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhMonth; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhMonth) {
			listener.enterZhMonth(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhMonth) {
			listener.exitZhMonth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhMonth) {
			return visitor.visitZhMonth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhDayContext extends ParserRuleContext {
	public zhDateValue(): ZhDateValueContext {
		return this.getRuleContext(0, ZhDateValueContext);
	}
	public ZhDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhDayWord, 0); }
	public ZhDayWord_2(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhDayWord_2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhDay; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhDay) {
			listener.enterZhDay(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhDay) {
			listener.exitZhDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhDay) {
			return visitor.visitZhDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhTimeContext extends ParserRuleContext {
	public zhTimeNormal(): ZhTimeNormalContext | undefined {
		return this.tryGetRuleContext(0, ZhTimeNormalContext);
	}
	public stdTime(): StdTimeContext | undefined {
		return this.tryGetRuleContext(0, StdTimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhTime; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhTime) {
			listener.enterZhTime(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhTime) {
			listener.exitZhTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhTime) {
			return visitor.visitZhTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhTimeNormalContext extends ParserRuleContext {
	public zhNumberValue(): ZhNumberValueContext[];
	public zhNumberValue(i: number): ZhNumberValueContext;
	public zhNumberValue(i?: number): ZhNumberValueContext | ZhNumberValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhNumberValueContext);
		} else {
			return this.getRuleContext(i, ZhNumberValueContext);
		}
	}
	public zhHourMark(): ZhHourMarkContext {
		return this.getRuleContext(0, ZhHourMarkContext);
	}
	public zhTimePeriodAliasMark(): ZhTimePeriodAliasMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhTimePeriodAliasMarkContext);
	}
	public ZhHourWholeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhHourWholeWord, 0); }
	public zhMinuteMark(): ZhMinuteMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhMinuteMarkContext);
	}
	public zhSecondMark(): ZhSecondMarkContext | undefined {
		return this.tryGetRuleContext(0, ZhSecondMarkContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhTimeNormal; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhTimeNormal) {
			listener.enterZhTimeNormal(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhTimeNormal) {
			listener.exitZhTimeNormal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhTimeNormal) {
			return visitor.visitZhTimeNormal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhDirectTimeAroundContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhDirectTimeAround; }
	public copyFrom(ctx: ZhDirectTimeAroundContext): void {
		super.copyFrom(ctx);
	}
}
export class ZhTimeHourStepContext extends ZhDirectTimeAroundContext {
	public zhNumberValue(): ZhNumberValueContext[];
	public zhNumberValue(i: number): ZhNumberValueContext;
	public zhNumberValue(i?: number): ZhNumberValueContext | ZhNumberValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ZhNumberValueContext);
		} else {
			return this.getRuleContext(i, ZhNumberValueContext);
		}
	}
	public ZhCountHour(): TerminalNode { return this.getToken(TimeParser.ZhCountHour, 0); }
	public zhStepAliasMark(): ZhStepAliasMarkContext {
		return this.getRuleContext(0, ZhStepAliasMarkContext);
	}
	public ZhCountMinute(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhCountMinute, 0); }
	constructor(ctx: ZhDirectTimeAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhTimeHourStep) {
			listener.enterZhTimeHourStep(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhTimeHourStep) {
			listener.exitZhTimeHourStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhTimeHourStep) {
			return visitor.visitZhTimeHourStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ZhTimeMinuteStepContext extends ZhDirectTimeAroundContext {
	public zhNumberValue(): ZhNumberValueContext {
		return this.getRuleContext(0, ZhNumberValueContext);
	}
	public ZhCountMinute(): TerminalNode { return this.getToken(TimeParser.ZhCountMinute, 0); }
	public zhStepAliasMark(): ZhStepAliasMarkContext {
		return this.getRuleContext(0, ZhStepAliasMarkContext);
	}
	constructor(ctx: ZhDirectTimeAroundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhTimeMinuteStep) {
			listener.enterZhTimeMinuteStep(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhTimeMinuteStep) {
			listener.exitZhTimeMinuteStep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhTimeMinuteStep) {
			return visitor.visitZhTimeMinuteStep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhNumberValueContext extends ParserRuleContext {
	public ZhValueWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhValueWord, 0); }
	public numberValue(): NumberValueContext | undefined {
		return this.tryGetRuleContext(0, NumberValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhNumberValue; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhNumberValue) {
			listener.enterZhNumberValue(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhNumberValue) {
			listener.exitZhNumberValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhNumberValue) {
			return visitor.visitZhNumberValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhWeekValueContext extends ParserRuleContext {
	public ZhWeekWord(): TerminalNode { return this.getToken(TimeParser.ZhWeekWord, 0); }
	public zhNumberValue(): ZhNumberValueContext | undefined {
		return this.tryGetRuleContext(0, ZhNumberValueContext);
	}
	public ZhTian(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhTian, 0); }
	public ZhDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhDayWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhWeekValue; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhWeekValue) {
			listener.enterZhWeekValue(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhWeekValue) {
			listener.exitZhWeekValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhWeekValue) {
			return visitor.visitZhWeekValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhYearValueContext extends ParserRuleContext {
	public ZhValueWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhValueWord, 0); }
	public yearValue(): YearValueContext | undefined {
		return this.tryGetRuleContext(0, YearValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhYearValue; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhYearValue) {
			listener.enterZhYearValue(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhYearValue) {
			listener.exitZhYearValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhYearValue) {
			return visitor.visitZhYearValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhDateValueContext extends ParserRuleContext {
	public DateNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.DateNumber, 0); }
	public ZhValueWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhValueWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhDateValue; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhDateValue) {
			listener.enterZhDateValue(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhDateValue) {
			listener.exitZhDateValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhDateValue) {
			return visitor.visitZhDateValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhStepAliasMarkContext extends ParserRuleContext {
	public ZhBeforeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhBeforeWord, 0); }
	public ZhAfterWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhAfterWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhStepAliasMark; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhStepAliasMark) {
			listener.enterZhStepAliasMark(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhStepAliasMark) {
			listener.exitZhStepAliasMark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhStepAliasMark) {
			return visitor.visitZhStepAliasMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhAroundAliasMarkContext extends ParserRuleContext {
	public ZhAroundWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhAroundWord, 0); }
	public ZhBeforeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhBeforeWord, 0); }
	public ZhAfterWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhAfterWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhAroundAliasMark; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhAroundAliasMark) {
			listener.enterZhAroundAliasMark(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhAroundAliasMark) {
			listener.exitZhAroundAliasMark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhAroundAliasMark) {
			return visitor.visitZhAroundAliasMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhTimePeriodAliasMarkContext extends ParserRuleContext {
	public ZhAfternoonWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhAfternoonWord, 0); }
	public ZhMorningWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhMorningWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhTimePeriodAliasMark; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhTimePeriodAliasMark) {
			listener.enterZhTimePeriodAliasMark(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhTimePeriodAliasMark) {
			listener.exitZhTimePeriodAliasMark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhTimePeriodAliasMark) {
			return visitor.visitZhTimePeriodAliasMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhHourMarkContext extends ParserRuleContext {
	public ZhHourWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhHourWord, 0); }
	public TimeConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.TimeConnectorWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhHourMark; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhHourMark) {
			listener.enterZhHourMark(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhHourMark) {
			listener.exitZhHourMark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhHourMark) {
			return visitor.visitZhHourMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhMinuteMarkContext extends ParserRuleContext {
	public ZhMinuteWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhMinuteWord, 0); }
	public TimeConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.TimeConnectorWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhMinuteMark; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhMinuteMark) {
			listener.enterZhMinuteMark(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhMinuteMark) {
			listener.exitZhMinuteMark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhMinuteMark) {
			return visitor.visitZhMinuteMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhSecondMarkContext extends ParserRuleContext {
	public ZhSecondWord(): TerminalNode { return this.getToken(TimeParser.ZhSecondWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhSecondMark; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhSecondMark) {
			listener.enterZhSecondMark(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhSecondMark) {
			listener.exitZhSecondMark(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhSecondMark) {
			return visitor.visitZhSecondMark(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhPeriodToContext extends ParserRuleContext {
	public ZhToWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhToWord, 0); }
	public stdPeriodTo(): StdPeriodToContext | undefined {
		return this.tryGetRuleContext(0, StdPeriodToContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhPeriodTo; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhPeriodTo) {
			listener.enterZhPeriodTo(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhPeriodTo) {
			listener.exitZhPeriodTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhPeriodTo) {
			return visitor.visitZhPeriodTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhAtContext extends ParserRuleContext {
	public ZhAtWord(): TerminalNode { return this.getToken(TimeParser.ZhAtWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhAt; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhAt) {
			listener.enterZhAt(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhAt) {
			listener.exitZhAt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhAt) {
			return visitor.visitZhAt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YearValueContext extends ParserRuleContext {
	public YearNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.YearNumber, 0); }
	public DateNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.DateNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_yearValue; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterYearValue) {
			listener.enterYearValue(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitYearValue) {
			listener.exitYearValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitYearValue) {
			return visitor.visitYearValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberValueContext extends ParserRuleContext {
	public YearNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.YearNumber, 0); }
	public DateNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.DateNumber, 0); }
	public NormalNumber(): TerminalNode | undefined { return this.tryGetToken(TimeParser.NormalNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_numberValue; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterNumberValue) {
			listener.enterNumberValue(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitNumberValue) {
			listener.exitNumberValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitNumberValue) {
			return visitor.visitNumberValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UselessWordsContext extends ParserRuleContext {
	public stdUselessWords(): StdUselessWordsContext | undefined {
		return this.tryGetRuleContext(0, StdUselessWordsContext);
	}
	public enUselessWords(): EnUselessWordsContext | undefined {
		return this.tryGetRuleContext(0, EnUselessWordsContext);
	}
	public zhUselessWords(): ZhUselessWordsContext | undefined {
		return this.tryGetRuleContext(0, ZhUselessWordsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_uselessWords; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterUselessWords) {
			listener.enterUselessWords(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitUselessWords) {
			listener.exitUselessWords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitUselessWords) {
			return visitor.visitUselessWords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StdUselessWordsContext extends ParserRuleContext {
	public MiddelConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.MiddelConnectorWord, 0); }
	public SlashConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.SlashConnectorWord, 0); }
	public TimeConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.TimeConnectorWord, 0); }
	public DateTimeConnectorWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.DateTimeConnectorWord, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TimeParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_stdUselessWords; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterStdUselessWords) {
			listener.enterStdUselessWords(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitStdUselessWords) {
			listener.exitStdUselessWords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitStdUselessWords) {
			return visitor.visitStdUselessWords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnUselessWordsContext extends ParserRuleContext {
	public EnMonthWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMonthWord, 0); }
	public EnWeekValue(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekValue, 0); }
	public EnDayValue(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnDayValue, 0); }
	public EnAroundWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAroundWord, 0); }
	public EnAroundDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAroundDayWord, 0); }
	public EnBeforeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnBeforeWord, 0); }
	public EnAfterWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAfterWord, 0); }
	public EnYearWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnYearWord, 0); }
	public EnDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnDayWord, 0); }
	public EnWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnWeekWord, 0); }
	public EnHourWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnHourWord, 0); }
	public EnMinuteWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMinuteWord, 0); }
	public EnSecondWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnSecondWord, 0); }
	public EnMorningWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnMorningWord, 0); }
	public EnAfternoonWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAfternoonWord, 0); }
	public EnHourWholeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnHourWholeWord, 0); }
	public EnAtWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAtWord, 0); }
	public EnAndWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnAndWord, 0); }
	public EnToWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnToWord, 0); }
	public EnFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.EnFrom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_enUselessWords; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterEnUselessWords) {
			listener.enterEnUselessWords(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitEnUselessWords) {
			listener.exitEnUselessWords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitEnUselessWords) {
			return visitor.visitEnUselessWords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ZhUselessWordsContext extends ParserRuleContext {
	public ZhValueWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhValueWord, 0); }
	public ZhAroundWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhAroundWord, 0); }
	public ZhBeforeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhBeforeWord, 0); }
	public ZhAfterWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhAfterWord, 0); }
	public ZhYearWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhYearWord, 0); }
	public ZhMonthWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhMonthWord, 0); }
	public ZhCountMonth(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhCountMonth, 0); }
	public ZhDayWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhDayWord, 0); }
	public ZhDayWord_2(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhDayWord_2, 0); }
	public ZhTian(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhTian, 0); }
	public ZhWeekWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhWeekWord, 0); }
	public ZhHourWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhHourWord, 0); }
	public ZhHourWholeWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhHourWholeWord, 0); }
	public ZhCountHour(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhCountHour, 0); }
	public ZhMinuteWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhMinuteWord, 0); }
	public ZhCountMinute(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhCountMinute, 0); }
	public ZhSecondWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhSecondWord, 0); }
	public ZhCountSecond(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhCountSecond, 0); }
	public ZhMorningWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhMorningWord, 0); }
	public ZhAfternoonWord(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhAfternoonWord, 0); }
	public ZhOf(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhOf, 0); }
	public ZhFrom(): TerminalNode | undefined { return this.tryGetToken(TimeParser.ZhFrom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TimeParser.RULE_zhUselessWords; }
	// @Override
	public enterRule(listener: TimeParserListener): void {
		if (listener.enterZhUselessWords) {
			listener.enterZhUselessWords(this);
		}
	}
	// @Override
	public exitRule(listener: TimeParserListener): void {
		if (listener.exitZhUselessWords) {
			listener.exitZhUselessWords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TimeParserVisitor<Result>): Result {
		if (visitor.visitZhUselessWords) {
			return visitor.visitZhUselessWords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


