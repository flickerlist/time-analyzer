import { TimeAnalyzer } from 'time-analyzer';
import { convertWeekDay, getCurrentYear } from 'time-analyzer/visitor/common.utils';
import { expectDateTime } from '../utils';

describe('En DateTime', () => {

  test('DateTime', () => {
    expectDateTime({
      text: 'March 3, 2022, 3:30 p.m.',
      year: 2022,
      month: 2,
      day: 3,
      hour: 15,
      minute: 30,
      second: 0,
    });
  });

  test('DateTime', () => {
    expectDateTime({
      text: '6:20:10 PM on May 20, 2020',
      year: 2020,
      month: 4,
      day: 20,
      hour: 18,
      minute: 20,
      second: 10,
    });
  });

  test('DateTime', () => {
    expectDateTime({
      text: 'on September 10th, at 5:50 p.m.',
      year: getCurrentYear(),
      month: 8,
      day: 10,
      hour: 17,
      minute: 50,
      second: 0,
    });
  });

  test('DateTime', () => {
    expectDateTime({
      text: 'at 5:50 on Saturday afternoon',
      weekDay: convertWeekDay(6),
      hour: 17,
      minute: 50,
      second: 0,
    });
  });

  test('Oral DateTime', () => {
    const text = 'at 5:50 on Saturday afternoon';
    expectDateTime({
      fullText: `Remind me to meet John ${text}, ok?`,
      text,
      weekDay: convertWeekDay(6),
      hour: 17,
      minute: 50,
      second: 0,
    });
  });

  test('None DateTime', () => {
    const values = new TimeAnalyzer('at 24:50 on Saturday afternoon').values;
    expect(values).toHaveLength(0);
  });

  test('None DateTime', () => {
    const values = new TimeAnalyzer('at 5:60 on Saturday afternoon').values;
    expect(values).toHaveLength(0);
  });
  
});