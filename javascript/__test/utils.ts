import { TimeAnalyzer } from "@/lib/index";
import { AnalyzerValueType, WeekStartDay, WeekValues } from "@/lib/model";
import { convertWeekDay } from "@/lib/visitor/common.utils";

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
  }) {

  const now = new Date();
  
  if (typeof year !== 'undefined') {
    now.setFullYear(year);
  }
  if (typeof month !== 'undefined') {
    now.setMonth(month);
  }
  if (typeof day !== 'undefined') {
    now.setDate(day);
  }
  if (typeof weekDay !== 'undefined') {
    now.setDate(
      now.getDate()
      + convertWeekDay(weekDay, weekStart)
        - convertWeekDay(now.getDay() as WeekValues, weekStart),
    );
  }

  if (typeof addYears !== 'undefined') {
    now.setFullYear(now.getFullYear() + addYears);
  }
  if (typeof addMonths !== 'undefined') {
    now.setMonth(now.getMonth() + addMonths);
  }
  if (typeof addDays !== 'undefined') {
    now.setDate(now.getDate() + addDays);
  }
  if (typeof addWeeks !== 'undefined') {
    now.setDate(now.getDate() + addWeeks * 7);
  }

  const values = new TimeAnalyzer(fullText || text).values;

  expect(values).toHaveLength(1);

  let startIndex = 0;
  if (fullText) {
    startIndex = fullText.indexOf(text);
  }
  expect(values[0]).toMatchObject({
    valueType: AnalyzerValueType.Date,
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
    match: {
      startIndex,
      endIndex: startIndex + text.length,
      text,
    },
  });
}