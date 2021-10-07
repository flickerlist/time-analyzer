import { TimeAnalyzer, WeekStartDay, WeekValues } from 'time-analyzer';
import { convertWeekDay } from 'time-analyzer/visitor/common.utils';
import { parseEnWeekValueToDate } from 'time-analyzer/visitor/en.utils';
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

  test('Period Week', () => {
    const text = 'Next Mon.-Fri.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 1);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period Week', () => {
    const text = 'From this Mon. to next Fri.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 0, 1);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period Week', () => {
    const text = 'From Mon.-Fri. of next week';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 1);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period Week', () => {
    const text = 'Mon.-Fri., after 3 weeks';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 3);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period Week', () => {
    const text = 'before 3 weeks, from Mon.-Fri.';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, -3);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Oral Period Week', () => {
    const text = 'before 3 weeks, from Mon.-Fri.';
    const fullText = `This happend ${text}, and nobody knowns`;
    const values = new TimeAnalyzer(fullText).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, -3);

    expectWeekPeriod(values[0], dates, text, fullText.indexOf(text));
  });

  test('None Period Week', () => {
    const values = new TimeAnalyzer('24:30 am - 3:30 p.m.').values;
    expect(values).toHaveLength(0);
  });

  test('None Period Week', () => {
    const values = new TimeAnalyzer('1:30 am - 3:60 p.m.').values;
    expect(values).toHaveLength(0);
  });

});