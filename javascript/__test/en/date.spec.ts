import { parseWeekDay_startAtSunday } from '@/lib/visitor/common.utils';
import { getCurrentYear } from '@/lib/visitor/std.utils';
import { TimeAnalyzer, AnalyzerValueType, AroundType } from '@/lib/index';

describe('En Date', () => {

  //// Normal
  
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

  //// Week
  
  test('Date Week', () => {
    const values = new TimeAnalyzer('Mon.').values;
    expect(values).toHaveLength(1);

    const targetWeekDay = parseWeekDay_startAtSunday(1);
    const date = new Date();
    date.setDate(date.getDate() + targetWeekDay - parseWeekDay_startAtSunday(date.getDay()));
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 4,
        text: 'Mon.',
      },
    });
  });
  
  test('Date Week', () => {
    const values = new TimeAnalyzer('Sunday').values;
    expect(values).toHaveLength(1);

    const targetWeekDay = parseWeekDay_startAtSunday(0);
    const date = new Date();
    date.setDate(date.getDate() + targetWeekDay - parseWeekDay_startAtSunday(date.getDay()));
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 6,
        text: 'Sunday',
      },
    });
  });
  
  test('Date Week', () => {
    const values = new TimeAnalyzer('next friday').values;
    expect(values).toHaveLength(1);

    const targetWeekDay = parseWeekDay_startAtSunday(5);
    const date = new Date();
    const weekDaysLength = 7;
    const aroundType: AroundType = 1;
    date.setDate(date.getDate()
      + weekDaysLength * aroundType 
      + targetWeekDay - parseWeekDay_startAtSunday(date.getDay()));
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 11,
        text: 'next friday',
      },
    });
  });
  
  //// Date around(or step) year

  test('Date around year', () => {
    const values = new TimeAnalyzer('march 5th of the following year').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: getCurrentYear() + 1,
      month: 2,
      day: 5,
      match: {
        startIndex: 0,
        endIndex: 31,
        text: 'march 5th of the following year',
      },
    });
  });
  
  test('Date around year', () => {
    const values = new TimeAnalyzer('March 5 next year').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: getCurrentYear() + 1,
      month: 2,
      day: 5,
      match: {
        startIndex: 0,
        endIndex: 17,
        text: 'March 5 next year',
      },
    });
  });
  
  test('Date around year', () => {
    const values = new TimeAnalyzer('3 years later on April 5').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: getCurrentYear() + 3,
      month: 3,
      day: 5,
      match: {
        startIndex: 0,
        endIndex: 24,
        text: '3 years later on April 5',
      },
    });
  });
  
  test('Date around year', () => {
    const values = new TimeAnalyzer('April 5, 3 years later').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: getCurrentYear() + 3,
      month: 3,
      day: 5,
      match: {
        startIndex: 0,
        endIndex: 22,
        text: 'April 5, 3 years later',
      },
    });
  });
  
  test('Date around year', () => {
    const values = new TimeAnalyzer('next March 5th').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: getCurrentYear() + 1,
      month: 2,
      day: 5,
      match: {
        startIndex: 0,
        endIndex: 14,
        text: 'next March 5th',
      },
    });
  });

  //// Date around(or step) month
  
  test('Date around month', () => {
    const values = new TimeAnalyzer('Next month on the 10th').values;
    expect(values).toHaveLength(1);
    
    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: 10,
      match: {
        startIndex: 0,
        endIndex: 22,
        text: 'Next month on the 10th',
      },
    });
  });
  
  test('Date around month', () => {
    const values = new TimeAnalyzer('10th of next month').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: 10,
      match: {
        startIndex: 0,
        endIndex: 18,
        text: '10th of next month',
      },
    });
  });
  
  test('Date', () => {
    const values = new TimeAnalyzer('5th after 5 months').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setMonth(date.getMonth() + 5);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: 5,
      match: {
        startIndex: 0,
        endIndex: 18,
        text: '5th after 5 months',
      },
    });
  });

  /// Date around(or step) day
  
  test('Date days', () => {
    const values = new TimeAnalyzer('tomorrow').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setDate(date.getDate() + 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 8,
        text: 'tomorrow',
      },
    });
  });
  
  test('Date days', () => {
    const values = new TimeAnalyzer('the day after tomorrow').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setDate(date.getDate() + 2);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 22,
        text: 'the day after tomorrow',
      },
    });
  });
  
  test('Date days', () => {
    const values = new TimeAnalyzer('today').values;
    expect(values).toHaveLength(1);

    const date = new Date();

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 5,
        text: 'today',
      },
    });
  });
  
  test('Date days', () => {
    const values = new TimeAnalyzer('yesterday').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setDate(date.getDate() - 1);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 9,
        text: 'yesterday',
      },
    });
  });
  
  test('Date days', () => {
    const values = new TimeAnalyzer('the day before yesterday').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setDate(date.getDate() - 2);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 24,
        text: 'the day before yesterday',
      },
    });
  });
  
  test('Date days: step ago', () => {
    const values = new TimeAnalyzer('40 days ago').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setDate(date.getDate() - 40);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 0,
        endIndex: 11,
        text: '40 days ago',
      },
    });
  });
  
  test('Date days: step later', () => {
    const values = new TimeAnalyzer('Send message to Linda 40 days later.').values;
    expect(values).toHaveLength(1);

    const date = new Date();
    date.setDate(date.getDate() + 40);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.Date,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      match: {
        startIndex: 22,
        endIndex: 35,
        text: '40 days later',
      },
    });
  });
  
});