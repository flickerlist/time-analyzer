import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ZhAroundAliasMarkContext, ZhDateValueContext, ZhDayContext, ZhNumberValueContext, ZhStepAliasMarkContext, ZhYearValueContext, ZhWeekValueContext, ZhTimeContext } from "../grammar/TimeParser";
import { AnalyzerDateValue, AroundValue, StepOffsetType, WeekStartDay, WeekValues } from "../model";
import * as Nzh from 'nzh';
import { parseToInt } from '../utils/convert';
import { ParserRuleContext } from 'antlr4ts';
import { parseNumberValueContext, parseYearValue, getCurrentYear, convertWeekDay } from './common.utils';

// parse yearValue
export function parseZhYearValue(zhYearValue: ZhYearValueContext): number {
  if (zhYearValue.yearValue()) {
    return parseYearValue(zhYearValue.yearValue());
  }
  return parseZhValueWord(zhYearValue.ZhValueWord()) || getCurrentYear();
}

// time has perioldAliasMark
export function zhTimeHasPerioldAliasMark(zhTime: ZhTimeContext): boolean {
  if (!zhTime.zhTimeNormal() || !zhTime.zhTimeNormal().zhTimePeriodAliasMark()) {
    return false;
  }
  return true;
}

// time is afternoon (add 12 to hour)
export function zhTimeIsAfternoon(zhTime: ZhTimeContext): boolean {
  if (!zhTimeHasPerioldAliasMark(zhTime)) {
    return false;
  }
  return !!zhTime.zhTimeNormal().zhTimePeriodAliasMark().ZhAfternoonWord();
}

// parse zhStepAliasMark
export function parseZhStepAliasMark(zhStepAliasMark: ZhStepAliasMarkContext): StepOffsetType {
  if (zhStepAliasMark.ZhBeforeWord()) {
    return -1;
  }
  return 1;
}

// parse zhStepValue
export function parseZhNumberValue(zhNumberValue: ZhNumberValueContext) {
  if (zhNumberValue.numberValue()) {
    return parseNumberValueContext(zhNumberValue.numberValue());
  }
  return parseZhValueWord(zhNumberValue.ZhValueWord());
}

// parse zhDateValue
export function parseZhDateValue(zhDateValue: ZhDateValueContext) {
  if (zhDateValue.ZhValueWord()) {
    return parseZhValueWord(zhDateValue.ZhValueWord());
  }
  return parseToInt(zhDateValue.DateNumber().text);
}

// parse zhDay context
export function parseZhDay(ctx: ZhDayContext): number | null {
  let result = -1;
  if (ctx.zhDateValue().DateNumber()) {
    result = parseToInt(ctx.zhDateValue().DateNumber().text, 0);
  } else {
    result = parseZhValueWord(ctx.zhDateValue().ZhValueWord());
  }
  if (result < 1 || result > 31) {
    return null;
  }
  return result;
}

// parse zhAroundAliasMark
export function parseZhAroundAliasMark(ctx: ZhAroundAliasMarkContext): AroundValue {
  switch(ctx.text) {
    case '大前':
      return -3;
    case '上上':
    case '前':
      return -2;
    case '上':
    case '昨':
    case '去':
      return -1;
    case '这个':
    case '这':
    case '這個':
    case '這':
    case '本':
    case '今':
      return 0;
    case '下':
    case '明':
      return 1;
    case '下下':
    case '后':
    case '後':
      return 2;
    case '大后':
    case '大後':
      return 3;
    default:
      return 0;
  }
}

// parse ZhWeekValue token
export function parseZhWeekValue(zhWeekValue: ZhWeekValueContext): WeekValues | -1 {
  let result = -1;
  if (zhWeekValue.zhNumberValue()) {
    result = parseZhNumberValue(zhWeekValue.zhNumberValue());
  } else if (zhWeekValue.ZhTian() || zhWeekValue.ZhDayWord()){
    result = 7;
  }
  if (result >= 1 && result <=7) {
    return result as WeekValues;
  }
  return -1;
}

/**
 * parse week value to date
 * @param targetWeekDay Mon. -> 1, Sunday -> 0
 * @param offsetWeeks This week -> 0, last week -> -1, two week later -> 2
 * @returns AnalyzerDateValue
 */
export function parseZhWeekValueToDate(
  targetWeekValue: WeekValues,
  offsetWeeks: number,
  ctx?: ParserRuleContext,
): AnalyzerDateValue {
  const now = new Date();
  now.setDate(
    now.getDate()
    + targetWeekValue - convertWeekDay(now.getDay() as WeekValues, WeekStartDay.Monday)
    + offsetWeeks * 7
  );
  return AnalyzerDateValue.fromDateTime(now, ctx);
}

// parse ZhValueWord
export function parseZhValueWord(ctx: TerminalNode): number | null {
  let text = ctx.text;
  if (text.indexOf('廿') > -1) {
    text = text.replace('廿', '');
    let value = parseZhValue(text);
    if (1 <= value && value <= 9) {
      return 20 + value;
    }
    return null;
  }
  return parseZhValue(text);
}

const nzh = new Nzh({
  ch: "零一二三四五六七八九",
  ch_u: "个十百千万亿兆京",
});

const nzh_2 = new Nzh({
  ch: "〇壹贰叁肆伍陆柒捌玖",
  ch_u: "个十百千万亿兆京",
});
function parseZhValue(text: string): number | 0 {
  let value: number = nzh.decode(text);
  if (value > 0) {
    return value;
  }
  return nzh_2.decode(text);
}
