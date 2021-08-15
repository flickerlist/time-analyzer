import * as standard from './standard';


// 中文标准日期
export const date_normal = [
  '2021年9月10号',
  '2021年9月10日',
  '9月10号',
  '9月10日',
];

// 中文日期别名
const date_alias = [
  '大前天',
  '前天',
  '昨天',
  '今天',
  '明天',
  '后天',
  '大后天',
  '[Number_cn]天前',
  '[Number_cn]天后',
];

const WeekAlias = [
  '上上',
  '上',
  '本',
  '下',
  '下下',
];

const WeekWord = [
  '周',
  '星期',
];

// 中文日期: 周
const date_week = [
  '[WeekWord][Number]',
  '[WeekAlias][WeekWord][Number]',
];


// 中文日期
export const date = [
  ...date_normal,
  ...date_alias,
  ...date_week,
];

export const time = [
  ...standard.time,
  '3点15',
  '3时15分',
  '[TimeAlias]3点15',
  '[TimeAlias]3点15分',
];

export const datetime = [
  '[date][time]',
]

const PeriodTo = [
  '-',
  '~',
  '至',
  '到',
];

// 中文日期段
export const data_period = [
  '[date_standard_cn_normal][PeriodTo][date_standard_cn_normal]',
  '[Month] [Number][PeriodTo][Number]',
  '[Year][Month] [Number][PeriodTo][Number]',
  '[WeekWord][WeekNumber][PeriodTo][WeekNumber]',
  '[WeekWord][WeekNumber][PeriodTo][WeekWord][WeekNumber]',
];

const TimePeriod = [
  '凌晨',
  '上午',
  '中午',
  '下午',
  '晚上',
];

export const time_period = [
  '[time][PeriodTo][time]',
  '[date][time][PeriodTo][time]',
];