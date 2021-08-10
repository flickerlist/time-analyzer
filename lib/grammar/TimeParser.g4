parser grammar TimeParser;

options {
    tokenVocab=TimeLexer;
}

program
    : statementList? EOF
    ;

statementList
    : statement+
    ;

statement
    : std
    ;

std
    : year
    | month
    ;

year
    : YearNumber DateJoiner MonthNumber DateJoiner DayNumber;

month
    : DateJoiner MonthNumber
    ;

// std
//     : stdDate
//     ;
    // | stdTime
    // | stdDateTime
    // | stdDatePeriod
    // | stdTimePeriod
    // ;

stdDate
    : (YearNumber DateJoiner)? MonthNumber DateJoiner DayNumber;

stdTime
    : HourNumber TimeJoiner MinuteNumber (TimeJoiner SecondNumber)? ;

stdDateTime
    : stdDate DateTimeJoiner stdTime ;

stdDatePeriod
    : stdDate PeriodJoiner stdDate ;

stdTimePeriod
    : stdDate? stdTime PeriodJoiner stdDate? stdTime ;
