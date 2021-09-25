import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AnalyzerDateValue } from './../model';
import { EnTimeHourStepContext, EnTimeHourStep_2Context, EnTimeMinuteStepContext, EnTimeMinuteStep_2Context, EnDateYearAroundAliasContext, EnDateYearAroundAlias_2Context, EnDateMonthAroundAliasContext, EnDateMonthAroundAlias_2Context, EnDateMonthAroundAlias_3Context, EnDateMonthAroundAlias_4Context, EnDateDayAroundAliasContext, EnDateDayAroundAlias_2Context, EnDateWeekAroundAliasContext, EnDateWeekAroundAlias_2Context, EnDateYearAroundStepContext, EnDateYearAroundStep_2Context, EnDateMonthAroundStepContext, EnDateDayAroundStepContext, EnDateDayAroundStep_2Context, EnDateWeekAroundStepContext, EnDateWeekAroundStep_2Context, EnMonthDayContext, EnDayContext, StepValueContext, EnStepAliasMarkContext } from "../grammar/TimeParser";
import { AnalyzerDateTimeValue, AnalyzerTimeValue, AnalyzerValue, SourceMapPosition } from "../model";
import { parseEnAroundDayWord, parseEnAroundWord, parseEnDay, parseEnMonthValue, parseEnStepAliasMark } from "./en.utils";
import { computedAroundTime, getCurrentYear, parseStepValue } from "./std.utils";
import { ZhTimeAnalyzerVisitor } from "./zh";
import { ParserRuleContext } from 'antlr4ts';

export class EnTimeAnalyzerVisitor extends ZhTimeAnalyzerVisitor {

  //// enDirectTimeAround

  /// enTimeHourStep
  visitEnTimeHourStep (ctx: EnTimeHourStepContext): AnalyzerValue {
    return this.parseEnTimeHourStep(ctx.stepValue(), ctx. enStepAliasMark(), ctx);
  };
  visitEnTimeHourStep_2 (ctx: EnTimeHourStep_2Context): AnalyzerValue {
    return this.parseEnTimeHourStep(ctx.stepValue(), ctx. enStepAliasMark(), ctx);
  };
  private parseEnTimeHourStep(
    stepValue: StepValueContext[],
    enStepAliasMark: EnStepAliasMarkContext,
    ctx: ParserRuleContext,
  ): AnalyzerDateTimeValue {
    const values = stepValue.map((item) => parseStepValue(item));
    return AnalyzerDateTimeValue.fromDateTime(
      computedAroundTime(
        parseEnStepAliasMark(enStepAliasMark),
        { hour: values[0], minute: values[1] || 0 },
      ), {
      mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
    });
  }

  /// enTimeMinuteStep
  visitEnTimeMinuteStep(ctx: EnTimeMinuteStepContext): AnalyzerValue {
    return this.parseEnTimeMinuteStep(ctx.enStepAliasMark(), ctx.stepValue(), ctx);
  };
  visitEnTimeMinuteStep_2(ctx: EnTimeMinuteStep_2Context): AnalyzerValue {
    return this.parseEnTimeMinuteStep(ctx.enStepAliasMark(), ctx.stepValue(), ctx);
  };
  private parseEnTimeMinuteStep(
    enStepAliasMark: EnStepAliasMarkContext,
    stepValue: StepValueContext,
    ctx: ParserRuleContext,
  ): AnalyzerValue {
    return AnalyzerDateTimeValue.fromDateTime(
      computedAroundTime(
        parseEnStepAliasMark(enStepAliasMark),
        { minute: parseStepValue(stepValue) },
      ), {
      mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
    });
  };

  //// enDateAround

  /// EnDateYearAroundAlias
  visitEnDateYearAroundAlias (ctx: EnDateYearAroundAliasContext): AnalyzerValue {
    return this.parseEnDateYearAroundAlias(ctx.enMonthDay(), ctx.EnAroundWord(), ctx);
  };
  visitEnDateYearAroundAlias_2 (ctx: EnDateYearAroundAlias_2Context): AnalyzerValue {
    return this.parseEnDateYearAroundAlias(ctx.enMonthDay(), ctx.EnAroundWord(), ctx);
  };
  private parseEnDateYearAroundAlias(
    enMonthDay: EnMonthDayContext,
    enAroundWord: TerminalNode,
    ctx: ParserRuleContext,
  ): AnalyzerDateValue {
    const date = this.visit(enMonthDay) as AnalyzerDateValue;
    if (!date) {
      return null;
    }
    const year = parseEnAroundWord(enAroundWord);
    if (year) {
      date.year = date.year + year;
    }
    date.mapPosition = SourceMapPosition.fromParserRuleContext(ctx);
    return date;
  }

  /// EnDateMonthAroundAlias
  visitEnDateMonthAroundAlias(ctx: EnDateMonthAroundAliasContext): AnalyzerValue {
    return this.parseEnDateMonthAroundAlias_type1(ctx.enDay(), ctx.EnAroundWord(), ctx);
  };
  visitEnDateMonthAroundAlias_2(ctx: EnDateMonthAroundAlias_2Context): AnalyzerValue {
    return this.parseEnDateMonthAroundAlias_type1(ctx.enDay(), ctx.EnAroundWord(), ctx);
  };
  private parseEnDateMonthAroundAlias_type1(
    enDay: EnDayContext,
    enAroundWord: TerminalNode,
    ctx: ParserRuleContext,
  ): AnalyzerValue {
    const aroundType = parseEnAroundWord(enAroundWord);
    const now = new Date();
    const year = getCurrentYear();
    const month = now.getMonth() + aroundType;
    const day = parseEnDay(enDay);
    return new AnalyzerDateValue(
      year,
      month,
      day, {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };

	visitEnDateMonthAroundAlias_3(ctx: EnDateMonthAroundAlias_3Context): AnalyzerValue {
    return this.visitEnDateMonthAroundAlias_type2(ctx.enDay(), ctx.EnAroundWord(), ctx.EnMonthValue(), ctx);
  };
	visitEnDateMonthAroundAlias_4(ctx: EnDateMonthAroundAlias_4Context): AnalyzerValue {
    return this.visitEnDateMonthAroundAlias_type2(ctx.enDay(), ctx.EnAroundWord(), ctx.EnMonthValue(), ctx);
  };
  private visitEnDateMonthAroundAlias_type2(
    enDay: EnDayContext,
    enAroundWord: TerminalNode,
    enMonthValue: TerminalNode,
    ctx: ParserRuleContext,
  ): AnalyzerDateValue {
    const aroundType = parseEnAroundWord(enAroundWord);
    const year = getCurrentYear() + aroundType;
    const month = parseEnMonthValue(enMonthValue);
    const day = parseEnDay(enDay);
    return new AnalyzerDateValue(
      year,
      month,
      day, {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };

  /// EnDateDayAroundAlias
  visitEnDateDayAroundAlias(ctx: EnDateDayAroundAliasContext): AnalyzerValue {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() + parseEnAroundWord(ctx.EnAroundWord()));
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(), {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };
  visitEnDateDayAroundAlias_2(ctx: EnDateDayAroundAlias_2Context): AnalyzerValue {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() + parseEnAroundDayWord(ctx.EnAroundDayWord()));
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(), {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };

  visitEnDateWeekAroundAlias?: (ctx: EnDateWeekAroundAliasContext) => AnalyzerValue;
  visitEnDateWeekAroundAlias_2?: (ctx: EnDateWeekAroundAlias_2Context) => AnalyzerValue;
  visitEnDateYearAroundStep?: (ctx: EnDateYearAroundStepContext) => AnalyzerValue;
  visitEnDateYearAroundStep_2?: (ctx: EnDateYearAroundStep_2Context) => AnalyzerValue;
  visitEnDateMonthAroundStep?: (ctx: EnDateMonthAroundStepContext) => AnalyzerValue;
  visitEnDateDayAroundStep?: (ctx: EnDateDayAroundStepContext) => AnalyzerValue;
  visitEnDateDayAroundStep_2?: (ctx: EnDateDayAroundStep_2Context) => AnalyzerValue;
  visitEnDateWeekAroundStep?: (ctx: EnDateWeekAroundStepContext) => AnalyzerValue;
  visitEnDateWeekAroundStep_2?: (ctx: EnDateWeekAroundStep_2Context) => AnalyzerValue;
  
	visitEnMonthDay (ctx: EnMonthDayContext): AnalyzerValue {
    const month = parseEnMonthValue(ctx.EnMonthValue());
    const day = parseEnDay(ctx.enDay());
    if (month < 0 && day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      getCurrentYear(),
      month,
      day, {
        mapPosition: SourceMapPosition.fromParserRuleContext(ctx),
      }
    );
  };
}