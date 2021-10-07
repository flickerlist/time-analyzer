# Time analyzer
> analyzer, extract the time text from any string, and convert it to standard time.

## Support format of time
> For languages, new support en, zh-CN, zh-HK.

1. Go to [All Support Format Document](../docs/support-format.md), to see more support formats.
2. See [Test cases in __test](./__test).

## Usage
```bash
$ npm install time-analyzer
```
```ts
import { TimeAnalyzer, AnalyzerValue } from 'time-analyzer';

// for ts
const values: AnalyzerValue[] = new TimeAnalyzer('March 3, 2022, 3:30 p.m.').values;

console.assert(values.length = 1);

const { year, month, day, hour, minute, second, match, valueType } = values[0];
```

## Cases
### Parse DateTime
```ts
import { TimeAnalyzer, AnalyzerValue, AnalyzerValueType } from 'time-analyzer';

// Case for english (ts-jest case)
const text = 'March 3, 2022, 3:30 p.m.';
const values: AnalyzerValue[] = new TimeAnalyzer(text).values;
expect(values).toHaveLength(1);
expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.DateTime,
  year: 2022,
  month: 2,
  day: 3,
  hour: 15,
  minute: 30,
  second: 0,
  match: {
    startIndex: 0,
    endIndex: text.length,
    text: text,
  },
});

// Case for chinese (ts-jest case)
const text = '2年后3月5号下午1點15分20秒';
const values: AnalyzerValue[] = new TimeAnalyzer(text).values;
expect(values).toHaveLength(1);
expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.DateTime,
  year: 2023, // current year + 2
  month: 2,
  day: 5,
  hour: 13,
  minute: 15,
  second: 20,
  match: {
    startIndex: 0,
    endIndex: text.length,
    text,
  },
});
```
### Parse Period Date
```ts
import { TimeAnalyzer, AnalyzerValue, AnalyzerValueType } from 'time-analyzer';

// Case for english (ts-jest case)
const text = 'March 5th at 1 p.m. to Apr. 6th at 3 p.m.';
const values = new TimeAnalyzer(text).values;
expect(values).toHaveLength(1);
expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.Period,
  periodType: AnalyzerPeriodValueType.DateTime,
  start: {
    valueType: AnalyzerValueType.DateTime,
    year: 2021, // match current year
    month: 2,
    day: 5,
    hour: 13,
    minute: 0,
    second: 0,
  },
  end: {
    valueType: AnalyzerValueType.DateTime,
    year: 2021, // match current year
    month: 3,
    day: 6,
    hour: 15,
    minute: 0,
    second: 0,
  },
  match: {
    startIndex: 0,
    endIndex: text.length,
    text: text,
  },
});

// Case for chinese
const text = '明天下午1点45到後天上午3點';
const values = new TimeAnalyzer(text).values;
expect(values).toHaveLength(1);

const start = new Date();
const end = new Date();
start.setDate(start.getDate() + 1);
end.setDate(end.getDate() + 2);

expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.Period,
  periodType: AnalyzerPeriodValueType.DateTime,
  start: {
    valueType: AnalyzerValueType.DateTime,
    year: start.getFullYear(),
    month: start.getMonth(),
    day: start.getDate(),
    hour: 13,
    minute: 45,
    second: 0,
  },
  end: {
    valueType: AnalyzerValueType.DateTime,
    year: end.getFullYear(),
    month: end.getMonth(),
    day: end.getDate(),
    hour: 3,
    minute: 0,
    second: 0,
  },
  match: {
    startIndex: 0,
    endIndex: text.length,
    text: text,
  },
});
```

## Development

### Technology
1. Use [Antlr4](https://www.antlr.org/) to parse text.  
2. Use [antlr4ts-cli](https://www.npmjs.com/package/antlr4ts-cli) to generate TypeScript files.  

### Steps
1. Install [Antlr4](https://www.antlr.org/).
2. Edit `grammar/TimeLexer.g4` & `grammar/TimeParser.g4`.
3. Run `yarn gen-parser`.
4. Code for parser in `src`.
5. Write test cases in [__test](./__test), then run `yarn test`.
6. Add a pull request.

### TODO
1. Support more languages.
2. Split grammar by languages.
