import { expectDate } from '../utils';

describe('Standard Date', () => {
  
  test('Date', () => {
    expectDate({
      text: '2022-09-10',
      year: 2022,
      month: 8,
      day: 10,
    });
  });
  
  test('Date', () => {
    expectDate({
      text: '22/7/1',
      year: 2022,
      month: 6,
      day: 1,
    });
  });

});