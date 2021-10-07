import { getCurrentYear } from 'time-analyzer/visitor/common.utils';
import { TimeAnalyzer, AnalyzerValueType, AnalyzerPeriodValueType } from 'time-analyzer';

describe('En Period Date', () => {

  test('Period Date', () => {
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

  test('Period Date', () => {
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

  test('Period Date', () => {
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

  test('Period Date', () => {
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

  test('Period Date', () => {
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

  test('Period Date', () => {
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

  test('Period Date', () => {
    const text = 'March 5 to April 5, 2022';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: 2022,
        month: 2,
        day: 5,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: 2022,
        month: 3,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text,
      },
    });
  });

  test('Period Date', () => {
    const text = 'March 5 to April 5, next year';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 1,
        month: 2,
        day: 5,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 1,
        month: 3,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text,
      },
    });
  });

  test('Period Date', () => {
    const text = 'March 5 to April 5, 3 years later';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 3,
        month: 2,
        day: 5,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 3,
        month: 3,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: text.length,
        text,
      },
    });
  });

  test('Oral Period Date', () => {
    const text = 'at March 5 to April 5, 3 years later';
    const fullText = `Remind me to meet ${text}, at CN, ok?`;
    const values = new TimeAnalyzer(fullText).values;
    expect(values).toHaveLength(1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 3,
        month: 2,
        day: 5,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: getCurrentYear() + 3,
        month: 3,
        day: 5,
      },
      match: {
        startIndex: fullText.indexOf(text),
        endIndex: fullText.indexOf(text) + text.length,
        text,
      },
    });
  });

  test('None Period Date', () => {
    const values = new TimeAnalyzer('March 5 to April 35, 3 years later').values;
    expect(values).toHaveLength(0);
  });

});