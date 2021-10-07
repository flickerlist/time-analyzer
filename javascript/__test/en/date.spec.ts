import { getCurrentYear } from 'time-analyzer/visitor/common.utils';
import { TimeAnalyzer, WeekStartDay } from 'time-analyzer';
import { expectDate } from '../utils';

describe('En Date', () => {

  //// Normal
  
  test('Date', () => {
    expectDate({
      text: 'July 1, 2022',
      year: 2022,
      month: 6,
      day: 1,
    });
  });
  
  test('Date', () => {
    expectDate({
      text: 'August 21th',
      year: getCurrentYear(),
      month: 7,
      day: 21,
    });
  });
  
  test('Date', () => {
    expectDate({
      text: 'Nov. 25, 2022',
      year: 2022,
      month: 10,
      day: 25,
    });
  });
  
  test('Date', () => {
    expectDate({
      text: '29th of August',
      year: getCurrentYear(),
      month: 7,
      day: 29,
    });
  });
  
  test('Date', () => {
    expectDate({
      text: '25th November, 2022',
      year: 2022,
      month: 10,
      day: 25,
    });
  });

  //// Week
  
  test('Date Week', () => {
    expectDate({
      text: 'Mon.',
      weekDay: 1,
      addWeeks: 0,
      weekStart: WeekStartDay.Sunday,
    });
  });
  
  test('Date Week', () => {
    expectDate({
      text: 'Sunday',
      weekDay: 0,
      addWeeks: 0,
      weekStart: WeekStartDay.Sunday,
    });
  });
  
  test('Date Week', () => {
    expectDate({
      text: 'next friday',
      weekDay: 5,
      addWeeks: 1,
      weekStart: WeekStartDay.Sunday,
    });
  });
  
  //// Date around(or step) year

  test('Date around year', () => {
    expectDate({
      text: 'march 5th of the following year',
      addYears: 1,
      month: 2,
      day: 5,
    });
  });
  
  test('Date around year', () => {
    expectDate({
      text: 'March 5 next year',
      addYears: 1,
      month: 2,
      day: 5,
    });
  });
  
  test('Date around year', () => {
    expectDate({
      text: '3 years later on April 5',
      addYears: 3,
      month: 3,
      day: 5,
    });
  });
  
  test('Date around year', () => {
    expectDate({
      text: 'April 5, 3 years later',
      addYears: 3,
      month: 3,
      day: 5,
    });
  });
  
  test('Date around year', () => {
    expectDate({
      text: 'next March 5th',
      addYears: 1,
      month: 2,
      day: 5,
    });
  });

  //// Date around(or step) month
  
  test('Date around month', () => {
    expectDate({
      text: 'Next month on the 10th',
      addMonths: 1,
      day: 10,
    });
  });
  
  test('Date around month', () => {
    expectDate({
      text: '10th of next month',
      addMonths: 1,
      day: 10,
    });
  });
  
  test('Date', () => {
    expectDate({
      text: '5th after 5 months',
      addMonths: 5,
      day: 5,
    });
  });

  /// Date around(or step) day
  
  test('Date days', () => {
    expectDate({
      text: 'tomorrow',
      addDays: 1,
    });
  });
  
  test('Date days', () => {
    expectDate({
      text: 'the day after tomorrow',
      addDays: 2,
    });
  });
  
  test('Date days', () => {
    expectDate({
      text: 'today',
      addDays: 0,
    });
  });
  
  test('Date days', () => {
    expectDate({
      text: 'yesterday',
      addDays: -1,
    });
  });
  
  test('Date days', () => {
    expectDate({
      text: 'the day before yesterday',
      addDays: -2,
    });
  });
  
  test('Date days: step ago', () => {
    expectDate({
      text: '40 days ago',
      addDays: -40,
    });
  });
  
  test('Oral Date days: step later', () => {
    const text = '40 days later';
    expectDate({
      text,
      fullText: `Send message to Linda ${text}.`,
      addDays: 40,
    });
  });

  test('None Date', () => {
    const values = new TimeAnalyzer('July 32, 2022').values;
    expect(values).toHaveLength(0);
  });

  test('None Date', () => {
    const values = new TimeAnalyzer('Julya 32, 2022').values;
    expect(values).toHaveLength(0);
  });
  
});