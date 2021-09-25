import { ParserRuleContext } from "antlr4ts";

export type AroundType = -1 | 1 | 0;

export enum AnalyzerValueType {
  PeriodDateTime = 'PeriodDateTime',
  DateTime = 'DateTime',
  Date = 'Date',
  Time = 'Time',
  ValueArray = 'ValueArray',
}

export class SourceMapPosition {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  static fromParserRuleContext(ctx: ParserRuleContext) {
    return new SourceMapPosition(ctx.start.startIndex, ctx.stop.stopIndex);
  }
}

export interface AnalyzerValueOptions {
  mapPosition?: SourceMapPosition;
  mapPositions?: SourceMapPosition[];
}


export abstract class AnalyzerValue {
  valueType: AnalyzerValueType;
  mapPosition?: SourceMapPosition;
  mapPositions?: SourceMapPosition[]; // date text mapping from origin text

  constructor({
    valueType,
    mapPosition = null,
    mapPositions = [],
    }: {
      valueType: AnalyzerValueType;
      mapPosition?: SourceMapPosition;
      mapPositions?: SourceMapPosition[];
    }) {
    this.valueType = valueType;
    this.mapPosition = mapPosition;
    this.mapPositions = mapPositions;
  }

  static concatCharMapping(values: AnalyzerValue[]): SourceMapPosition[] {
    return values.reduce<SourceMapPosition[]>((pre, current) => {
      if (current.mapPositions.length) {
        pre.concat(current.mapPositions);
      } else if (current.mapPosition) {
        pre.push(current.mapPosition);
      }
      return pre;
    }, []);
  }
}

export class AnalyzerPeriodDateTimeValue extends AnalyzerValue {
  constructor(
    start: AnalyzerValue,
    end: AnalyzerValue,
    options: AnalyzerValueOptions,
  ) {
    super({
      valueType:  AnalyzerValueType.PeriodDateTime,
      mapPosition: options.mapPosition,
    });
    this.start = start;
    this.end = end;
  }

  start: AnalyzerValue = null;
  end: AnalyzerValue = null;
}


export class AnalyzerDateValue extends AnalyzerValue {
  constructor(
    year: number,
    month: number,
    day: number,
    options: AnalyzerValueOptions,
  ) {
    super({
      valueType:  AnalyzerValueType.Date,
      mapPosition: options.mapPosition,
    });
    this.year = year;
    this.month = month;
    this.day = day;
  }

  year: number = 0;
  month: number = 0;
  day: number = 0;
}


export class AnalyzerTimeValue extends AnalyzerValue {
  constructor(
    hour: number,
    minute: number,
    second: number = 0,
    options: AnalyzerValueOptions,
  ) {
    super({
      valueType:  AnalyzerValueType.Time,
      mapPosition: options.mapPosition,
    });
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  valueType = AnalyzerValueType.Time;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
}

export class AnalyzerDateTimeValue extends AnalyzerValue {
  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number = 0,
    options: AnalyzerValueOptions,
  ) {
    super({
      valueType: AnalyzerValueType.Time,
      mapPosition: options.mapPosition,
    });
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  static create(dateValue: AnalyzerDateValue, timeValue: AnalyzerTimeValue) {
    return new AnalyzerDateTimeValue(
      dateValue.year,
      dateValue.month,
      dateValue.day,
      timeValue.hour,
      timeValue.minute,
      timeValue.second, {
        mapPositions: AnalyzerValue.concatCharMapping([
          dateValue,
          timeValue,
        ]),
      }
    );
  }

  static fromDateTime(dateTime: Date, options: AnalyzerValueOptions) {
    return new AnalyzerDateTimeValue(
      dateTime.getFullYear(),
      dateTime.getMonth(),
      dateTime.getDate(),
      dateTime.getHours(),
      dateTime.getMinutes(),
      dateTime.getSeconds(),
      options,
    );
  }

  valueType = AnalyzerValueType.DateTime;
  year: number = 0;
  month: number = 0;
  day: number = 0;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
}

export class AnalyzerValueArray extends AnalyzerValue {
  constructor(
    values: AnalyzerValue[] = [],
  ) {
    super({
      valueType:  AnalyzerValueType.ValueArray,
    });
    this.values = values;
  }

  values: AnalyzerValue[];
}
