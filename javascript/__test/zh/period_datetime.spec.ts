import { parseZhWeekValueToDate } from '@/lib/visitor/zh.utils';
import { TimeAnalyzer, AnalyzerPeriodValueType, AnalyzerValueType } from "@/lib/index";
import { getCurrentYear } from "@/lib/visitor/common.utils";

describe('En Period Time', () => {

  test('Period Time', () => {
    const text = '3月5日，下午1点到下午3点';
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
    const text = '3月5日下午1点到3月6日上午3点';
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
        day: 6,
        hour: 3,
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
    const text = '明天下午1点45到后天上午3点';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const start = new Date();
    const end = new Date();
    start.setDate(start.getDate() + 1);
    end.setDate(end.getDate() + 2);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: start.getFullYear(),
        month: start.getMonth(),
        day: start.getDate(),
        hour: 13,
        minute: 45,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: end.getFullYear(),
        month: end.getMonth(),
        day: end.getDate(),
        hour: 3,
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
    const text = '下周五下午3点到5点';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const date = parseZhWeekValueToDate(5, 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: date.year,
        month: date.month,
        day: date.day,
        hour: 15,
        minute: 0,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: date.year,
        month: date.month,
        day: date.day,
        hour: 17,
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
    const text = '下周五下午3点15到下下周日5点15分';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const startDate = parseZhWeekValueToDate(5, 1);
    const endDate = parseZhWeekValueToDate(7, 2);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.DateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: startDate.year,
        month: startDate.month,
        day: startDate.day,
        hour: 15,
        minute: 15,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: endDate.year,
        month: endDate.month,
        day: endDate.day,
        hour: 5,
        minute: 15,
        second: 0,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });
});