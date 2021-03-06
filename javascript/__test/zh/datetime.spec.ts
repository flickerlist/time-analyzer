import { TimeAnalyzer, WeekStartDay } from 'time-analyzer';
import { expectDateTime } from '../utils';

describe('Zh DateTime', () => {

  test('DateTime', () => {
    expectDateTime({
      text: '2022年07月01日 15点30分15秒',
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
      text: '2022年07月01日 下午3点30分',
      year: 2022,
      month: 6,
      day: 1,
      hour: 15,
      minute: 30,
      second: 0,
    });
  });

  test('DateTime', () => {
    expectDateTime({
      text: '明年3月5号12点15分',
      addYears: 1,
      month: 2,
      day: 5,
      hour: 12,
      minute: 15,
      second: 0,
    });
  });

  test('DateTime', () => {
    expectDateTime({
      text: '2年后3月5号下午1点15分20秒',
      addYears: 2,
      month: 2,
      day: 5,
      hour: 13,
      minute: 15,
      second: 20,
    });
  });

  test('DateTime', () => {
    expectDateTime({
      text: '下周六下午3点',
      weekDay: 6,
      addWeeks: 1,
      hour: 15,
      minute: 0,
      second: 0,
      weekStart: WeekStartDay.Monday,
    });
  });
  
  test('DateTime', () => {
    expectDateTime({
      text: '下周六下午13点', // '下午' will ignore
      weekDay: 6,
      addWeeks: 1,
      hour: 13,
      minute: 0,
      second: 0,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('Oral DateTime', () => {
    const text = '下周六下午3点';
    expectDateTime({
      text,
      fullText: `记得${text}提醒我开会`,
      weekDay: 6,
      addWeeks: 1,
      hour: 15,
      minute: 0,
      second: 0,
      weekStart: WeekStartDay.Monday,
    });
  });

  test('None DateTime', () => {
    const values = new TimeAnalyzer('下周八下午3点').values;
    expect(values).toHaveLength(0);
  });

  test('None DateTime', () => {
    const values = new TimeAnalyzer('下周六下午25点').values;
    expect(values).toHaveLength(0);
  });
  
});