import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AnalyzerDateValue, AnalyzerPeriodDateTimeValue } from './../model';
import { EnTimeHourStepContext, EnTimeHourStep_2Context, EnTimeMinuteStepContext, EnTimeMinuteStep_2Context, EnDateYearAroundAliasContext, EnDateYearAroundAlias_2Context, EnDateMonthAroundAliasContext, EnDateMonthAroundAlias_2Context, EnDateMonthAroundAlias_3Context, EnDateMonthAroundAlias_4Context, EnDateDayAroundAliasContext, EnDateDayAroundAlias_2Context, EnDateWeekAroundAliasContext, EnDateWeekAroundAlias_2Context, EnDateYearAroundStepContext, EnDateYearAroundStep_2Context, EnDateMonthAroundStepContext, EnDateDayAroundStepContext, EnDateDayAroundStep_2Context, EnDateWeekAroundStepContext, EnDateWeekAroundStep_2Context, EnMonthDayContext, EnDayContext, StepValueContext, EnStepAliasMarkContext, EnPeriodTimeToTimeContext, EnPeriodDateTimeToTimeContext, EnPeriodDateTimeToDateTimeContext, EnPeriodDateToDateContext, EnDateNormalContext, EnDateTimeContext, EnTimeNormalContext, EnTimeOClockContext } from "../grammar/TimeParser";
import { AnalyzerDateTimeValue, AnalyzerTimeValue, AnalyzerValue } from "../model";
import { parseEnAroundDayWord, parseEnAroundWord, parseEnDay, parseEnMonthValue, parseEnStepAliasMark, parseEnWeekValue } from "./en.utils";
import { computedAroundTime, getCurrentYear, parseStepValue, parseYearValue } from "./std.utils";
import { ZhTimeAnalyzerVisitor } from "./zh";
import { ParserRuleContext } from 'antlr4ts';
import { parsePeriodDateTimeToTime } from './basic.utils';
import { parseToInt } from '../utils/convert';

export class EnTimeAnalyzerVisitor extends ZhTimeAnalyzerVisitor {

  //// enPeriodDateTime
	visitEnPeriodDateToDate(ctx: EnPeriodDateToDateContext): AnalyzerValue {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.enDate()[0]),
      this.visit(ctx.enDate()[1]), {
        context: ctx,
      }
    );
  };
	visitEnPeriodDateTimeToDateTime(ctx: EnPeriodDateTimeToDateTimeContext): AnalyzerValue {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.enDateTime()[0]),
      this.visit(ctx.enDateTime()[1]), {
        context: ctx,
      }
    );
  };
	visitEnPeriodDateTimeToTime (ctx: EnPeriodDateTimeToTimeContext): AnalyzerValue {
    return parsePeriodDateTimeToTime(
      this.visit(ctx.enDateTime()) as AnalyzerDateTimeValue,
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
      ctx,
    );
  };
	visitEnPeriodTimeToTime (ctx: EnPeriodTimeToTimeContext): AnalyzerValue {
    return new AnalyzerPeriodDateTimeValue(
      this.visit(ctx.enTime()[0]),
      this.visit(ctx.enTime()[1]), {
        context: ctx,
      }
    );
  };


  //// enDateTime
	visitEnDateTime(ctx: EnDateTimeContext): AnalyzerValue {
    return AnalyzerDateTimeValue.create(
      this.visit(ctx.enDate()) as AnalyzerDateValue, 
      this.visit(ctx.enTime()) as AnalyzerTimeValue,
    );
  };

  //// enDateNormal
	visitEnDateNormal (ctx: EnDateNormalContext): AnalyzerValue {
    const value = this.visit(ctx.enMonthDay()) as AnalyzerDateValue | null;
    if (!value) {
      return null;
    }
    const year = ctx.YearNumber()
      ? parseToInt(ctx.YearNumber().text)
      : getCurrentYear();
    if (year) {
      value.year = year;
    }
    value.resetContext(ctx);
    return value;
  };

  //// enTime
	visitEnTimeNormal(ctx: EnTimeNormalContext): AnalyzerValue {
    const value = this.visit(ctx.stdTime()) as AnalyzerTimeValue;
    if (ctx.EnAfternoonWord()) {
      if(value.hour < 12) {
        value.hour += 12;
      }
    }
    return value;
  };
  
	visitEnTimeOClock(ctx: EnTimeOClockContext): AnalyzerValue {
    const now = new Date();
    now.setMinutes(0, 0, 0)
    let hour = parseToInt(ctx.DateNumber().text);
    if (ctx.EnAfternoonWord()) {
      if (hour < 12) {
        hour += 12;
      }
    }
    now.setHours(hour);
    return AnalyzerTimeValue.fromDateTime(now, ctx);
  };

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
      ),
      ctx,
    );
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
      ),
      ctx,
    );
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
    date.resetContext(ctx);
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
    if (day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      year,
      month,
      day, {
        context: ctx,
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
    if (day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      year,
      month,
      day, {
        context: ctx,
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
        context: ctx,
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
        context: ctx,
      }
    );
  };

  /// EnDateWeekAroundAlias
  visitEnDateWeekAroundAlias (ctx: EnDateWeekAroundAliasContext): AnalyzerValue {
    return this.parseEnDateWeekAroundAlias(ctx.EnAroundWord(), ctx.EnWeekValue(), ctx);
  };
  visitEnDateWeekAroundAlias_2 (ctx: EnDateWeekAroundAlias_2Context): AnalyzerValue {
    return this.parseEnDateWeekAroundAlias(ctx.EnAroundWord(), ctx.EnWeekValue(), ctx);
  };
  private parseEnDateWeekAroundAlias(
    enAroundWork: TerminalNode,
    enWeekValue: TerminalNode,
    ctx: ParserRuleContext,
  ): AnalyzerValue {
    const roundType = parseEnAroundWord(enAroundWork);
    const weekValue = parseEnWeekValue(enWeekValue);
    if (weekValue === -1) {
      return null;
    }
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const split = weekValue - now.getDay();
    now.setDate(7 * roundType + split);
    return new AnalyzerDateValue(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(), {
        context: ctx,
      }
    );
  }

  /// EnDateYearAroundStep
  visitEnDateYearAroundStep (ctx: EnDateYearAroundStepContext): AnalyzerValue {
    return this.parseEnDateYearAroundStep(ctx.enMonthDay(), ctx.stepValue(), ctx.enStepAliasMark(), ctx);
  };
  visitEnDateYearAroundStep_2(ctx: EnDateYearAroundStep_2Context): AnalyzerValue {
    return this.parseEnDateYearAroundStep(ctx.enMonthDay(), ctx.stepValue(), ctx.enStepAliasMark(), ctx);
  };
  private parseEnDateYearAroundStep(
    enMonthDay: EnMonthDayContext,
    stepValue: StepValueContext,
    enStepAliasMarkContext: EnStepAliasMarkContext,
    ctx: ParserRuleContext,
  ): AnalyzerDateValue {
    const date = this.visit(enMonthDay) as AnalyzerDateValue;
    date.year = parseStepValue(stepValue) * parseEnStepAliasMark(enStepAliasMarkContext);
    return date;
  }

  /// EnDateMonthAroundStep
  visitEnDateMonthAroundStep(ctx: EnDateMonthAroundStepContext): AnalyzerValue {
    return this.parseEnDateMonthAroundStep(ctx.enDay(), ctx.stepValue(), ctx.enStepAliasMark(), ctx);
  };
  visitEnDateMonthAroundStep_2(ctx: EnDateMonthAroundStepContext): AnalyzerValue {
    return this.parseEnDateMonthAroundStep(ctx.enDay(), ctx.stepValue(), ctx.enStepAliasMark(), ctx);
  };
  private parseEnDateMonthAroundStep(
    enDay: EnDayContext,
    stepValue: StepValueContext,
    enStepAliasMark: EnStepAliasMarkContext,
    ctx: ParserRuleContext,
  ): AnalyzerDateValue {
    const now = new Date();
    const splitMonth = parseEnStepAliasMark(enStepAliasMark) * parseStepValue(stepValue);
    now.setMonth(now.getMonth() + splitMonth )
    const day = parseEnDay(enDay);
    if (day <= 0) {
      return;
    }
    now.setDate(day);
    return AnalyzerDateValue.fromDateTime(now, ctx);
  }

  /// EnDateDayAroundStep
  visitEnDateDayAroundStep(ctx: EnDateDayAroundStepContext): AnalyzerValue {
    return this.parseEnDateDayAroundStep(ctx.stepValue(), ctx.enStepAliasMark(), ctx);
  };
  visitEnDateDayAroundStep_2(ctx: EnDateDayAroundStep_2Context): AnalyzerValue {
    return this.parseEnDateDayAroundStep(ctx.stepValue(), ctx.enStepAliasMark(), ctx);
  };
  private parseEnDateDayAroundStep(
    stepValue: StepValueContext,
    enStepAliasMark: EnStepAliasMarkContext,
    ctx: ParserRuleContext,
  ): AnalyzerDateValue {
    const now = new Date();
    const days = parseStepValue(stepValue);
    const aroundType = parseEnStepAliasMark(enStepAliasMark);
    now.setDate(now.getDate() + days * aroundType);
    return AnalyzerDateValue.fromDateTime(now, ctx);
  }

  /// EnDateWeekAroundStep
  visitEnDateWeekAroundStep(ctx: EnDateWeekAroundStepContext): AnalyzerValue {
    return this.parseEnDateWeekAroundStep(ctx.EnWeekValue(), ctx.stepValue(), ctx);
  };
  visitEnDateWeekAroundStep_2(ctx: EnDateWeekAroundStep_2Context): AnalyzerValue {
    return this.parseEnDateWeekAroundStep(ctx.EnWeekValue(), ctx.stepValue(), ctx);
  };
  private parseEnDateWeekAroundStep(
    enWeekValue: TerminalNode,
    stepValue: StepValueContext,
    ctx: ParserRuleContext,
  ): AnalyzerDateValue {
    const now = new Date();
    const weekValue = parseEnWeekValue(enWeekValue);
    now.setDate(now.getDate() + now.getDay() - weekValue);
    now.setDate(now.getDate() + parseStepValue(stepValue) * 7);
    return AnalyzerDateValue.fromDateTime(now, ctx);
  }
  
	visitEnMonthDay (ctx: EnMonthDayContext): AnalyzerDateValue {
    const month = parseEnMonthValue(ctx.EnMonthValue());
    const day = parseEnDay(ctx.enDay());
    if (month < 0 && day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      getCurrentYear(),
      month,
      day, {
        context: ctx,
      }
    );
  };
}