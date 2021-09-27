import { AnalyzerValueType } from '../../lib/model';
import TimeAnalyzer from '../../lib/index';

describe('Standard Normal', () => {
  
  test('Date', () => {
    const values = new TimeAnalyzer('2022-09-10').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: 2022,
      month: 8,
      day: 10,
      match: {
        startIndex: 0,
        endIndex: 10,
        text: '2022-09-10',
      },
    });
  });
  
  test('Date', () => {
    const values = new TimeAnalyzer('22/7/1').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: 2022,
      month: 6,
      day: 1,
      match: {
        startIndex: 0,
        endIndex: 6,
        text: '22/7/1',
      },
    });
  });
  
  test('DateTime', () => {
    const values = new TimeAnalyzer('2022-07-01T15:30:15').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: 2022,
      month: 6,
      day: 1,
      match: {
        startIndex: 0,
        endIndex: 19,
        text: '2022-07-01T15:30:15',
      },
    });
  });
  
  test('DateTime', () => {
    const values = new TimeAnalyzer('2022-07-01 15:30').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: 2022,
      month: 6,
      day: 1,
      hour: 15,
      minute: 30,
      match: {
        startIndex: 0,
        endIndex: 16,
        text: '2022-07-01 15:30',
      },
    });
  });
  
  test('Oral', () => {
    const values = new TimeAnalyzer('Call me at 2022-07-01 15:30, remember.').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: 2022,
      month: 6,
      day: 1,
      hour: 15,
      minute: 30,
      match: {
        startIndex: 8,
        endIndex: 27,
        text: 'at 2022-07-01 15:30',
      },
    });
  });
});