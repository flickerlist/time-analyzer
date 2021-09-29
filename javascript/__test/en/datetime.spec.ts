import { getCurrentYear } from '@/lib/visitor/std.utils';
import { TimeAnalyzer, AnalyzerValueType } from '@/lib/index';
import { parseWeekDay_startAtSunday } from '@/lib/visitor/common.utils';

describe('En DateTime', () => {

  test('DateTime', () => {
    const values = new TimeAnalyzer('March 3, 2022, 3:30 p.m.').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: 2022,
      month: 2,
      day: 3,
      hour: 15,
      minute: 30,
      second: 0,
      match: {
        startIndex: 0,
        endIndex: 24,
        text: 'March 3, 2022, 3:30 p.m.',
      },
    });
  });

  test('DateTime', () => {
    const values = new TimeAnalyzer('6:20:10 PM on May 20, 2020').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: 2020,
      month: 4,
      day: 20,
      hour: 18,
      minute: 20,
      second: 10,
      match: {
        startIndex: 0,
        endIndex: 26,
        text: '6:20:10 PM on May 20, 2020',
      },
    });
  });

  test('DateTime', () => {
    const values = new TimeAnalyzer('on September 10th, at 5:50 p.m.').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: getCurrentYear(),
      month: 8,
      day: 10,
      hour: 17,
      minute: 50,
      second: 0,
      match: {
        startIndex: 0,
        endIndex: 31,
        text: 'on September 10th, at 5:50 p.m.',
      },
    });
  });

  test('DateTime', () => {
    const values = new TimeAnalyzer('at 5:50 on Saturday afternoon').values;

    const targetWeekDay = parseWeekDay_startAtSunday(6);
    const date = new Date();
    date.setDate(date.getDate() + targetWeekDay - parseWeekDay_startAtSunday(date.getDay()));

    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hour: 17,
      minute: 50,
      second: 0,
      match: {
        startIndex: 0,
        endIndex: 29,
        text: 'at 5:50 on Saturday afternoon',
      },
    });
  });
  
});