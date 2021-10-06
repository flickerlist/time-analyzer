import { expectDateTime, expectTime } from '../utils';

describe('Zh Time', () => {

  test('Time', () => {
    expectTime({
      text: '15点30分',
      hour: 15,
      minute: 30,
      second: 0,
    });
  });

  test('Time', () => {
    expectTime({
      text: '15点30',
      hour: 15,
      minute: 30,
      second: 0,
    });
  });

  test('Time', () => {
    expectTime({
      text: '15点30分15秒',
      hour: 15,
      minute: 30,
      second: 15,
    });
  });

  test('Time', () => {
    expectTime({
      text: '下午3点30分',
      hour: 15,
      minute: 30,
      second: 0,
    });
  });

  test('Time', () => {
    expectTime({
      text: '凌晨3点',
      hour: 3,
      minute: 0,
      second: 0,
    });
  });

  test('Time', () => {
    expectTime({
      text: '晚上6点45',
      hour: 18,
      minute: 45,
      second: 0,
    });
  });

  test('DirectTimeAround', () => {
    expectDateTime({
      text: '3个小时后',
      addHours: 3,
    });
  });

  test('DirectTimeAround', () => {
    expectDateTime({
      text: '3小时后',
      addHours: 3,
    });
  });

  test('DirectTimeAround', () => {
    expectDateTime({
      text: '20分钟后',
      addMinutes: 20,
    });
  });

  test('DirectTimeAround', () => {
    expectDateTime({
      text: '3小时20分钟后',
      addHours: 3,
      addMinutes: 20,
    });
  });
  
});