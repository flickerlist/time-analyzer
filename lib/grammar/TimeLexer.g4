lexer grammar TimeLexer;

channels { ERROR }

//// std
YearNumber            : [1-9][0-9][0-9][0-9];
DateNumber            : [0-9]?[0-9];
NormaNumber           : [1-9][0-9]*;

MiddelConnectorWord   : '-';
SlashConnectorWord    : '/';
TimeConnectorWord     : ':';
DateTimeConnectorWord : 'T';

//// en
EnMonthValue
    : 'january' | 'jan.'
    | 'february' | 'feb.'
    | 'march' | 'mar.'
    | 'april' | 'apr.'
    | 'may.' | 'may'
    | 'june' | 'jun.'
    | 'july' | 'jul.'
    | 'august' | 'aug.'
    | 'september' | 'sep.'
    | 'october' | 'oct.'
    | 'november' | 'nov.'
    | 'december' | 'dec.';
EnWeekValue
  : 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  | 'mon.'  | 'tues.' | 'wed.' | 'thur.' | 'fri.' | 'sat.' | 'sun.';
EnDayValue            : [1-9][0-9]*('th' | 'st' | 'nd' | 'rd');

EnAroundWord          : 'of the following' | 'last' | 'this' | 'next';
EnAroundDayWord       : 'the day before yesterday' | 'the day after tomorrow' | 'yesterday' | 'today' | 'tomorrow';
EnBeforeWord          : 'before' | 'ago';
EnAfterWord           : 'after' | 'later';

EnYearWord            : 'years' | 'year';
EnMonthWord           : 'months' | 'month';
EnDayWord             : 'days' | 'day';
EnWeekWord            : 'weeks' | 'week';
EnHourWord            : 'hours' | 'hour';
EnMinuteWord          : 'minutes' | 'minute';
EnSecondWord          : 'seconds' | 'second';

EnMorningWord         : 'a.m.' | 'a.m' | 'am' | 'in the morning' | 'morning' | 'at noon' | 'noon';
EnAfternoonWord       : 'p.m.' | 'p.m' | 'pm' | 'in the afternoon' | 'in the evening' | 'evening' | 'at night' 'night';
EnHourWholeWord       : 'of clock' | 'o\'clock';

EnOf                  : 'on the' | 'at the' | 'on' | 'at' | 'of';
EnAnd                 : 'and';

//// zh (cn && tw && hk)
ZhValueWord           : ('一' | '二' | '三' | '四' | '五' | '六' | '七' | '八' | '九' | '十' | '廿')+;
ZhAroundWord        : '这个' | '上上' | '上' | '本' | '这' | '這個' | '這' | '下下' | '下' // used for 'month, week'
                    | '大前' | '大后' | '昨' | '去' | '今' | '明' | '大後'; // use for 'year, day'
ZhBeforeWord          : '前';
ZhAfterWord           : '后' | '後';
ZhOf                  : '的';

ZhYearWord            : '年';
ZhMonthWord           : '月';
ZhCountMonth          : '个月';
ZhDayWord             : '日';
ZhDayWord_2           : '号' | '號';
ZhTian                : '天';
ZhWeekWord            : '周' | '个星期' | '星期';
ZhHourWord            : '时' | '点' | '時' | '點';
ZhCountHour           : '个小时' | '小时' | '個小時' | '小時';
ZhMinuteWord          : '分';
ZhCountMinute         : '分钟' | '分鐘';
ZhSecondWord          : '秒';
ZhCountSecond         : '秒钟' | '秒鐘';

ZhMorningWord         : '凌晨' | '上午' | '中午' | '淩晨'; // Useless
ZhAfternoonWord       : '下午' | '晚上';



//// useless words
Dot                 : ',';

NEWLINE : '\r'? '\n' -> skip;
WS      : [ \n\u000D] -> skip;
ANY     : . -> skip;