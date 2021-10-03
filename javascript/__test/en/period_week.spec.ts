import { TimeAnalyzer, AnalyzerValueType, AnalyzerPeriodValueType, WeekValues, AnalyzerDateValue, AnalyzerValue } from '@/lib/index';
import { parseEnWeekValueToDate } from '@/lib/visitor/en.utils';

interface DatePeriod {
  start: AnalyzerDateValue;
  end: AnalyzerDateValue;
}

function getWeekPeriod(
  start: WeekValues,
  end: WeekValues,
  offsetWeeks: number,
  endOffsetWeeks?: number,
): DatePeriod {
  const startDateValue = parseEnWeekValueToDate(start, offsetWeeks);
  const endDateValue = parseEnWeekValueToDate(end, typeof endOffsetWeeks === 'undefined'? offsetWeeks : endOffsetWeeks);
  return {
    start:startDateValue,
    end: endDateValue,
  }
}

function expectWeekPeriod(
  value: AnalyzerValue,
  datePeriod: DatePeriod,
  matchText: string,
  matchStart = 0,
) {
  expect(value).toMatchObject({
    valueType: AnalyzerValueType.Period,
    periodType: AnalyzerPeriodValueType.Date,
    start: {
      valueType: datePeriod.start.valueType,
      year: datePeriod.start.year,
      month: datePeriod.start.month,
      day: datePeriod.start.day,
    },
    end: {
      valueType: datePeriod.start.valueType,
      year: datePeriod.end.year,
      month: datePeriod.end.month,
      day: datePeriod.end.day,
    },
    match: {
      startIndex: matchStart,
      endIndex: matchStart + matchText.length,
      text: matchText,
    },
  });
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