# Time analyzer
> analyzer, extract the time text from any string, and convert it to standard time.

## Support format of time
> For languages, new support en, zh-CN, zh-HK.

1. Go to [All Support Format Document](../docs/support-format.md), to see more support formats.
2. See [Test cases in __test](./__test).

## API

### parseFirst

> Parse time from text, and return first `AnalyzerQuickValue` instance.
```ts
parseFirst(string): AnalyzerQuickValue;
```

### parse

> Parse time from text, and return multiple `AnalyzerQuickValue` instances.
```ts
parse(string): AnalyzerQuickValue[];
```

### TimeAnalyzer
> Class TimeAnalyzer, For more flexible applications.
```ts
constructor(text: string)
```


## Usage
```bash
$ npm install time-analyzer
```
### Simple usage
```ts
import { parseFirst, AnalyzerValue, parse, AnalyzerValueType } from 'time-analyzer';

const text = '2021/7/1 1:30pm - 2022/7/1 3 o\'clock';
const value: AnalyzerQuickValue = parseFirst(text);

// ts-jest
expect(value).toMatchObject({
  start: new Date('2021-07-01T13:30:00'),
  end: new Date('2022-07-01T03:00:00'),
  valueType: AnalyzerValueType.DateTime,
  match: {
    text,
    startIndex: 0,
    endIndex: text.length,
  }
});
```

```ts
import { AnalyzerQuickValue, parse } from "time-analyzer";

const text = '2021/7/1 13:15';
const values: AnalyzerQuickValue[] = parse(text);

// ts-jest
expect(values).toHaveLength(1);
expect(values[0]).toMatchObject({
  start: new Date('2021-07-01T13:15:00'),
  end: null,
  valueType: AnalyzerValueType.DateTime,
  match: {
    text,
    startIndex: 0,
    endIndex: text.length,
  }
});
```

### More flexible usage
```ts
import { TimeAnalyzer, AnalyzerValue } from 'time-analyzer';

const values: AnalyzerValue[] = new TimeAnalyzer('March 3, 2022, 3:30 p.m.').values;

console.assert(values.length = 1);

const { year, month, day, hour, minute, second, match, valueType } = values[0];
```

## For different time formatter
> Use `TimeAnalyzer` for cases, `parse`, `parseFirst` have similar usage.

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
import { parse, AnalyzerValue, AnalyzerValueType } from 'time-analyzer';

// Case for english (ts-jest case)
const text = 'March 5th at 1 p.m. to Apr. 6th at 3 p.m.';
const values: AnalyzerValue[] = new TimeAnalyzer(text).values;
expect(values).toHaveLength(1);
expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.PeriodDateTime,
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
const values: AnalyzerValue[] = new TimeAnalyzer(text).values;
expect(values).toHaveLength(1);

const start = new Date();
const end = new Date();
start.setDate(start.getDate() + 1);
end.setDate(end.getDate() + 2);

expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.PeriodDateTime,
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

## Usage in web
1. build result of project
```bash
$ git clone xxx     # clone project
$ yarn              # yarn install
$ yarn build:umd    # build browser result
```

2. insert script to your project
```html
<script src="xxx">
```

3. use parser
> All in `TimeAnalyzerLib`.

```js
TimeAnalyzerLib.parseFirst('2021年3月15号 下午3点');
```

## Models
> Useful models in parser.

```ts
interface AnalyzerQuickValue {
  start: Date;
  end: Date;
  valueType: AnalyzerValueType; // 'DateTime' | 'Date' | 'Time' | null
  match: null | {
    text: string;
    startIndex: number;
    endIndex: number;
  }
}

enum AnalyzerValueType {
  DateTime = 'DateTime',
  Date = 'Date',
  Time = 'Time',
  PeriodDateTime = 'PeriodDateTime',
  PeriodDate = 'PeriodDate',
  PeriodTime = 'PeriodTime',
}

class AnalyzerValue {
  valueType: AnalyzerValueType;
  match: MatchData;
}

class MatchData {
  startIndex: number;
  endIndex: number;
  text: string;
}

class AnalyzerDateTimeValue extends AnalyzerValue {
  valueType = AnalyzerValueType.DateTime;

  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

class AnalyzerDateValue extends AnalyzerValue {
  valueType = AnalyzerValueType.Date;

  year: number;
  month: number;
  day: number;
}

class AnalyzerTimeValue extends AnalyzerValue {
  valueType = AnalyzerValueType.Time;

  hour: number;
  minute: number;
  second: number;
}

class AbstractAnalyzerPeriodDateTimeValue<T extends AnalyzerValue> extends AnalyzerValue {
  start: T = null;
  end: T = null;
}

class AnalyzerPeriodDateTimeValue extends AbstractAnalyzerPeriodDateTimeValue<AnalyzerDateTimeValue> {
  valueType = AnalyzerValueType.PeriodDateTime;

  start: AnalyzerDateTimeValue;
  end: AnalyzerDateTimeValue;
}

class AnalyzerPeriodDateValue extends AbstractAnalyzerPeriodDateTimeValue<AnalyzerDateValue> {
  valueType = AnalyzerValueType.PeriodDate;

  start: AnalyzerDateValue;
  end: AnalyzerDateValue;
}

class AnalyzerPeriodTimeValue extends AbstractAnalyzerPeriodDateTimeValue<AnalyzerTimeValue> {
  valueType = AnalyzerValueType.PeriodTime;

  start: AnalyzerTimeValue;
  end: AnalyzerTimeValue;
}
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
