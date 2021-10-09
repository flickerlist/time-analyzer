import { parseZhWeekValueToDate } from 'time-analyzer/visitor/zh.utils';
import { TimeAnalyzer, AnalyzerValueType } from "time-analyzer";
import { getCurrentYear } from "time-analyzer/visitor/common.utils";

describe('Zh Period DateTime', () => {

  test('Period DateTime', () => {
    const text = '3月5日，下午1点到下午3点';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
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

  test('Period DateTime', () => {
    const text = '3月5日下午1点到3月6日上午3点';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
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

  test('Period DateTime', () => {
    const text = '明天下午1点45到后天上午3点';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const start = new Date();
    const end = new Date();
    start.setDate(start.getDate() + 1);
    end.setDate(end.getDate() + 2);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
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

  test('Period DateTime', () => {
    const text = '下周五下午3点到5点';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const date = parseZhWeekValueToDate(5, 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
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

  test('Period DateTime', () => {
    const text = '下周五下午3点15到下下周日5点15分';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const startDate = parseZhWeekValueToDate(5, 1);
    const endDate = parseZhWeekValueToDate(7, 2);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
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

  test('Oral Period DateTime', () => {
    const text = '下周五下午3点15到下下周日5点15分';
    const fullText = `天狗吃月，${text}记得做准备`;
    const values = new TimeAnalyzer(fullText).values;
    expect(values).toHaveLength(1);

    const startDate = parseZhWeekValueToDate(5, 1);
    const endDate = parseZhWeekValueToDate(7, 2);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
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
        startIndex: fullText.indexOf(text),
        endIndex: fullText.indexOf(text) + text.length,
        text,
      },
    });
  });

  test('None Period DateTime', () => {
    const values = new TimeAnalyzer('下周五下午3点15到下下周日25点15分').values;
    expect(values).toHaveLength(0);
  });

  test('None Period DateTime', () => {
    const values = new TimeAnalyzer('下周八下午3点15到下下周日5点15分').values;
    expect(values).toHaveLength(0);
  });
});