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
        (EnFrom? EnWeekValue enPeriodTo EnWeekValue Comma? enAt? enStepAliasMark stepValue EnWeekWord)
        | (enStepAliasMark stepValue EnWeekWord Comma? enAt? EnWeekValue enPeriodTo EnWeekValue)
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
        (stepValue EnDayWord enStepAliasMark)
        | (enStepAliasMark stepValue EnDayWord)
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
        (EnWeekValue Comma? stepValue EnWeekWord enStepAliasMark)
        | (EnWeekValue Comma? enStepAliasMark stepValue EnWeekWord)
      )  # EnDateWeekAroundStep
    ;

enMonthDay
    : enMonth Comma? enAt? enDay
    | enDay Comma? enAt? enMonth
    ;

enYear
    : EnAroundWord EnYearWord
    | stepValue EnYearWord enStepAliasMark
    | yearValue
    ;

enMonth
    // e.g.: April | next April
    : EnAroundWord? EnMonthValue
    // e.g.: next month
    | EnAroundWord EnMonthWord
    // e.g.: 3 months later | after 3 months
    | (
        (stepValue EnMonthWord enStepAliasMark)
        | (enStepAliasMark stepValue EnMonthWord)
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
        (enStepAliasMark stepValue EnHourWord (EnAndWord stepValue EnMinuteWord)?)
        | (stepValue EnHourWord (EnAndWord stepValue EnMinuteWord)? enStepAliasMark)
      )  # EnTimeHourStep
    // e.g.: after 30 minutes | 30 minutes later
    | (
        (enStepAliasMark stepValue EnMinuteWord)
        | (stepValue EnMinuteWord enStepAliasMark)
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
    : zhDate zhPeriodTo zhDate             # ZhPeriodDateToDate
    | zhDateTime zhPeriodTo zhDateTime     # ZhPeriodDateTimeToTime
    | zhDateTime zhPeriodTo zhTime         # ZhPeriodDateTimeToTime
    | zhTime zhPeriodTo zhTime             # ZhPeriodTimeToTime
    ;

zhDateTime
    : zhDate zhTime
    ;

zhDate
    : zhDateAround
    | zhDateNormal
    ;

zhDateNormal
    : (yearValue ZhYearWord)? zhDateMonthDay
    ;

zhDateAround
    : zhAroundAliasMark ZhYearWord zhDateMonthDay                             # ZhDateYearAroundAlias
    | zhAroundAliasMark ZhCountMonth zhDateDay                                # ZhDateMonthAroundAlias
    | zhAroundAliasMark (ZhTian | ZhDayWord)                                  # ZhDateDayAroundAlias
    | zhAroundAliasMark? (ZhWeekWord ZhOf)? ZhWeekWord zhWeekDayValue         # ZhDateWeekAroundAlias
    | stepValue ZhYearWord zhAroundStepMark zhDateMonthDay                    # ZhDateYearAroundStep
    | stepValue ZhCountMonth zhAroundStepMark zhDateDay                       # ZhDateMonthAroundStep
    | stepValue (ZhTian | ZhDayWord) zhAroundStepMark                         # ZhDateDayAroundStep
    | stepValue ZhWeekWord zhAroundStepMark ZhOf? ZhWeekWord zhWeekDayValue   # ZhDateWeekAroundStep
    ;

zhDateMonthDay
    : zhDateValue ZhMonthWord zhDateDay
    ;

zhDateDay
    : zhDateValue zhMonthDayMark?
    ;

zhWeekDayValue
    : zhDateValue
    | ZhDayWord
    | ZhTian
    ;

zhMonthDayMark
    : ZhDayWord
    | ZhDayWord_2
    ;

zhAroundAliasMark
    : ZhAroundWord
    | ZhBeforeWord
    | ZhAfterWord
    ;

// time
zhTime
    : zhTimeNormal
    ;

zhTimeNormal
    : zhTimePeriodAliasMark? zhDateValue zhHourMark zhDateValue zhMinuteMark? (zhDateValue zhSecondMark)?
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
    : zhDateValue ZhCountHour (zhDateValue ZhCountMinute)? zhAroundStepMark     # ZhTimeHourStep
    // e.g.: 30分钟后
    | zhDateValue ZhCountMinute zhAroundStepMark                                # ZhTimeMinuteStep
    ;

zhDateValue
    : DateNumber
    | ZhValueWord
    ;

zhAroundStepMark
    : ZhBeforeWord
    | ZhAfterWord
    ;

zhPeriodTo
    : ZhToWord
    | stdPeriodTo
    ;

zhAt
    : ZhAtWord
    ;

// common
yearValue
    : YearNumber
    | DateNumber
    ;

stepValue 
    : YearNumber
    | DateNumber
    | NormalNumber
    ;
    

// useless words
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
    | ZhCountHour
    | ZhMinuteWord
    | ZhCountMinute
    | ZhSecondWord
    | ZhCountSecond
    | ZhMorningWord
    | ZhAfternoonWord
    | ZhOf
    ;
