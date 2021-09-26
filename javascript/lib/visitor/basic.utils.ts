import { ParserRuleContext } from "antlr4ts";
import { AnalyzerDateTimeValue, AnalyzerPeriodDateTimeValue, AnalyzerTimeValue } from "../model";

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
      endTime.second, {
        context: null,
      }
    );
    
    return new AnalyzerPeriodDateTimeValue(
      startDateTime,
      endDateTime, {
        context: ctx,
      }
    );
}