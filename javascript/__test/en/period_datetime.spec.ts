import { parseEnWeekValueToDate } from '@/lib/visitor/en.utils';
import { getCurrentYear } from '@/lib/visitor/common.utils';
import { TimeAnalyzer, AnalyzerValueType, AnalyzerPeriodValueType } from '@/lib/index';

describe('En Period Time', () => {

  test('Period Time', () => {
    const text = 'March 5th, 1 p.m. to 3 p.m.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: getCurrentYear(),
        month: 2,
        day: 5,
        hour: 13,
        minute: 0,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: getCurrentYear(),
        month: 2,
        day: 5,
        hour: 15,
        minute: 0,
        second: 0,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Time', () => {
    const text = 'March 5th at 1 p.m. to Apr. 6th at 3 p.m.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: getCurrentYear(),
        month: 2,
        day: 5,
        hour: 13,
        minute: 0,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: getCurrentYear(),
        month: 3,
        day: 6,
        hour: 15,
        minute: 0,
        second: 0,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Time', () => {
    const text = '1:30pm tomorrow, to 3pm the day after tomorrow';
    const values = new TimeAnalyzer(text).values;

    const start = new Date();
    const end = new Date();
    start.setDate(start.getDate() + 1);
    end.setDate(end.getDate() + 2);

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: start.getFullYear(),
        month: start.getMonth(),
        day: start.getDate(),
        hour: 13,
        minute: 30,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: end.getFullYear(),
        month: end.getMonth(),
        day: end.getDate(),
        hour: 15,
        minute: 0,
        second: 0,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Time', () => {
    const text = '1 a.m. to 3 p.m., next Friday';
    const values = new TimeAnalyzer(text).values;

    const date = parseEnWeekValueToDate(5, 1);

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: date.year,
        month: date.month,
        day: date.day,
        hour: 1,
        minute: 0,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: date.year,
        month: date.month,
        day: date.day,
        hour: 15,
        minute: 0,
        second: 0,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Oral', () => {
    const text = 'at 1 a.m. to 3 p.m., next Friday';
    const values = new TimeAnalyzer(`Remind me to meet John ${text}, ok?`).values;
    const date = parseEnWeekValueToDate(5, 1);

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: date.year,
        month: date.month,
        day: date.day,
        hour: 1,
        minute: 0,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: date.year,
        month: date.month,
        day: date.day,
        hour: 15,
        minute: 0,
        second: 0,
      },
      match: {
        startIndex: 23,
        endIndex: 23 + text.length,
        text: text,
      },
    });
  });
});