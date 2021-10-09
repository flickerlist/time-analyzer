import { TimeAnalyzer } from "time-analyzer";
import { AnalyzerDateValue, AnalyzerValue, AnalyzerValueType, WeekStartDay, WeekValues } from "time-analyzer/model";
import { convertWeekDay } from "time-analyzer/visitor/common.utils";

// expect date
export function expectDate({
    text,
    fullText,
    year,
    month,
    day,
    weekDay,
    addYears,
    addMonths,
    addDays,
    addWeeks,
    weekStart = WeekStartDay.Sunday,
  } : {
    text: string;
    fullText?: string;
    year?: number;
    month?: number;
    day?: number;
    weekDay?: WeekValues;
    addYears?: number;
    addMonths?: number;
    addDays?: number;
    addWeeks?: number;
    weekStart?: WeekStartDay;
  }): void {

  const time = new Date();

  resetTimeFields(time, {
    year,
    month,
    day,
    weekDay,
    addYears,
    addMonths,
    addDays,
    addWeeks,
    weekStart,
  });

  const values = new TimeAnalyzer(fullText || text).values;

  expect(values).toHaveLength(1);

  let startIndex = 0;
  if (fullText) {
    startIndex = fullText.indexOf(text);
  }
  expect(values[0]).toMatchObject({
    valueType: AnalyzerValueType.Date,
    year: time.getFullYear(),
    month: time.getMonth(),
    day: time.getDate(),
    match: {
      startIndex,
      endIndex: startIndex + text.length,
      text,
    },
  });
}

// expect time
export function expectTime({
  text,
  fullText,
  hour,
  minute,
  second,
  addHours,
  addMinutes,
  addSeconds,
}: {
  text: string;
  fullText?: string;
  hour?: number;
  minute?: number;
  second?: number;
  addHours?: number;
  addMinutes?: number;
  addSeconds?: number;
}) {
  const time = new Date();
  time.setMilliseconds(0);

  resetTimeFields(time, {
    hour,
    minute,
    second,
    addHours,
    addMinutes,
    addSeconds,
  });
  
  const values = new TimeAnalyzer(fullText || text).values;

  expect(values).toHaveLength(1);

  let startIndex = 0;
  if (fullText) {
    startIndex = fullText.indexOf(text);
  }
  expect(values[0]).toMatchObject({
    valueType: AnalyzerValueType.Time,
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
    match: {
      startIndex,
      endIndex: startIndex + text.length,
      text,
    },
  });
}

// expect dateTime
export function expectDateTime({
  text,
  fullText,
  year,
  month,
  day,
  weekDay,
  hour,
  minute,
  second,
  addYears,
  addMonths,
  addDays,
  addWeeks,
  addHours,
  addMinutes,
  addSeconds,
  weekStart = WeekStartDay.Sunday,
} : {
  text: string;
  fullText?: string;
  year?: number;
  month?: number;
  day?: number;
  weekDay?: WeekValues;
  hour?: number;
  minute?: number;
  second?: number;

  addYears?: number;
  addMonths?: number;
  addDays?: number;
  addWeeks?: number;
  weekStart?: WeekStartDay;
  addHours?: number;
  addMinutes?: number;
  addSeconds?: number;
}): void {
  const time = new Date();
  time.setMilliseconds(0);
  
  resetTimeFields(time, {
    year,
    month,
    day,
    weekDay,
    hour,
    minute,
    second,
    addYears,
    addMonths,
    addDays,
    addWeeks,
    addHours,
    addMinutes,
    addSeconds,
    weekStart,
  });

  const values = new TimeAnalyzer(fullText || text).values;

  expect(values).toHaveLength(1);

  let startIndex = 0;
  if (fullText) {
    startIndex = fullText.indexOf(text);
  }
  expect(values[0]).toMatchObject({
    valueType: AnalyzerValueType.DateTime,
    year: time.getFullYear(),
    month: time.getMonth(),
    day: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
    match: {
      startIndex,
      endIndex: startIndex + text.length,
      text,
    },
  });
}

export interface DatePeriod {
  start: AnalyzerDateValue;
  end: AnalyzerDateValue;
}

export function expectWeekPeriod(
  value: AnalyzerValue,
  datePeriod: DatePeriod,
  matchText: string,
  matchStart = 0,
) {
  expect(value).toMatchObject({
    valueType: AnalyzerValueType.PeriodDate,
    start: {
      valueType: datePeriod.start.valueType,
      year: datePeriod.start.year,
      month: datePeriod.start.month,
      day: datePeriod.start.day,
    },
    end: {
      valueType: datePeriod.start.valueType,
      year: datePeriod.end.year,
      month: datePeriod.end.month,
      day: datePeriod.end.day,
    },
    match: {
      startIndex: matchStart,
      endIndex: matchStart + matchText.length,
      text: matchText,
    },
  });
}

function resetTimeFields(time: Date, {
  year,
  month,
  day,
  hour,
  minute,
  second,
  weekDay,
  addYears,
  addMonths,
  addDays,
  addWeeks,
  addHours,
  addMinutes,
  addSeconds,
  weekStart = WeekStartDay.Sunday,
}: {
  year?: number;
  month?: number;
  day?: number;
  weekDay?: WeekValues;
  hour?: number;
  minute?: number;
  second?: number;
  addYears?: number;
  addMonths?: number;
  addDays?: number;
  addWeeks?: number;
  addHours?: number;
  addMinutes?: number;
  addSeconds?: number;
  weekStart?: WeekStartDay;
}) {
  if (typeof year !== 'undefined') {
    time.setFullYear(year);
  }
  if (typeof month !== 'undefined') {
    time.setMonth(month);
  }
  if (typeof day !== 'undefined') {
    time.setDate(day);
  }
  if (typeof weekDay !== 'undefined') {
    time.setDate(
      time.getDate()
      + convertWeekDay(weekDay, weekStart)
        - convertWeekDay(time.getDay() as WeekValues, weekStart),
    );
  }
  if (typeof hour !== 'undefined') {
    time.setHours(hour);
  }
  if (typeof minute !== 'undefined') {
    time.setMinutes(minute);
  }
  if (typeof second !== 'undefined') {
    time.setSeconds(second);
  }

  if (typeof addYears !== 'undefined') {
    time.setFullYear(time.getFullYear() + addYears);
  }
  if (typeof addMonths !== 'undefined') {
    time.setMonth(time.getMonth() + addMonths);
  }
  if (typeof addDays !== 'undefined') {
    time.setDate(time.getDate() + addDays);
  }
  if (typeof addWeeks !== 'undefined') {
    time.setDate(time.getDate() + addWeeks * 7);
  }
  if (typeof addHours !== 'undefined') {
    time.setHours(time.getHours() + addHours);
  }
  if (typeof addMinutes !== 'undefined') {
    time.setMinutes(time.getMinutes() + addMinutes);
  }
  if (typeof addSeconds !== 'undefined') {
    time.setSeconds(time.getSeconds() + addSeconds);
  }
}