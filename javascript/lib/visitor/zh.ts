import { ZhDateAroundContext, ZhDateContext, ZhDateDayAroundAliasContext, ZhDateDayAroundStepContext, ZhDateNormalContext, ZhDateTimeContext, ZhDateValueContext, ZhDayContext, ZhHourMarkContext, ZhMinuteMarkContext, ZhMonthContext, ZhMonthDayContext, ZhPeriodContext, ZhPeriodWeekContext, ZhPeriodWeek_1Context, ZhPeriodWeek_2Context, ZhSecondMarkContext, ZhStepAliasMarkContext, ZhTimeContext, ZhTimeHourStepContext, ZhTimeMinuteStepContext, ZhTimeNormalContext, ZhTimePeriodAliasMarkContext, ZhWeekDayContext, ZhYearContext, ZhNumberValueContext } from "../grammar/TimeParser";
import { AnalyzerDateValue, AnalyzerValue } from "../model";
import { StdTimeAnalyzerVisitor } from "./std";
import { getCurrentYear } from "./common.utils";
import { parseZhAroundAliasMark, parseZhDateValue, parseZhDay, parseZhNumberValueContext, parseZhStepAliasMark, parseZhYearValue } from "./zh.utils";

export class ZhTimeAnalyzerVisitor extends StdTimeAnalyzerVisitor {
  //// zhPeriod
  visitZhPeriodWeek_1(ctx: ZhPeriodWeek_1Context): AnalyzerValue {
    parseZhNumberValueContext(ctx.zhNumberValue());

    return null;
  };

	visitZhPeriodWeek_2(ctx: ZhPeriodWeek_2Context): AnalyzerValue {
    return null;
  };

  visitZhPeriod(ctx: ZhPeriodContext): AnalyzerValue {
    return null;
  };

	visitZhPeriodWeek(ctx: ZhPeriodWeekContext): AnalyzerValue {
    return null;
  };

  //// zhDate
  visitZhDateNormal(ctx: ZhDateNormalContext): AnalyzerValue {
    return null;
  };

  visitZhDateAround(ctx: ZhDateAroundContext): AnalyzerValue {
    return null;
  };

  visitZhDateDayAroundAlias(ctx: ZhDateDayAroundAliasContext): AnalyzerValue {
    return null;
  };

	visitZhDateDayAroundStep(ctx: ZhDateDayAroundStepContext): AnalyzerValue {
    return null;
  };

	visitZhWeekDay(ctx: ZhWeekDayContext): AnalyzerValue {
    return null;
  };

	visitZhMonthDay(ctx: ZhMonthDayContext): AnalyzerValue {
    const month = this.visit(ctx.zhMonth()) as AnalyzerDateValue;
    const day = parseZhDay(ctx.zhDay());
    if (day <= 0) {
      return null;
    }
    return new AnalyzerDateValue(
      month.year,
      month.month,
      day,
      ctx,
    );
  };

	visitZhYear(ctx: ZhYearContext): AnalyzerValue {
    if (ctx.zhAroundAliasMark()) {
      return new AnalyzerDateValue(
        getCurrentYear() + parseZhYearValue(ctx.zhYearValue()),
        -1,
        0,
      );
    }
    if (ctx.zhNumberValue()) {
      const offsetType = parseZhStepAliasMark(ctx.zhStepAliasMark());
      
      return new AnalyzerDateValue(
        getCurrentYear() + parseZhNumberValueContext(ctx.zhNumberValue()) * offsetType,
        -1,
        0,
      );
    }
    if (ctx.zhYearValue()) {
      return new AnalyzerDateValue(
        parseZhYearValue(ctx.zhYearValue()),
        -1,
        0,
      );
    }
    throw new Error('Unexpected error');
  };

	visitZhMonth(ctx: ZhMonthContext): AnalyzerValue {
    if (ctx.zhDateValue()) {
      const month = parseZhDateValue(ctx.zhDateValue());
      if (month <= 0) {
        return null;
      }
      return new AnalyzerDateValue(
        getCurrentYear(),
        month - 1,
        0,
      );
    }
    if (ctx.zhAroundAliasMark()) {
      const date = new Date();
      date.setMonth(date.getMonth() + parseZhAroundAliasMark(ctx.zhAroundAliasMark()));
      return AnalyzerDateValue.fromDateTime(date);
    }
    if (ctx.zhNumberValue()) {
      const date = new Date();
      date.setMonth(date.getMonth() + parseZhNumberValueContext(ctx.zhNumberValue()) * parseZhStepAliasMark(ctx.zhStepAliasMark()));
      return AnalyzerDateValue.fromDateTime(date);
    }
    throw new Error('Unexpected error');
  };

  //// zhDirectTimeAround
  visitZhTimeHourStep(ctx: ZhTimeHourStepContext): AnalyzerValue {
    return null;
  };

	visitZhTimeMinuteStep(ctx: ZhTimeMinuteStepContext): AnalyzerValue {
    return null;
  };

	visitZhDateTime(ctx: ZhDateTimeContext): AnalyzerValue {
    return null;
  };

  // zhTime
	visitZhTime(ctx: ZhTimeContext): AnalyzerValue {
    return null;
  };

	visitZhTimeNormal(ctx: ZhTimeNormalContext): AnalyzerValue {
    return null;
  };

  //// basic
  visitZhDateValue(ctx: ZhDateValueContext): AnalyzerValue {
    return null;
  };
  
	visitZhStepValue(ctx: ZhNumberValueContext): AnalyzerValue {
    return null;
  };
  
  //// mark
	visitZhTimePeriodAliasMark(ctx: ZhTimePeriodAliasMarkContext): AnalyzerValue {
    return null;
  };
	visitZhStepAliasMark(ctx: ZhStepAliasMarkContext): AnalyzerValue {
    return null;
  };
  
	visitZhHourMark(ctx: ZhHourMarkContext): AnalyzerValue {
    return null;
  };

	visitZhMinuteMark(ctx: ZhMinuteMarkContext): AnalyzerValue {
    return null;
  };

	visitZhSecondMark(ctx: ZhSecondMarkContext): AnalyzerValue {
    return null;
  };

}