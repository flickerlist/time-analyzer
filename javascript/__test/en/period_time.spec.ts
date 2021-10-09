import { TimeAnalyzer, AnalyzerValueType } from 'time-analyzer';

describe('En Period Time', () => {

  test('Period Time', () => {
    const text = '1pm to 3pm';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodTime,
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
      valueType: AnalyzerValueType.PeriodTime,
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

  test('Oral Period Time', () => {
    const text = 'at 1:30 am - 3:40 p.m.';
    const fullText = `Remind me to meet John ${text}, ok?`;
    const values = new TimeAnalyzer(fullText).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodTime,
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
        startIndex: fullText.indexOf(text),
        endIndex: fullText.indexOf(text) + text.length,
        text,
      },
    });
  });

  test('None Period Time', () => {
    const values = new TimeAnalyzer('1:30 am - 3:60 p.m.').values;
    expect(values).toHaveLength(0);
  });

  test('None Period Time', () => {
    const values = new TimeAnalyzer('24:30 am - 3:30 p.m.').values;
    expect(values).toHaveLength(0);
  });
});