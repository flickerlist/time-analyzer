import { YearValueContext } from "../grammar/TimeParser";
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