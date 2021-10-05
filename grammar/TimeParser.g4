parser grammar TimeParser;

options {
    tokenVocab=TimeLexer;
}

program
    : statementList? EOF
    ;

statementList
    : (statement | uselessWords)+
    ;

statement
    : enAt? enPeriod
    | zhAt? zhPeriod

    | enAt? enDateTime
    | zhAt? zhDateTime
    | enAt? stdDateTime

    | enAt? enDate
    | zhAt? zhDate

    | enAt? enTime
    | zhAt? zhTime

    | enAt? enDirectTimeAround
    | zhAt? zhDirectTimeAround
    ;

//// std
stdPeriod
    : stdDate stdPeriodTo stdDate                            # StdPeriodDateToDate
    | stdDateTime stdPeriodTo stdDateTime                    # StdPeriodDateTimeToDateTime
    | stdDateTime stdPeriodTo stdTime                        # StdPeriodDateTimeToTime
    | stdTime stdPeriodTo stdTime Comma? stdDate?            # StdPeriodTimeToTime
    ;

stdDateTime
    : stdDate stdDateTimeConnector stdTime ;

stdDate
    : (yearValue stdDateConnector)? DateNumber stdDateConnector DateNumber;

stdTime
    : DateNumber stdTimeConnector DateNumber (stdTimeConnector DateNumber)?;

stdDateConnector
    : MiddelConnectorWord
    | SlashConnectorWord
    ;

stdTimeConnector
    : TimeConnectorWord
    ;

stdDateTimeConnector
    : DateTimeConnectorWord?
    ;

stdPeriodTo
    : MiddelConnectorWord
    | MiddelConnectorCurve
    ;

//// en
enPeriod
    : enPeriodWeek                                              # EnPeriodWeekDayNode 
    // e.g.: March 3rd-5th, 2002 | March 3-5, 2002 | March 3rd to 5th, 2002 | 3rd to 5th of next month | next month, on the 3-5
    | EnFrom? (
        (enMonth Comma? enAt? enDay enPeriodTo enDay)
        | (enDay enPeriodTo enDay Comma? enAt? enMonth)
      ) Comma? enAt? enYear?  # EnPeriodMonthDayToMonthDay
    
    | EnFrom? enDateTime Comma? enAt? enPeriodTo enDateTime     # EnPeriodDateTimeToDateTime
    | EnFrom? enDateTime Comma? enAt? enPeriodTo enTime         # EnPeriodDateTimeToTime
    | EnFrom? enDate Comma? enAt? enPeriodTo enDate             # EnPeriodDateToDate
    | EnFrom? enTime Comma? enAt? enPeriodTo enTime (Comma? enAt? enDate)?  # EnPeriodTimeToTime
    ;

enPeriodWeek
    // e.g.: Mon.-Fri., after 3 weeks | after 3 weeks, from Mon.-Fri.
    : (
        (EnFrom? EnWeekValue enPeriodTo EnWeekValue Comma? enAt? enStepAliasMark numberValue EnWeekWord)
        | (enStepAliasMark numberValue EnWeekWord Comma? enAt? EnWeekValue enPeriodTo EnWeekValue)
      )  # EnPeriodWeek_1
    // e.g.: Next Mon.-Fri. | From this Mon. to next Fri. | From Mon.-Fri. of next week
    | (EnFrom? 
        (EnWeekValue enPeriodTo EnWeekValue Comma? enAt? EnAroundWord EnWeekWord)
        | (EnAroundWord? EnWeekValue enPeriodTo EnAroundWord? EnWeekValue)
      )  # EnPeriodWeek_2
    ;

enDateTime
    : enDate Comma? enAt? enTime
    | enTime Comma? enAt? enDate (EnAfternoonWord | EnMorningWord)?
    ;

enDate
    : enDateAround
    | enDateNormal
    | stdDate
    ;

enDateNormal
    : enMonthDay Comma? enAt? enYear?
    | enYear Comma? enAt? enMonthDay
    | enWeekDay
    ;

enDateAround
    // e.g.: next day
    : EnAroundWord EnDayWord                   # EnDateDayAroundAlias
    // e.g.: tomorrow
    | EnAroundDayWord                          # EnDateDayAroundAlias_2
    // e.g.: 3 days later | after 3 days
    | (
        (numberValue EnDayWord enStepAliasMark)
        | (enStepAliasMark numberValue EnDayWord)
      )  # EnDateDayAroundStep
    ;

enWeekDay
    // e.g.: next friday | friday of next week
    : (
        (EnAroundWord? EnWeekValue)
        | (EnWeekValue Comma? enAt? EnAroundWord EnWeekWord)
      )  # EnDateWeekAroundAlias
    // e.g.: friday, 3 weeks later | friday, after 3 weeks
    | (
        (EnWeekValue Comma? numberValue EnWeekWord enStepAliasMark)
        | (EnWeekValue Comma? enStepAliasMark numberValue EnWeekWord)
      )  # EnDateWeekAroundStep
    ;

enMonthDay
    : enMonth Comma? enAt? enDay
    | enDay Comma? enAt? enMonth
    ;

enYear
    : EnAroundWord EnYearWord
    | numberValue EnYearWord enStepAliasMark
    | yearValue
    ;

enMonth
    // e.g.: April | next April
    : EnAroundWord? EnMonthValue
    // e.g.: next month
    | EnAroundWord EnMonthWord
    // e.g.: 3 months later | after 3 months
    | (
        (numberValue EnMonthWord enStepAliasMark)
        | (enStepAliasMark numberValue EnMonthWord)
    )
    ;

enDay
    : EnDayValue
    | DateNumber
    ;

enTime
    : (
        (DateNumber EnHourWholeWord (EnAfternoonWord | EnMorningWord)?)
        | (DateNumber (EnAfternoonWord | EnMorningWord))
      )  # EnTimeOClock
    | stdTime (EnAfternoonWord | EnMorningWord)?                                   # EnTimeNormal
    ;

enDirectTimeAround
    // e.g.: after 3 hours and 30 minutes | 3 hours and 30 minutes later
    : (
        (enStepAliasMark numberValue EnHourWord (EnAndWord numberValue EnMinuteWord)?)
        | (numberValue EnHourWord (EnAndWord numberValue EnMinuteWord)? enStepAliasMark)
      )  # EnTimeHourStep
    // e.g.: after 30 minutes | 30 minutes later
    | (
        (enStepAliasMark numberValue EnMinuteWord)
        | (numberValue EnMinuteWord enStepAliasMark)
      )  # EnTimeMinuteStep
    ;

enStepAliasMark
    : EnBeforeWord
    | EnAfterWord
    ;

enPeriodTo
    : EnToWord
    | stdPeriodTo
    ;

enAt
    : EnAtWord
    ;

//// zh
zhPeriod
    : zhPeriodWeek                         # ZhPeriodWeekDayNode
    // e.g.: 从下个月3号到五号 | 3个月后，从3号到五号 | 3月3号到5号
    | (zhYear Comma?)? ZhFrom? zhMonth Comma? ZhFrom? zhDay zhPeriodTo zhDay  # ZhPeriodMonthDayToMonthDay

    | ZhFrom? zhDate zhPeriodTo zhDate             # ZhPeriodDateToDate
    | ZhFrom? zhDateTime zhPeriodTo zhDateTime     # ZhPeriodDateTimeToTime
    | ZhFrom? zhDateTime zhPeriodTo zhTime         # ZhPeriodDateTimeToTime
    | ZhFrom? zhTime zhPeriodTo zhTime             # ZhPeriodTimeToTime
    ;

zhPeriodWeek
    // e.g.: 3周后的周一到周五 | 周一到周五，三周后
    : (
        (zhNumberValue ZhWeekWord zhStepAliasMark Comma? ZhOf? zhWeekValue zhPeriodTo zhWeekValue)
        | (ZhFrom? zhWeekValue zhPeriodTo zhWeekValue Comma? zhNumberValue ZhWeekWord zhStepAliasMark)
      ) # ZhPeriodWeek_1
    // e.g.: 下周一到下下周五 | 下周一到周五
    | ZhFrom? zhAroundAliasMark zhWeekValue zhPeriodTo zhAroundAliasMark? zhWeekValue  # ZhPeriodWeek_2
    ;

zhDateTime
    // e.g.: 2021年7月1日， 3点15分
    : zhDate Comma? zhTime
    // e.g.: 3点15分，7月1号下午
    | zhTime Comma? zhDate zhTimePeriodAliasMark?
    ;

zhDate
    : zhDateAround
    | zhDateNormal
    | stdDate
    ;

zhDateNormal
    : zhMonthDay Comma? zhYear?
    | zhYear Comma? zhMonthDay
    | zhWeekDay
    ;

zhDateAround
    // e.g.: 明天, 大后天, 前天
    : zhAroundAliasMark (ZhTian | ZhDayWord)   # ZhDateDayAroundAlias
    // e.g.: 3天后
    | zhNumberValue (ZhTian | ZhDayWord) zhStepAliasMark                         # ZhDateDayAroundStep
    ;

zhWeekDay
    // e.g.: 下周五
    : zhAroundAliasMark zhWeekValue
    // e.g.: 三周后的周五
    | zhNumberValue ZhWeekWord ZhAfterWord ZhOf? zhWeekValue
    ;

zhMonthDay
    : zhMonth zhDay
    ;

zhYear
    // e.g.: 大前年, 去年
    : zhAroundAliasMark ZhYearWord zhMonthDay
    // e.g.: 3年前
    | zhNumberValue ZhYearWord zhStepAliasMark
    // 2021年 | 二零二一年
    | zhYearValue ZhYearWord
    ;

zhMonth
    // e.g.: 3月, 五月
    : zhDateValue ZhMonthWord
    // e.g.: 下个月, 上上月
    | zhAroundAliasMark (ZhCountMonth | ZhMonthWord)
    // e.g.: 3个月后
    | zhNumberValue ZhCountMonth zhStepAliasMark
    ;

zhDay
    : zhDateValue (ZhDayWord | ZhDayWord_2)?
    ;

// time
zhTime
    : zhTimeNormal
    | stdTime
    ;

zhTimeNormal
    //: e.g.: 上午3点20,
    : zhTimePeriodAliasMark? zhDateValue zhHourMark ZhHourWholeWord? (zhDateValue zhMinuteMark? (zhDateValue zhSecondMark?)?)?
    ;

zhTimePeriodAliasMark
    : ZhAfternoonWord
    | ZhMorningWord
    ;

zhHourMark
    : ZhHourWord
    | TimeConnectorWord
    ;

zhMinuteMark
    : ZhMinuteWord
    | TimeConnectorWord
    ;

zhSecondMark
    : ZhSecondWord
    ;

// time: direct means no date
zhDirectTimeAround
    // e.g.: 三小时30分钟后
    : zhNumberValue ZhCountHour (zhNumberValue ZhCountMinute)? zhStepAliasMark     # ZhTimeHourStep
    // e.g.: 30分钟后
    | zhNumberValue ZhCountMinute zhStepAliasMark                                # ZhTimeMinuteStep
    ;

zhNumberValue
    : ZhValueWord
    | numberValue
    ;

zhWeekValue
    : ZhWeekWord (zhNumberValue | ZhTian | ZhDayWord)
    ;

zhYearValue
    : ZhValueWord
    | yearValue
    ;

zhDateValue
    : DateNumber
    | ZhValueWord
    ;

zhStepAliasMark
    : ZhBeforeWord
    | ZhAfterWord
    ;

zhAroundAliasMark
    : ZhAroundWord
    | ZhBeforeWord
    | ZhAfterWord
    ;

zhPeriodTo
    : ZhToWord
    | stdPeriodTo
    ;

zhAt
    : ZhAtWord
    ;

//// common
yearValue
    : YearNumber
    | DateNumber
    ;

numberValue 
    : YearNumber
    | DateNumber
    | NormalNumber
    ;
    

//// useless words
uselessWords
    : stdUselessWords
    | enUselessWords
    | zhUselessWords
    ;

stdUselessWords
    : MiddelConnectorWord
    | SlashConnectorWord
    | TimeConnectorWord
    | DateTimeConnectorWord
    | Comma
    ;

enUselessWords
    : EnMonthWord
    | EnWeekValue
    | EnDayValue
    | EnAroundWord
    | EnAroundDayWord
    | EnBeforeWord
    | EnAfterWord
    | EnYearWord
    | EnMonthWord
    | EnDayWord
    | EnWeekWord
    | EnHourWord
    | EnMinuteWord
    | EnSecondWord
    | EnMorningWord
    | EnAfternoonWord
    | EnHourWholeWord
    | EnAtWord
    | EnAndWord
    | EnToWord
    | EnFrom
    ;

zhUselessWords
    : ZhValueWord
    | ZhAroundWord
    | ZhBeforeWord
    | ZhAfterWord
    | ZhYearWord
    | ZhMonthWord
    | ZhCountMonth
    | ZhDayWord
    | ZhDayWord_2
    | ZhTian
    | ZhWeekWord
    | ZhHourWord
    | ZhHourWholeWord
    | ZhCountHour
    | ZhMinuteWord
    | ZhCountMinute
    | ZhSecondWord
    | ZhCountSecond
    | ZhMorningWord
    | ZhAfternoonWord
    | ZhOf
    | ZhFrom
    ;
