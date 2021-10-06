import { expectDateTime } from '../utils';

describe('Standard DateTime', () => {
  
  test('DateTime', () => {
    expectDateTime({
      text: '2022-07-01T15:30:15',
      year: 2022,
      month: 6,
      day: 1,
      hour: 15,
      minute: 30,
      second: 15,
    });
  });
  
  test('DateTime', () => {
    expectDateTime({
      text: '2022-07-01 15:30',
      year: 2022,
      month: 6,
      day: 1,
      hour: 15,
      minute: 30,
      second: 0,
    });
  });
  
  test('Oral', () => {
    const text = 'at 2022-07-01 15:30';
    expectDateTime({
      text,
      fullText: `Call me ${text}, remember.`,
      year: 2022,
      month: 6,
      day: 1,
      hour: 15,
      minute: 30,
      second: 0,
    });
  });
});