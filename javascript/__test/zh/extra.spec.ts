import { TimeAnalyzer } from 'time-analyzer';
import { expectTime } from '../utils';

describe('Zh Extra Match', () => {

  test('Extra text inside', () => {
    expectTime({
      fullText: '12点测试30',
      text: '12点',
      hour: 12,
      minute: 0,
      second: 0,
    });
  });

  test('Extra text inside', () => {
    const values = new TimeAnalyzer('3月啊15号').values;
    expect(values).toHaveLength(0);
  });

});