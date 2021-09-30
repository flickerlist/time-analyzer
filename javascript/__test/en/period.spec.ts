import { getCurrentYear } from '@/lib/visitor/std.utils';
import { TimeAnalyzer, AnalyzerValueType, AnalyzerPeriodValueType } from '@/lib/index';
import { parseWeekDay_startAtSunday } from '@/lib/visitor/common.utils';

describe('En Period', () => {

  test('Period', () => {
    const values = new TimeAnalyzer('March 3-5, 2002').values;
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      valueType: AnalyzerValueType.PeriodDateTime,
      periodType: AnalyzerPeriodValueType.Date,
      start: {
        valueType: AnalyzerValueType.Date,
        year: 2002,
        month: 2,
        day: 3,
      },
      end: {
        valueType: AnalyzerValueType.Date,
        year: 2002,
        month: 2,
        day: 5,
      },
      match: {
        startIndex: 0,
        endIndex: 15,
        text: 'March 3-5, 2002',
      },
    });
  });
});