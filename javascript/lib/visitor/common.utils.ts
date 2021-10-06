import { ParserRuleContext } from "antlr4ts";
import { AnalyzerDateTimeValue, AnalyzerPeriodValue, AnalyzerPeriodValueType, AnalyzerTimeValue, WeekValues, StepOffsetType, AnalyzerUnexpectedError, WeekStartDay } from "../model";
import { NumberValueContext, YearValueContext } from "../grammar/TimeParser";
import { parseToInt } from "../utils/convert";

// parse period type: dateTime to time
export function parsePeriodToTime(
  startDateTime: AnalyzerDateTimeValue,
  endTime: AnalyzerTimeValue,
  ctx: ParserRuleContext,
  ) {
  const endDateTime = new AnalyzerDateTimeValue(
    startDateTime.year,
    startDateTime.month,
    startDateTime.day,
    endTime.hour,
    endTime.minute,
    endTime.second,
  );
  
  return new AnalyzerPeriodValue(
    AnalyzerPeriodValueType.DateTime,
    startDateTime,
    endDateTime,
    ctx,
  );
}

// parse week day 
export function convertWeekDay(
  originWeekDay: WeekValues,
  weekStart: WeekStartDay = WeekStartDay.Sunday,
): WeekValues {
  if (weekStart === WeekStartDay.Monday) {
    if (originWeekDay === 0) {
      return 7;
    }
  }
  return originWeekDay;
}

// parse yearValue
export function parseYearValue(yearValue: YearValueContext): number {
  if (yearValue.YearNumber()) {
    return parseToInt(yearValue.YearNumber().text);
  }
  if (yearValue.DateNumber()) {
    const yearSuffix = parseToInt(yearValue.DateNumber().text);
    return fillYearNumber(yearSuffix);
  }
  throw new AnalyzerUnexpectedError();
}

/**
 * parse numberValue context
 * @param numberValue 
 * @returns 
 */
export function parseNumberValueContext(numberValue: NumberValueContext) {
  return parseToInt(numberValue.text, 0);
}

/**
 * Fill year number
 * @param yearNumber 2-digit number
 * @returns normal year number: 4-digit
 */
export function fillYearNumber(yearNumber: number): number {
  return (+new Date().getFullYear().toString().substring(0, 2)) * 100 + yearNumber;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * computed date abount around values, such as:
 *    3 days later, after 2 hours
 */
export function computedAroundTime(offsetType: StepOffsetType, {
  year,
  month,
  week,
  day,
  hour,
  minute,
  second,
}:{
  year?: number;
  month?: number;
  week?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
}): Date {
  const now = new Date();
  now.setMilliseconds(0);
  if (year) {
    now.setFullYear(now.getFullYear() + offsetType * year);
  }
  if (month) {
    now.setMonth(now.getMonth() + offsetType * month);
  }
  if (week) {
    now.setDate(now.getDate() + offsetType * week * 7);
  }
  if (day) {
    now.setDate(now.getDate() + offsetType * day);
  }
  if (hour) {
    now.setHours(now.getHours() + offsetType * hour);
  }
  if (minute) {
    now.setMinutes(now.getMinutes() + offsetType * minute);
  }
  if (second) {
    now.setSeconds(now.getSeconds() + offsetType * second);
  }
  return now;
}
