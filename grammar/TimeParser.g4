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
    // e.g.: March 3rd-5th, 2002 | March 3-5, 2002 | March 3rd to 5th, 2002 | 3rd to 5th of next month | next month, on the 3-5 | March 5 to April 5, 2022 | March 5 to April 5, next year
    | EnFrom? (
        (enMonth Comma? enAt? enDay enPeriodTo enMonth? enDay)
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
    : EnAroundWord EnDayWord                          # EnDateDayAroundAlias
    // e.g.: tomorrow
    | EnAroundDayWord                                 # EnDateDayAroundAlias_2
    // e.g.: 3 days later | after 3 days
    | (
        (numberValue EnDayWord enStepAliasMark)
        | (enStepAliasMark numberValue EnDayWord)
      )  # EnDateDayAroundStep
    // e.g.: half a month later
    | EnHalf EnAn EnMonthWord  enStepAliasMark     # EnDateDayAroundHalfMonth
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
    // e.g.: half a year later
    | EnHalf EnAn EnYearWord enStepAliasMark
    ;

enDay
    : EnDayValue
    | DateNumber
    ;

enTime
    // e.g.: 7 o'clock | seven p.m. | 7 p.m.
    : (
        (enTimeValue EnHourWholeWord (EnAfternoonWord | EnMorningWord)?)
        | (enTimeValue (EnAfternoonWord | EnMorningWord))
      )  # EnTimeOClock
    | stdTime (EnAfternoonWord | EnMorningWord)?                    # EnTimeStdNormal
    // e.g.: half past seven p.m.
    | EnHalfPast enTimeValue (EnAfternoonWord | EnMorningWord)?     # EnTimeHalf
    ;

enDirectTimeAround
    // e.g.: after 3 hours and 30 minutes | 3 hours and 30 minutes later
    : (
        (enStepAliasMark numberValue EnHourWord (EnAndWord numberValue EnMinuteWord)?)
        | (numberValue EnHourWord (EnAndWord numberValue EnMinuteWord)? enStepAliasMark)
      )  # EnDirectTimeHourStep
    // e.g.: after 30 minutes | 30 minutes later
    | (
        (enStepAliasMark numberValue EnMinuteWord)
        | (numberValue EnMinuteWord enStepAliasMark)
      )  # EnDirectTimeMinuteStep
    // e.g.: half a day later
    | EnHalf EnAn EnDayWord enStepAliasMark           # EnDirectTimeHalfDayStep
    // e.g.: half an hour later
    | EnHalf EnAn EnHourWord enStepAliasMark     # EnDirectTimeHalfHourStep
    ;

enTimeValue
    : DateNumber
    | EnNumberValue
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
    // e.g.: 从下个月3号到五号 | 明年7月3号到五号 | 3个月后，从3号到五号 | 3月3号到5号 | 明年7月3号到七月五号 | 3年后，7月3号到七月五号
    | (zhYear Comma?)? ZhFrom? zhMonth Comma? ZhFrom? zhDay zhPeriodTo zhMonth? zhDay  # ZhPeriodMonthDayToMonthDay

    | ZhFrom? zhDate zhPeriodTo zhDate             # ZhPeriodDateToDate
    | ZhFrom? zhDateTime zhPeriodTo zhDateTime     # ZhPeriodDateTimeToDateTime
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
    : zhYear Comma? zhMonthDay
    | zhMonthDay Comma? zhYear?
    | zhWeekDay
    ;

zhDateAround
    // e.g.: 明天, 大后天, 前天
    : zhAroundAliasMark (ZhTian | ZhDayWord)                    # ZhDateDayAroundAlias
    // e.g.: 3天后
    | zhNumberValue (ZhTian | ZhDayWord) zhStepAliasMark        # ZhDateDayAroundStep
    /// e.g.: 半个月后
    | ZhHalf ZhCountMonth zhStepAliasMark                       # ZhDateDayAroundHalf
    ;

zhWeekDay
    // e.g.: 三周后的周五
    : zhNumberValue ZhWeekWord zhStepAliasMark ZhOf? zhWeekValue
    // e.g.: 下周五
    | zhAroundAliasMark? ZhWeekWord? ZhOf? zhWeekValue
    ;

zhMonthDay
    : zhMonth zhDay
    ;

zhYear
    // e.g.: 大前年, 去年
    : zhAroundAliasMark ZhYearWord
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
    // e.g.: 半年后
    | ZhHalf ZhYearWord zhStepAliasMark
    ;

zhDay
    // e.g.: 三号 | 5号
    : zhDateValue (ZhDayWord | ZhDayWord_2)?
    ;

// time
zhTime
    : zhTimeNormal
    | stdTime
    ;

zhTimeNormal
    //: e.g.: 上午3点20 | 上午3点半
    : zhTimePeriodAliasMark? zhNumberValue zhHourMark ZhHourWholeWord?
      (ZhHalf 
      | (zhNumberValue zhMinuteMark? (zhNumberValue zhSecondMark?)?)
      )?
    ;

// time: direct means no date
zhDirectTimeAround
    // e.g.: 三小时30分钟后
    : zhNumberValue ZhCountHour (zhNumberValue ZhCountMinute)? zhStepAliasMark   # ZhDirectTimeHourStep
    // e.g.: 30分钟后
    | zhNumberValue ZhCountMinute zhStepAliasMark                                # ZhDirectTimeMinuteStep
    // e.g.: 半天后
    | ZhHalf (ZhDayWord | ZhTian) zhStepAliasMark                                # ZhDirectTimeHalfDayStep
    // e.g.: 半个小时后
    | ZhHalf ZhCountHour zhStepAliasMark                                         # ZhDirectTimeHalfHourStep
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

// marks
zhStepAliasMark
    : ZhBeforeWord
    | ZhAfterWord
    ;

zhAroundAliasMark
    : ZhAroundWord
    | ZhBeforeWord
    | ZhAfterWord
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
    | IGNORE_WORD
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
    | EnNumberValue
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
    | EnHalfPast
    | EnHalf
    | EnAn
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
    | ZhHalf
    ;
