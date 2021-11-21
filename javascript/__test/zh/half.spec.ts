import { getCurrentYear } from 'time-analyzer/visitor/common.utils';
import { TimeAnalyzer, WeekStartDay } from 'time-analyzer';
import { expectDate, expectDateTime, expectTime } from '../utils';

describe('Zh Half', () => {
  
  test('7点半', () => {
    expectTime({
      text: '7点半',
      hour: 7,
      minute: 30,
      second: 0,
    });
  });

  test('下午1点半', () => {
    expectTime({
      text: '下午1点半',
      hour: 13,
      minute: 30,
      second: 0,
    });
  });
  
  test('半年后21号', () => {
    expectDate({
      text: '半年后21号',
      addMonths: 6,
      day: 21,
    });
  });
  
  test('半个月之前', () => {
    expectDate({
      text: '半个月之前',
      addDays: -15,
    });
  });
  
  test('半天后', () => {
    expectDateTime({
      text: '半天后',
      addHours: 12,
    });
  });
  
  test('半个小时后', () => {
    expectDateTime({
      text: '半个小时后',
      addMinutes: 30,
    });
  });
  
});