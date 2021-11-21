# Support Format
> Support date & time format.
## Standard time

### Date
- 2022-07-01
- 2022/07/01
- 2022-7-1
- 2022/7/1
- 21-7-1
- 21/7/1
- 07-01
- 7/1

### Time
- 15:30
- 15:30:15

### DateTime
- 2022-07-01 15:30
- 2022-07-01 15:30:15
- 2022-07-01T15:30:15
- 2022-07-01T15:30:15+0800

### Period
- 2022-07-01~2022-07-05
- 07-01~07-05
- 07-01 15:30~16:30
- 07-01 15:30-16:30
- 15:30-16:30
- 15:30-16:30, 2022-07-01

## English time
> `before` equals to `ago`

### Date
> Normal Date
- March 3, 2002
- August 21th
- Nov. 25, 2010
- 29th of August
- 25th November, 2010

> WeekDay
- Mon.
- Friday
- next friday

> Around Year
- march 5th of the following year
- March 5 next year
- 3 years later on April 5
- April 5, 3 years later
- next March 5th

> Around Month
- Next month on the 10th
- 10th of next month
- 5th after 3 months

> Around Day
- tomorrow
- the day after tomorrow
- today
- yesterday
- the day before yesterday
- 3 days ago


### Time
- 1pm
- at 5:30 p.m
- at 4 o’clock
- at 4 o'clock
- at 8 at night
- at 3:30:30 in the afternoon
- 12:30 at noon

### DateTime
- March 3, 2020, 3 p.m.
- 6:00 PM on May 20, 2020
- on September 10th, at 5:50 p.m.
- at 5:50 on Saturday afternoon

### Period
- March 4 to April 4th
- Next Monday to Next Friday
- yesterday to the day after tomorrow
- tomorrow to 5th, this month

- March 3-5, 2002
- March 3rd-5th, 2002
- March 3rd to 5th, 2002
- March 3 to 5
- 3rd to 5th of next month
- next month, on the 3-5
- March 5 to April 5, 2022
- March 5 to April 5, next year
- March 5 to April 5, 3 years later

- Next Mon.-Fri.
- From this Mon. to next Fri.
- From Mon.-Fri. of next week
- Mon.-Fri., after 3 weeks
- after 3 weeks, from Mon.-Fri.

- 1pm to 3pm
- 1:30pm - 3pm

- March 5th, 1 p.m. to 3 p.m.
- March 5th at 1 p.m. to Apr. 6th at 3 p.m.
- 1pm tomorrow, to 3pm the day after tomorrow
- 1 p.m. to 3 p.m., next Friday

### Direct time around
- after 3 hours and 30 minutes
- 3 hours before

### Half
- Half a year later
- half a month later 
- Half a day later
- Half an hour later
- at half past 8

## Chinese Time
> Support `zh-CN`, `zh-TW`, `zh-HK`.

**Remind**
1. `日` equals to `号` in these following cases.
2. Only show `zh-CN` cases, but also support `zh-TW`, `zh-HK` in the same way.

### Date
> zhDateNormal
- 2022年07月01日
- 2022年07月01号
- 2022年7月1日
- 7月1日

> ZhDate[Year/Month/Day/Week]AroundAlias
- 明年3月5号

- 下下个月10号

- 后天
- 3天后

- 周日
- 本周五
- 下下周6
- 这个星期天
- 上上周的周日
- 3个星期后的周五
- 3周后周五

> ZhDate[Year/Month/Day/Week]AroundStep
- 2年后3月5号
- 3个月后10号

### Time
> zhTimeNormal
- 15点30分
- 15点30
- 15点30分15秒
- 下午3点30分
- 凌晨3点

> zhDirectTimeAround
- 3个小时后
- 20分钟后
- 3小时20分钟后
- 3小时后

### DateTime
- 2022年07月01日 15点30分15秒
- 2022年07月01日 下午3点30分15秒
- 明年3月5号12点15分
- 2年后3月5号12点15分
- 下周六下午3点15分

### Period
- 7月1日至明年8月1日
- 明年7月1日至8月1日
- 明天到大后天
- 明天到后年7月1号
- 2002年3月3-5日
- 3月3日至5日
- 从下个月3号到廿五号
- 3个月后，从3号到五号
- 明年7月3号到五号
- 明年7月3号到七月五号
- 2022年7月3号到七月五号
- 3年后，7月3号到七月五号

- 下周一至周五
- 从下周一至下下周五
- 3周后的周一到周日

- 下午1点至3点
- 下午1:30 - 下午3点
- 下午1:30 - 上午3点

- 3月5日，下午1点到下午3点
- 3月5日下午1点到3月6日上午3点
- 明天下午1点45到后天早上3点
- 下周五下午3点到5点
- 下周五下午3点15到下下周日5点15分
- 十六年后，七月一日到七月廿一日

### 半
- 半年后10号
- 半个月后
- 半天后
- 半小时后
- 下午3点半
