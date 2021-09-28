import { TimeAnalyzer, AnalyzerValueType } from '@/lib/index';

describe('Standard Period', () => {
  
  test('Date', () => {
    const values = new TimeAnalyzer('2022-07-01~2022-07-05').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
      start: {
        valueType: AnalyzerValueType.Date,
        year: 2022,
        month: 6,
        day: 1,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: 2022,
        month: 6,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: 21,
        text: '2022-07-01~2022-07-05',
      },
    });
  });
  
  test('Date', () => {
    const values = new TimeAnalyzer('07-01~07-05').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
      start: {
        valueType: AnalyzerValueType.Date,
        year: 2021,
        month: 6,
        day: 1,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: 2021,
        month: 6,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: 11,
        text: '07-01~07-05',
      },
    });
  });
  
  test('DateTime', () => {
    const values = new TimeAnalyzer('07-01 15:30-16:30').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
      start: {
        valueType: AnalyzerValueType.DateTime,
        year: 2021,
        month: 6,
        day: 1,
        hour: 15,
        minute: 30,
        second: 0,
      },
      end: {
        valueType: AnalyzerValueType.DateTime,
        year: 2021,
        month: 6,
        day: 1,
        hour: 16,
        minute: 30,
        second: 0,
      },
      match: {
        startIndex: 0,
        endIndex: 17,
        text: '07-01 15:30-16:30',
      },
    });
  });
  
  // wait for zh
  // test('Time', () => {
  //   const values = new TimeAnalyzer('15:30-16:30').values;
  //   expect(values).toHaveLength(1);
  //   expect(values[0]).toMatchObject({
  //     valueType: AnalyzerValueType.PeriodDateTime,
  //     start: {
  //       valueType: AnalyzerValueType.Time,
  //       hour: 15,
  //       minute: 30,
  //       second: 0,
  //     },
  //     end: {
  //       valueType: AnalyzerValueType.Time,
  //       hour: 16,
  //       minute: 30,
  //       second: 0,
  //     },
  //     match: {
  //       startIndex: 0,
  //       endIndex: 11,
  //       text: '15:30-16:30',
  //     },
  //   });
  // });
});