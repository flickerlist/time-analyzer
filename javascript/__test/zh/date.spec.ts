import { getCurrentYear } from '@/lib/visitor/common.utils';
import { WeekStartDay } from '@/lib/index';
import { expectDate } from '../utils';

describe('Zh Date', () => {

  test('Date', () => {
    expectDate({
      text: '2022年07月01日',
      year: 2022,
      month: 6,
      day: 1,
    });
  });

  test('Date', () => {
    expectDate({
      text: '7月1號',
      year: getCurrentYear(),
      month: 6,
      day: 1,
    });
  });

  test('Date', () => {
    expectDate({
      text: '明年3月5号',
      addYears: 1,
      month: 2,
      day: 5,
    });
  });

  test('Date', () => {
    expectDate({
      text: '下下个月10号',
      addMonths: 2,
      day: 10,
    });
  });

  test('Date', () => {
    expectDate({
      text: '后天',
      addDays: 2,
    });
  });

  test('Date Week', () => {
    expectDate({
      text: '本周五',
      weekDay: 5,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('Date Week', () => {
    expectDate({
      text: '下下周6',
      weekDay: 6,
      addWeeks: 2,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('Date Week', () => {
    expectDate({
      text: '上上周的周日',
      weekDay: 0,
      addWeeks: -2,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('Date Week', () => {
    expectDate({
      text: '这个星期天',
      weekDay: 0,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('Date Week', () => {
    expectDate({
      text: '下个星期天',
      weekDay: 0,
      addWeeks: 1,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('Date Week', () => {
    expectDate({
      text: '周日',
      weekDay: 0,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('Date Week', () => {
    expectDate({
      text: '下周六',
      fullText: '那下周六我们去打网球',
      weekDay: 6,
      addWeeks: 1,
      weekStart: WeekStartDay.Monday,
    });
  });
  
});