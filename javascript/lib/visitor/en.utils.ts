import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { EnDayContext, EnStepAliasMarkContext } from "../grammar/TimeParser";
import { AroundType } from "../model";
import { parseToInt } from "../utils/convert";

// parse around mark (before, after, ago ...)
export function parseEnStepAliasMark(mark: EnStepAliasMarkContext): AroundType {
  if (mark.EnBeforeWord()) {
    return -1;
  }
  return 1;
}

// parse enDay context
export function parseEnDay(ctx: EnDayContext) {
  if (ctx.DateNumber()) {
    return parseToInt(ctx.DateNumber().text, 0);
  }
  var dayValue = ctx.EnDayValue().text.replace(/th|st|nd|rd/i, '');
  return parseToInt(dayValue, 0);
}

// parse EnMonthValue token
export function parseEnMonthValue(ctx: TerminalNode): number {
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
    case 'JUL Y':
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
export function parseEnAroundWord(ctx: TerminalNode): AroundType {
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


export function parseEnAroundDayWord(ctx: TerminalNode): number {
  switch(ctx.text.toUpperCase()) {
    case 'THE DAY BEFORE YESTERDAY':
      return -2;
    case 'YESTERDAY':
      return -1;
    case 'T O M O R R O W':
      return 1;
    case 'THE DAY AFTER TOMORROW':
      return 2;
    case 'TODAY':
    default:
      return 0;
  }
}