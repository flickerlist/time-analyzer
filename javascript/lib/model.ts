import { ParserRuleContext } from "antlr4ts";

// parse result for: before, after, ago
export type StepOffsetType = -1 | 1 | 0;

// last, this, next, the day before yesterday, 
export type AroundValue = -3 | -2 | -1 | 0 | 1 | 2 | 3;

export type WeekValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

// week start: Sunday or Monday
export enum WeekStartDay {
  Sunday = 'Sunday',
  Monday = 'Monday', // start at monday, such in chinese
}

export enum AnalyzerValueType {
  Period = 'Period',
  DateTime = 'DateTime',
  Date = 'Date',
  Time = 'Time',
  ValueArray = 'ValueArray',
}

export enum AnalyzerPeriodValueType {
  DateTime = 'DateTime',
  Date = 'Date',
  Time = 'Time',
}

// match data of text
export class MatchData {
  startIndex: number = -1;
  endIndex: number = -1;
  
  // set after visit over, for context'text property of antlr4 will skip 'WS', 'NEWLINE' (those should skip while parse)
  text: string = null;

  constructor(context?: ParserRuleContext) {
    if (context) {
      this.startIndex = context.start.startIndex;
      this.endIndex = context.stop.stopIndex + 1;
    }
  }
}

// remove useless match (at header or suffix)
const uselessPrefixReg = /^[-~/:,]+/g;
const uselessSuffixReg = /[-~/:,]+$/g;
export abstract class AnalyzerValue {
  valueType: AnalyzerValueType;
  match: MatchData;

  constructor({
    valueType,
    context = null,
    }: {
      valueType: AnalyzerValueType;
      context?: ParserRuleContext;
    }) {
    this.valueType = valueType;
    this.match = new MatchData(context);
  }

  resetContext(context?: ParserRuleContext) {
    this.match = new MatchData(context);
  }

  resetMatchText(input: string = '') {
    let text = '';
    if (this.match.startIndex >= 0
      && this.match.endIndex>=0) {
      text = input.substring(
        this.match.startIndex,
        this.match.endIndex,
      );
      this.match.text = text;
    }
  }
}

export class AnalyzerPeriodValue extends AnalyzerValue {
  constructor(
    periodType: AnalyzerPeriodValueType,
    start: AnalyzerValue,
    end: AnalyzerValue,
    context?: ParserRuleContext,
  ) {
    super({
      valueType:  AnalyzerValueType.Period,
      context: context,
    });
    this.periodType = periodType;
    this.start = start;
    this.end = end;
  }

  periodType: AnalyzerPeriodValueType = null;
  start: AnalyzerValue = null;
  end: AnalyzerValue = null;
}


export class AnalyzerDateValue extends AnalyzerValue {
  constructor(
    year: number,
    month: number,
    day: number,
    context?: ParserRuleContext,
  ) {
    super({
      valueType:  AnalyzerValueType.Date,
      context: context,
    });
    this.year = year;
    this.month = month;
    this.day = day;
  }

  year: number = 0;
  month: number = 0;
  day: number = 0;

  static fromDateTime(
    dateTime: Date,
    context?: ParserRuleContext,
  ) {
    return new AnalyzerDateValue(
      dateTime.getFullYear(),
      dateTime.getMonth(),
      dateTime.getDate(),
      context,
    );
  }
}


export class AnalyzerTimeValue extends AnalyzerValue {
  constructor(
    hour: number,
    minute: number,
    second: number = 0,
    context?: ParserRuleContext,
  ) {
    super({
      valueType:  AnalyzerValueType.Time,
      context: context,
    });
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  valueType = AnalyzerValueType.Time;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  static fromDateTime(
    dateTime: Date,
    context?: ParserRuleContext,
  ) {
    return new AnalyzerTimeValue(
      dateTime.getHours(),
      dateTime.getMinutes(),
      dateTime.getSeconds(),
      context,
    );
  }
}

export class AnalyzerDateTimeValue extends AnalyzerValue {
  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number = 0,
    context?: ParserRuleContext,
  ) {
    super({
      valueType: AnalyzerValueType.Time,
      context: context,
    });
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  static create(
    dateValue: AnalyzerDateValue,
    timeValue: AnalyzerTimeValue,
    context?: ParserRuleContext,
  ) {
    return new AnalyzerDateTimeValue(
      dateValue.year,
      dateValue.month,
      dateValue.day,
      timeValue.hour,
      timeValue.minute,
      timeValue.second,
      context,
    );
  }

  static fromDateTime(
    dateTime: Date,
    context?: ParserRuleContext,
  ) {
    return new AnalyzerDateTimeValue(
      dateTime.getFullYear(),
      dateTime.getMonth(),
      dateTime.getDate(),
      dateTime.getHours(),
      dateTime.getMinutes(),
      dateTime.getSeconds(),
      context,
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

// only use for visit result combined
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

export class AnalyzerUnexpectedError extends Error {
  constructor() {
    super('Unexpected error');
  }
}