import { TimeAnalyzer } from '@/lib/index';
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
  
  test('Multiple Date', () => {
    const values = new TimeAnalyzer('22/7/1 or 22/8/1').values;
    expect(values).toHaveLength(2);
  });
  
  test('None Date', () => {
    const values = new TimeAnalyzer('22/13/1').values;
    expect(values).toHaveLength(0);
  });
  
  test('None Date', () => {
    const values = new TimeAnalyzer('22/1/32').values;
    expect(values).toHaveLength(0);
  });

});