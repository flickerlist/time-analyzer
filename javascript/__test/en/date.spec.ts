import { AnalyzerValueType } from '../../lib/model';
import TimeAnalyzer from '../../lib/index';

describe('En Normal', () => {
  
  test('Date', () => {
    const values = new TimeAnalyzer('July 1, 2022').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: 2022,
      month: 6,
      day: 1,
      match: {
        startIndex: 0,
        endIndex: 12,
        text: 'July 1, 2022',
      },
    });
  });
  
  test('Date', () => {
    const values = new TimeAnalyzer('August 21th').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: 2021,
      month: 7,
      day: 21,
      match: {
        startIndex: 0,
        endIndex: 11,
        text: 'August 21th',
      },
    });
  });
  
  test('Date', () => {
    const values = new TimeAnalyzer('Nov. 25, 2022').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: 2022,
      month: 10,
      day: 25,
      match: {
        startIndex: 0,
        endIndex: 13,
        text: 'Nov. 25, 2022',
      },
    });
  });
  
  test('Date', () => {
    const values = new TimeAnalyzer('29th of August').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: 2021,
      month: 7,
      day: 29,
      match: {
        startIndex: 0,
        endIndex: 14,
        text: '29th of August',
      },
    });
  });
  
  test('Date', () => {
    const values = new TimeAnalyzer('25th November, 2022').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: 2022,
      month: 10,
      day: 25,
      match: {
        startIndex: 0,
        endIndex: 19,
        text: '25th November, 2022',
      },
    });
  });
  
});