import { AnalyzerPeriodValueType, AnalyzerValueType, TimeAnalyzer } from 'time-analyzer';

describe('Zh Period Time', () => {

  test('Period Time', () => {
    const text = '下午1点至3点';
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
    const text = '下午1:30 - 上午3点';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Time,
      start: {
        valueType: AnalyzerValueType.Time,
        hour: 13,
        minute: 30,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.Time,
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

  test('Oral Period Time', () => {
    const text = '在下午1:30 - 上午3点';
    const fullText = `记得${text}准时开会`;
    const values = new TimeAnalyzer(fullText).values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Period,
      periodType: AnalyzerPeriodValueType.Time,
      start: {
        valueType: AnalyzerValueType.Time,
        hour: 13,
        minute: 30,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.Time,
        hour: 3,
        minute: 0,
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
    const values = new TimeAnalyzer('在下午1:30 - 上午25点').values;
    expect(values).toHaveLength(0);
  });
  
});