import { getCurrentYear } from '@/lib/visitor/std.utils';
import { TimeAnalyzer, AnalyzerValueType, AnalyzerPeriodValueType } from '@/lib/index';

describe('En Period Date', () => {

  test('Period', () => {
    const values = new TimeAnalyzer('March 3-5, 2002').values;
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
        endIndex: 15,
        text: 'March 3-5, 2002',
      },
    });
  });

  test('Period', () => {
    const values = new TimeAnalyzer('March 3rd-5th, 2002').values;
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
        endIndex: 19,
        text: 'March 3rd-5th, 2002',
      },
    });
  });

  test('Period', () => {
    const values = new TimeAnalyzer('March 3rd to 5th, 2002').values;
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
        endIndex: 22,
        text: 'March 3rd to 5th, 2002',
      },
    });
  });

  test('Period', () => {
    const values = new TimeAnalyzer('March 3 to 5').values;
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
        endIndex: 12,
        text: 'March 3 to 5',
      },
    });
  });

  test('Period', () => {
    const values = new TimeAnalyzer('3rd to 5th of next month').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: 24,
        text: '3rd to 5th of next month',
      },
    });
  });

  test('Period', () => {
    const values = new TimeAnalyzer('next month, on the 3-5').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: 22,
        text: 'next month, on the 3-5',
      },
    });
  });
});