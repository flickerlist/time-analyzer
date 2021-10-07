import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { EnDayContext, EnStepAliasMarkContext } from "../grammar/TimeParser";
import { parseToInt } from "../utils/convert";
import { AnalyzerDateValue, AroundValue, StepOffsetType, WeekValues } from '../model';
import { ParserRuleContext } from 'antlr4ts';
import { convertWeekDay } from "./common.utils";

// parse around mark (before, after, ago ...)
export function parseEnStepAliasMark(mark: EnStepAliasMarkContext): StepOffsetType {
  if (mark.EnBeforeWord()) {
    return -1;
  }
  return 1;
}

// parse enDay context
export function parseEnDay(ctx: EnDayContext): 0 | number {
  if (ctx.DateNumber()) {
    return parseToInt(ctx.DateNumber().text, 0);
  }
  var dayValue = ctx.EnDayValue().text.replace(/th|st|nd|rd/i, '');
  return parseToInt(dayValue, 0);
}

// parse EnMonthValue token
export function parseEnMonthValue(ctx: TerminalNode): -1 | number {
  const text = ctx.text.toUpperCase();
  switch(text) {
    case 'JANUARY':
    case 'JAN.':
      return 0;
    case 'FEBRUARY':
    case 'FEB.':
      return 1;
    case 'MARCH':
    case 'MAR.':
      return 2;
    case 'APRIL':
    case 'APR.':
      return 3;
    case 'MAY':
    case 'MAY.':
      return 4;
    case 'JUNE':
    case 'JUN.':
      return 5;
    case 'JULY':
    case 'JUL.':
      return 6;
    case 'AUGUST':
    case 'AUG.':
      return 7;
    case 'SEPTEMBER':
    case 'SEP.':
      return 8;
    case 'OCTOBER':
    case 'OCT.':
      return 9;
    case 'NOVEMBER':
    case 'NOV.':
      return 10;
    case 'DECEMBER':
    case 'DEC.':
      return 11;
    default:
      return -1;
  }
}

// parse EnAroundWord
export function parseEnAroundWord(ctx: TerminalNode | null): AroundValue {
  if (!ctx) {
    return 0;
  }
  switch (ctx.text.toUpperCase()) {
    case 'OF THE FOLLOWING':
    case 'NEXT':
      return 1;
    case 'LAST':
      return -1;
    case 'THIS':
    default:
      return 0;
  }
}

// parse EnAroundDay
export function parseEnAroundDayWord(ctx: TerminalNode): AroundValue {
  switch(ctx.text.toUpperCase()) {
    case 'THE DAY BEFORE YESTERDAY':
      return -2;
    case 'YESTERDAY':
      return -1;
    case 'TOMORROW':
      return 1;
    case 'THE DAY AFTER TOMORROW':
      return 2;
    case 'TODAY':
    default:
      return 0;
  }
}

// parse EnWeekValue token
export function parseEnWeekValue(ctx: TerminalNode): WeekValues {
  const text = ctx.text.toUpperCase();
  let value: WeekValues = 0;
  switch(text) {
    case 'MONDAY':
    case 'MON.':
      value = 1;
      break;
    case 'TUESDAY':
    case 'TUES.':
      value =  2;
      break;
    case 'WEDNESDAY':
    case 'WED.':
      value =  3;
      break;
    case 'THURSDAY':
    case 'THUR.':
      value =  4;
      break;
    case 'FRIDAY':
    case 'FRI.':
      value =  5;
      break;
    case 'SATURDAY':
    case 'SAT.':
      value =  6;
      break;
    case 'SUNDAY':
    case 'SUN.':
      value =  0;
      break;
    default:
      throw new Error('Unexpected error');
  }
  return convertWeekDay(value);
}

/**
 * parse week value to date
 * @param targetWeekDay Mon. -> 1, Sunday -> 0
 * @param offsetWeeks This week -> 0, last week -> -1, two week later -> 2
 * @returns AnalyzerDateValue
 */
export function parseEnWeekValueToDate(
  targetWeekValue: WeekValues,
  offsetWeeks: number,
  ctx?: ParserRuleContext,
): AnalyzerDateValue {
  const now = new Date();
  now.setDate(
    now.getDate()
    + targetWeekValue - convertWeekDay(now.getDay() as WeekValues)
    + offsetWeeks * 7
  );
  return AnalyzerDateValue.fromDateTime(now, ctx);
}