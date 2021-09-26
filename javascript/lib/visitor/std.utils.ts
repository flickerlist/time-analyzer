import { AroundType } from "../model";
import { StepValueContext, YearValueContext } from "../grammar/TimeParser";
import { parseToInt } from "../utils/convert";

export function parseYearValue(yearValue: YearValueContext): number {
  if (yearValue.YearNumber()) {
    return parseToInt(yearValue.YearNumber().text);
  }
  if (yearValue.DateNumber()) {
    const yearSuffix = parseToInt(yearValue.DateNumber().text);
    return fillYearNumber(yearSuffix);
  }
  return 0;
}

/**
 * parse stepValue context
 * @param stepValue 
 * @returns 
 */
export function parseStepValue(stepValue: StepValueContext) {
  return parseToInt(stepValue.text, 0);
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
 * @param aroundType 
 * @param param1 
 * @returns 
 */
export function computedAroundTime(aroundType: AroundType, {
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
  now.setSeconds(0, 0);
  if (year) {
    now.setFullYear(now.getFullYear() + aroundType * year);
  }
  if (month) {
    now.setMonth(now.getMonth() + aroundType * month);
  }
  if (week) {
    now.setDate(now.getDate() + aroundType * week * 7);
  }
  if (day) {
    now.setDate(now.getDate() + aroundType * day);
  }
  if (hour) {
    now.setHours(now.getHours() + aroundType * hour);
  }
  if (minute) {
    now.setMinutes(now.getMinutes() + aroundType * minute);
  }
  if (second) {
    now.setSeconds(now.getSeconds() + aroundType * second);
  }
  return now;
}
