import { TimeAnalyzer } from 'time-analyzer';
import { expectDateTime, expectTime } from '../utils';

describe('En Time', () => {

  test('Time', () => {
    expectTime({
      text: '1pm',
      hour: 13,
      minute: 0,
      second: 0,
    });
  });

  test('Time', () => {
    expectTime({
      text: 'at 5:30 p.m',
      hour: 17,
      minute: 30,
      second: 0,
    });
  });

  test('Time Clock', () => {
    expectTime({
      text: '4 o’clock',
      hour: 4,
      minute: 0,
      second: 0,
    });
  });

  test('Time Clock', () => {
    expectTime({
      text: '4 o\'clock p.m.',
      hour: 16,
      minute: 0,
      second: 0,
    });
  });

  test('Time Clock', () => {
    expectTime({
      text: '4 of clock p.m.',
      hour: 16,
      minute: 0,
      second: 0,
    });
  });

  test('Time', () => {
    expectTime({
      text: 'at 8 at night',
      hour: 20,
      minute: 0,
      second: 0,
    });
  });

  test('Time', () => {
    expectTime({
      text: 'at 3:30:30 in the afternoon',
      hour: 15,
      minute: 30,
      second: 30,
    });
  });

  test('Time', () => {
    expectTime({
      text: '12:30 at noon',
      hour: 12,
      minute: 30,
      second: 0,
    });
  });

  test('DirectTimeAround', () => {
    expectDateTime({
      text: 'after 3 hours and 30 minutes',
      addHours: 3,
      addMinutes: 30,
    });
  });

  test('DirectTimeAround', () => {
    expectDateTime({
      text: '300 hours before',
      addHours: -300,
    });
  });

  test('Oral Time', () => {
    const values = new TimeAnalyzer('24:30 at noon').values;
    expect(values).toHaveLength(0);
  });

  test('None Time', () => {
    const text = '24:30 at noon';
    const values = new TimeAnalyzer(`Remind me to meet John ${text}, ok?`).values;
    expect(values).toHaveLength(0);
  });
  
});