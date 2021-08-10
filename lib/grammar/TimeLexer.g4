lexer grammar TimeLexer;

channels { ERROR }

YearNumber        : ([1-9][0-9]) [0-9][0-9];
MonthNumber       : ('0'..'1')?[0-9];
DayNumber         : ('0'..'3')?[0-9];

HourNumber        : [0-2]?[0-9];
MinuteNumber      : [0-5]?[0-9];
SecondNumber      : [0-5]?[0-9];

TimeZone          : ('+'|'-')[0-9][0-9]':'?[0-9][0-9];

DateJoiner        : '-' | '/';
TimeJoiner        : ':';
DateTimeJoiner    : 'T' | ' ';
PeriodJoiner      : '-' | '~';


NEWLINE : '\r'? '\n' -> skip;
WS      : [ \n\u000D] -> skip;
ANY     : . -> skip;