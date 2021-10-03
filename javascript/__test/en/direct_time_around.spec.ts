import { TimeAnalyzer, AnalyzerValueType } from '@/lib/index';

describe('En DirectTimeAround', () => {

  test('Time', () => {
    const text = 'after 3 hours and 30 minutes';
    const values = new TimeAnalyzer(text).values;

    expect(values).toHaveLength(1);

    const time = new Date();
    time.setHours(time.getHours() + 3);
    time.setMinutes(time.getMinutes() + 30);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: time.getFullYear(),
      month: time.getMonth(),
      day: time.getDate(),
      hour: time.getHours(),
      minute: time.getMinutes(),
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  test('Time', () => {
    const text = '300 hours before';
    const values = new TimeAnalyzer(text).values;

    expect(values).toHaveLength(1);

    const time = new Date();
    time.setHours(time.getHours() - 300);

    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.DateTime,
      year: time.getFullYear(),
      month: time.getMonth(),
      day: time.getDate(),
      hour: time.getHours(),
      minute: time.getMinutes(),
      match: {
        startIndex: 0,
        endIndex: text.length,
        text: text,
      },
    });
  });

  
});