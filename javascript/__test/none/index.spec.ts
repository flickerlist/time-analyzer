import { TimeAnalyzer } from "time-analyzer";

describe('None', () => {

  test('None', () => {
    const text = '记得';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(0);
  });

  test('None', () => {
    const text = 'aabb';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(0);
  });

  test('None', () => {
    const text = 'At';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(0);
  });

  test('None', () => {
    const text = '至';
    const values = new TimeAnalyzer(text).values;
    expect(values).toHaveLength(0);
  });
});