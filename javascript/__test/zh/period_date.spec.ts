import { getCurrentYear } from '@/lib/visitor/common.utils';
import { AnalyzerPeriodValueType, AnalyzerValueType, TimeAnalyzer } from '@/lib/index';

describe('Zh Period Date', () => {

  test('Period Date', () => {
    const text = '7月1日至明年8月1日';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear(),
        month: 6,
        day: 1,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 1,
        month: 7,
        day: 1,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '明年7月1日至8月1日';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 1,
        month: 6,
        day: 1,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 1,
        month: 7,
        day: 1,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '明天到大后天';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate() + 1);
    endDate.setDate(endDate.getDate() + 3);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: startDate.getFullYear(),
        month: startDate.getMonth(),
        day: startDate.getDate(),
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: endDate.getFullYear(),
        month: endDate.getMonth(),
        day: endDate.getDate(),
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '明天到后年7月1号';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: startDate.getFullYear(),
        month: startDate.getMonth(),
        day: startDate.getDate(),
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 2,
        month: 6,
        day: 1,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '2002年3月3-5日';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: 2002,
        month: 2,
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: 2002,
        month: 2,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '3月3日至5日';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear(),
        month: 2,
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear(),
        month: 2,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '明年7月3号到七月五号';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 1,
        month: 6,
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 1,
        month: 6,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '2022年7月3号到七月五号';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: 2022,
        month: 6,
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: 2022,
        month: 6,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Period Date', () => {
    const text = '3年后，7月3号到七月五号';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 3,
        month: 6,
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 3,
        month: 6,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Oral Period Date', () => {
    const text = '十六年后，七月一日到七月廿一日';
    const fullText = `谨记，${text}与姑姑会和`;
    const values = new TimeAnalyzer(fullText).values;
    expect(values).toHaveLength(1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 16,
        month: 6,
        day: 1,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 16,
        month: 6,
        day: 21,
      },
      match: {
        startIndex: fullText.indexOf(text),
        endIndex: fullText.indexOf(text) + text.length,
        text,
      },
    });
  });

  test('None Period Date', () => {
    const text = '七月三十五日到七月廿一日';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(0);
  });

  test('None Period Date', () => {
    const values = new TimeAnalyzer('七月五日到七月廿二十一日').values;
    expect(values).toHaveLength(0);
  });
  
});