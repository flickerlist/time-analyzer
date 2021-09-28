# Time analyzerr
> analyzer, extract the time text from any string, and convert it to standard time.

## Support format of time
[Support Format](./docs/support-format.md)

## Usage
### JavaScript
#### Date
```ts
import { TimeAnalyzer, AnalyzerValue, AnalyzerValueType } from `time-analyzer`;

// ts-jest case
const values: AnalyzerValue[] = new TimeAnalyzer('22/7/1').values;
expect(values).toHaveLength(1);
expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.Date,
  year: 2022,
  month: 6,
  day: 1,
  match: {
    startIndex: 0,
    endIndex: 6,
    text: '22/7/1',
  },
});
```
#### Period
```ts
import { TimeAnalyzer, AnalyzerValue, AnalyzerValueType } from `time-analyzer`;

const values: AnalyzerValue[] = new TimeAnalyzer('2021-07-01 15:30-16:30').values;

// ts-jest case
expect(values).toHaveLength(1);
expect(values[0]).toMatchObject({
  valueType: AnalyzerValueType.PeriodDateTime,
  start: {
    valueType: AnalyzerValueType.DateTime,
    year: 2021,
    month: 6,
    day: 1,
    hour: 15,
    minute: 30,
    second: 0,
  },
  end: {
    valueType: AnalyzerValueType.DateTime,
    year: 2021,
    month: 6,
    day: 1,
    hour: 16,
    minute: 30,
    second: 0,
  },
  match: {
    startIndex: 0,
    endIndex: 22,
    text: '2021-07-01 15:30-16:30',
  },
});
```

### Dart