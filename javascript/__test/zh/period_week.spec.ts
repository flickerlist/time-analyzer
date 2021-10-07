import { convertWeekDay, getCurrentYear } from '@/lib/visitor/common.utils';
import { AnalyzerPeriodValueType, AnalyzerValueType, TimeAnalyzer, WeekStartDay, WeekValues } from '@/lib/index';
import { parseZhWeekValueToDate } from '@/lib/visitor/zh.utils';
import { DatePeriod, expectWeekPeriod } from '../utils';

function getWeekPeriod(
  start: WeekValues,
  end: WeekValues,
  offsetWeeks: number,
  endOffsetWeeks?: number,
): DatePeriod {
  const startDateValue = parseZhWeekValueToDate(
    convertWeekDay(start, WeekStartDay.Monday),
    offsetWeeks,
  );
  const endDateValue = parseZhWeekValueToDate(
    convertWeekDay(end, WeekStartDay.Monday),
    typeof endOffsetWeeks === 'undefined'? offsetWeeks : endOffsetWeeks,
  );

  return {
    start:startDateValue,
    end: endDateValue,
  }
}

describe('Zh Period Week', () => {

  test('Period Week', () => {
    const text = '下周一至周五';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 1);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period Week', () => {
    const text = '从下周一至下下周五';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 5, 1, 2);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Period Week', () => {
    const text = '3周后的周一到周日';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 0, 3);

    expectWeekPeriod(values[0], dates, text);
  });

  test('Oral Period Week', () => {
    const text = '3周後的週一到周日';
    const fullText = `很重要，${text}要完寫晋昇PPT`;
    const values = new TimeAnalyzer(fullText).values;
    expect(values).toHaveLength(1);

    const dates = getWeekPeriod(1, 0, 3);

    expectWeekPeriod(values[0], dates, text, 4);
  });

  test('None Period Week', () => {
    const values = new TimeAnalyzer('3周後的週零到周日').values;
    expect(values).toHaveLength(0);
  });
  
});