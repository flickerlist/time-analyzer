import { TimeAnalyzer, AnalyzerValueType, AroundType } from '@/lib/index';

describe('En Time', () => {

  test('Time', () => {
    const values = new TimeAnalyzer('1pm').values;

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Time,
      hour: 13,
      minute: 0,
      second: 0,
      match: {
        startIndex: 0,
        endIndex: 3,
        text: '1pm',
      },
    });
  });

  test('Time', () => {
    const values = new TimeAnalyzer('at 5:30 p.m').values;

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Time,
      hour: 17,
      minute: 30,
      second: 0,
      match: {
        startIndex: 0,
        endIndex: 11,
        text: 'at 5:30 p.m',
      },
    });
  });

  test('Time', () => {
    const values = new TimeAnalyzer('at 8 at night').values;

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Time,
      hour: 20,
      minute: 0,
      second: 0,
      match: {
        startIndex: 0,
        endIndex: 13,
        text: 'at 8 at night',
      },
    });
  });

  test('Time', () => {
    const values = new TimeAnalyzer('at 3:30:30 in the afternoon').values;

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Time,
      hour: 15,
      minute: 30,
      second: 30,
      match: {
        startIndex: 0,
        endIndex: 27,
        text: 'at 3:30:30 in the afternoon',
      },
    });
  });

  test('Time', () => {
    const values = new TimeAnalyzer('12:30 at noon').values;

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Time,
      hour: 12,
      minute: 30,
      second: 0,
      match: {
        startIndex: 0,
        endIndex: 13,
        text: '12:30 at noon',
      },
    });
  });

  
});