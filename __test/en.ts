import * as standard from './standard';

const date_normal = [
  ...standard.date,
  '[MonthName] 3, 2002',
  '[MonthName] 3',
  'March 10, 2010 at 10 o\'clock in the evening'
];

const One = [
  '1',
  'One',
];

const Number = [
  /\d+/,
];


// 英文日期别名
const date_alias = [
  'the day before yesterday',
  'yesterday',
  'today',
  'tomorrow',
  'the day after tomorrow',
  '[One] day before',
  '[One] day ago',
  '[One] day later',
  '[Number] days before',
  '[Number] days ago',
  '[Number] days later',
];

const WeekName = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

// 英文日期: 周
const date_week = [
  '[WeekName]',
  'last [WeekName]',
  'this [WeekName]',
  'next [WeekName]',
];

// 英文日期
export const date = [
  ...date_normal,
  ...date_alias,
  ...date_week,
];

const Am = [
  'AM',
  'Am',
  'a.m',
  'a.m.',
]

const Pm = [
  'PM',
  'Pm',
  'p.m',
  'p.m.',
]

const At = [
  'At',
]

export const time = [
  '13:05',
  '13:05 [At]? [Pm]',
  '3:05 [At]? [Am]',
  "[Number] o'clock",
];

export const datetime = [
  '[date][time]',
]


// 英文日期段
export const data_period = [
  '[date_standard_normal][PeriodTo][date_standard_normal]',
  '[MonthName][Number][PeriodTo][Number]',
  '[MonthName][Number][PeriodTo][Number],[Year]',
  '[WeekName][PeriodTo][WeekName]',
]

const PeriodTo = [
  '-',
  '~',
  'To',
];

export const time_period = [
  '[time][PeriodTo][time]',
  '[date][time][PeriodTo][time]',
]

