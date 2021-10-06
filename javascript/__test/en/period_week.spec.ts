import { TimeAnalyzer, WeekStartDay, WeekValues } from '@/lib/index';
import { convertWeekDay } from '@/lib/visitor/common.utils';
import { parseEnWeekValueToDate } from '@/lib/visitor/en.utils';
import { DatePeriod, expectWeekPeriod } from '../utils';

function getWeekPeriod(
  start: WeekValues,
  end: WeekValues,
  offsetWeeks: number,
  endOffsetWeeks?: number,
): DatePeriod {
  const startDateValue = parseEnWeekValueToDate(
    convertWeekDay(start, WeekStartDay.Sunday),
    offsetWeeks,
  );
  const endDateValue = parseEnWeekValueToDate(
    convertWeekDay(end, WeekStartDay.Sunday),
    typeof endOffsetWeeks === 'undefined'? offsetWeeks : endOffsetWeeks,
  );
  return {
    start:startDateValue,
    end: endDateValue,
  }
}


describe('En Period Week', () => {

  test('Period', () => {
    const text = 'Next Mon.-Fri.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 1);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period', () => {
    const text = 'From this Mon. to next Fri.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 0, 1);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period', () => {
    const text = 'From Mon.-Fri. of next week';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 1);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period', () => {
    const text = 'Mon.-Fri., after 3 weeks';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 3);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period', () => {
    const text = 'before 3 weeks, from Mon.-Fri.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, -3);

    expectWeekPeriod(values[0], dates, text);
  });

});