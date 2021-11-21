import { expectDate, expectDateTime, expectTime } from '../utils';

describe('En Half', () => {
  
  test('Half past seven', () => {
    expectTime({
      text: 'Half past seven',
      hour: 7,
      minute: 30,
      second: 0,
    });
  });

  test('Half past one pm', () => {
    expectTime({
      text: 'Half past one p.m',
      hour: 13,
      minute: 30,
      second: 0,
    });
  });
  
  test('21th, at half a year later', () => {
    expectDate({
      text: '21th, at half a year later',
      addMonths: 6,
      day: 21,
    });
  });
  
  test('at half a month before', () => {
    expectDate({
      text: 'at half a month before',
      addDays: -15,
    });
  });
  
  test('at half a day later', () => {
    expectDateTime({
      text: 'at half a day later',
      addHours: 12,
    });
  });
  
  test('at half a hour later', () => {
    expectDateTime({
      text: 'at half a hour later',
      addMinutes: 30,
    });
  });
  
});