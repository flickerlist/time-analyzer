import { AnalyzerQuickValue, parse, parseFirst } from "time-analyzer";

describe('Quick parse functions', () => {

  test('parse', () => {
    const text = '2021/7/1 13:15';
    const values: AnalyzerQuickValue[] = parse(text);
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      start: new Date('2021-07-01T13:15:00'),
      end: null,
      onlyDate: false,
      match: {
        text,
        startIndex: 0,
        endIndex: text.length,
      }
    });
  });

  test('parse', () => {
    const text = '2021年7月1号上午3点15分';
    const values: AnalyzerQuickValue[] = parse(text);
    expect(values).toHaveLength(1);
    expect(values[0]).toMatchObject({
      start: new Date('2021-07-01T03:15:00'),
      end: null,
      onlyDate: false,
      match: {
        text,
        startIndex: 0,
        endIndex: text.length,
      }
    });
  });

  test('parseFirst', () => {
    const text = '2021/7/1 13:15';
    const value: AnalyzerQuickValue = parseFirst(text);
    expect(value).toMatchObject({
      start: new Date('2021-07-01T13:15:00'),
      end: null,
      onlyDate: false,
      match: {
        text,
        startIndex: 0,
        endIndex: text.length,
      }
    });
  });

  test('parseFirst', () => {
    const text = '2021/7/1 1:30pm - 2022/7/1 3 o\'clock';
    const value: AnalyzerQuickValue = parseFirst(text);
    expect(value).toMatchObject({
      start: new Date('2021-07-01T13:30:00'),
      end: new Date('2022-07-01T03:00:00'),
      onlyDate: false,
      match: {
        text,
        startIndex: 0,
        endIndex: text.length,
      }
    });
  });

  test('parseFirst', () => {
    const text = '2021/7/1 - 2022/7/1';
    const value: AnalyzerQuickValue = parseFirst(text);
    expect(value).toMatchObject({
      start: new Date('2021-07-01T00:00:00'),
      end: new Date('2022-07-01T00:00:00'),
      onlyDate: true,
      match: {
        text,
        startIndex: 0,
        endIndex: text.length,
      }
    });
  });
  
});