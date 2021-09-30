import { ParserRuleContext } from "antlr4ts";
import { AnalyzerDateTimeValue, AnalyzerPeriodDateTimeValue, AnalyzerPeriodValueType, AnalyzerTimeValue } from "../model";

// parse period type: dateTime to time
export function parsePeriodDateTimeToTime(
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
  
  return new AnalyzerPeriodDateTimeValue(
    AnalyzerPeriodValueType.DateTime,
    startDateTime,
    endDateTime,
    ctx,
  );
}

// parse week day (start at monday, such in chinese)
export function parseWeekDay_startAtMonday(originWeekDay: number): number {
  if (originWeekDay === 0) {
    return 7;
  }
  return originWeekDay;
}

// parse week day (start at sunday, such in usa)
export function parseWeekDay_startAtSunday(originWeekDay: number): number {
  return originWeekDay;
}