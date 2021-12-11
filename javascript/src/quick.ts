import { AnalyzerDateTimeValue, AnalyzerDateValue, AnalyzerPeriodDateTimeValue, AnalyzerPeriodDateValue, AnalyzerPeriodTimeValue, AnalyzerTimeValue, AnalyzerValue, AnalyzerValueType } from "./model";
import { TimeAnalyzer } from "./parser";

/**
 * quick parse functions to use.
 */

export interface AnalyzerQuickValue {
  start: Date;
  end: Date;
  valueType: AnalyzerValueType.DateTime
    | AnalyzerValueType.Date
    | AnalyzerValueType.Time
    | null;
  match: null | {
    text: string;
    startIndex: number;
    endIndex: number;
  }
}

export function parse(text: string): AnalyzerQuickValue[] {
  return new TimeAnalyzer(text)
    .values.
    map((item) => valueToAnalyzerQuickValue(item));
}

export function parseFirst(text: string): AnalyzerQuickValue {
  return parse(text)[0] || null;
}

// convert AnalyzerValue to AnalyzerQuickValue
export function valueToAnalyzerQuickValue (value: AnalyzerValue): AnalyzerQuickValue {
  let start: Date = null;
  let end: Date = null;
  let valueType = null;
  if (!value) {
    return {
      start: null,
      end: null,
      valueType,
      match: null,
    };
  }

  const now = new Date();

  switch (value.valueType) {
    case AnalyzerValueType.DateTime:
      start = new Date(
        (value as AnalyzerDateTimeValue).year,
        (value as AnalyzerDateTimeValue).month,
        (value as AnalyzerDateTimeValue).day,
        (value as AnalyzerDateTimeValue).hour,
        (value as AnalyzerDateTimeValue).minute,
      );
      end = null;
      valueType = AnalyzerValueType.DateTime;
      break;
    case AnalyzerValueType.Date:
      start = new Date(
        (value as AnalyzerDateValue).year,
        (value as AnalyzerDateValue).month,
        (value as AnalyzerDateValue).day,
      );
      end = null;
      valueType = AnalyzerValueType.Date;
      break;
    case AnalyzerValueType.Time:
      start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        (value as AnalyzerTimeValue).hour,
        (value as AnalyzerTimeValue).minute,
      );
      end = null;
      valueType = AnalyzerValueType.Time;
      break;
    case AnalyzerValueType.PeriodDateTime:
      const _startDateTime = (value as AnalyzerPeriodDateTimeValue).start as AnalyzerDateTimeValue;
      const _endDateTime = (value as AnalyzerPeriodDateTimeValue).end as AnalyzerDateTimeValue;
      start = new Date(
        _startDateTime.year,
        _startDateTime.month,
        _startDateTime.day,
        _startDateTime.hour,
        _startDateTime.minute,
      );
      end = new Date(
        _endDateTime.year,
        _endDateTime.month,
        _endDateTime.day,
        _endDateTime.hour,
        _endDateTime.minute,
      );
      valueType = AnalyzerValueType.DateTime;
      break;
    case AnalyzerValueType.PeriodDate:
      const _startDate = (value as AnalyzerPeriodDateValue).start as AnalyzerDateValue;
      const _endDate = (value as AnalyzerPeriodDateValue).end as AnalyzerDateValue;
      start = new Date(
        _startDate.year,
        _startDate.month,
        _startDate.day,
      );
      end = new Date(
        _endDate.year,
        _endDate.month,
        _endDate.day,
      );
      valueType = AnalyzerValueType.Date;
      break;
    case AnalyzerValueType.PeriodTime:
      const _startTime = (value as AnalyzerPeriodTimeValue).start as AnalyzerTimeValue;
      const _endTime = (value as AnalyzerPeriodTimeValue).end as AnalyzerTimeValue;
      start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        _startTime.hour,
        _startTime.minute,
      );
      end = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        _endTime.hour,
        _endTime.minute,
      );
      valueType = AnalyzerValueType.Time;
      break;
    default:
      break;
  }

  return {
    start,
    end,
    valueType,
    match: value.match,
  };
}