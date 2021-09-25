# Time analyzerr
> analyzer, extract the time text from any string, and convert it to standard time.

## Usage
### JavaScript

### Dart
## Support
> Support date & time format.
### Standard
- 2021-07-01
- 2021/07/01
- 2021-7-1
- 2021/7/1
- 21-7-1
- 21/7/1
- 07-01
- 7/1
- 15:30
- 15:30:15
- 2021-07-01 15:30
- 2021-07-01 15:30:15
- 2021-07-01T15:30:15
- 2021-07-01T15:30:15+0800

#### Period
- 2021-07-01~2021-07-05
- 07-01~07-05
- 07-01 15:30~16:30
- 07-01 15:30-16:30
- 15:30-16:30

### English
> `before` equals to `ago`

#### Date
- March 3, 2002
- August 21th
- Nov. 25, 2010
- 29th of August
- 25th November, 2010

- Mon.
- Friday
- next friday

- march 5th of the following year
- March 5 next year
- next March 5th
- Next month on the 10th
- 10th of next month

- tomorrow
- the day after tomorrow
- today
- yesterday
- the day before yesterday


- 3 years later on April 5
- April 5, 3 years later
- 5th after 3 months

- 3 months later
- 3 days /Weeks/Days/Hours/Minutes ago

#### Time
- 1pm
- at 4 o’clock
- at 4

#### DateTime
- March 3, 2020, 3 p.m.
- 6:00 PM on Wednesday evening on Sep. 10th, 2020
- 6:00 PM on May 20, 2020
- on Saturday , September 10th, at 5:50 p.m.
- at 5:50 on Saturday afternoon

#### Period
- March 3-5, 2002
- March 3 to 5
- March 4 to April 4th
- Next Mon.-Fri.
- Next Monday to Next Friday

- 1pm to 3pm
- 1:30pm - 3pm

- March 5th, 1 p.m. to 3 p.m.
- March 5th at 1 p.m. to March 6th at 3 p.m.
- 1pm tomorrow to 3pm the day after tomorrow

### Chinese Simple
> `日` equals to `号`

#### Date
> zhDateNormal
- 2021年07月01日
- 2021年07月01号
- 2021年7月1日
- 7月1日


> ZhDate[Year/Month/Day/Week]AroundAlias
- 明年3月5号
- 下下个月10号
- 后天
- 本周五
- 下下周6
- 下下周的周六
- 这个星期天
- 周日

> ZhDate[Year/Month/Day/Week]AroundStep
- 2年后3月5号
- 3个月后10号
- 3个星期后的周五
- 3周后周五
- 3天后

#### Time
> zhTimeNormal
- 15点30分
- 15点30
- 15点30分15秒
- 15点30分15秒
- 下午3点30分
- 凌晨3点

> zhDirectTimeAround
- 3个小时后
- 20分钟后
- 3小时20分钟后
- 3小时后

#### DateTime
- 2021年07月01日 15点30分15秒
- 2021年07月01日 下午3点30分15秒
- 明年3月5号12点15分
- 2年后3月5号12点15分
- 下周六下午3点15分

#### Period
- 2002年3月3-5日
- 3月3日至5日
- 3月4日至4月4日
- 下周一至周五
- 下周一至下周五

- 下午1点至3点
- 下午1:30 - 下午3点

- 3月5日，下午1点到下午3点
- 3月5日下午1点到3月6日下午3点
- 明天下午1点到后天下午3点
