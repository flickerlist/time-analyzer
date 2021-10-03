import { TimeAnalyzer, AnalyzerValueType, AnalyzerPeriodValueType } from '@/lib/index';

describe('En Period Time', () => {

  test('Period Time', () => {
    const text = '1pm to 3pm';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Time,
      start: {
        valueType: AnalyzerValueType.Time,
        hour: 13,
        minute: 0,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.Time,
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
    const text = '1:30 am - 3:40 p.m.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Time,
      start: {
        valueType: AnalyzerValueType.Time,
        hour: 1,
        minute: 30,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.Time,
        hour: 15,
        minute: 40,
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