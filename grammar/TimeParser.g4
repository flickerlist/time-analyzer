parser grammar TimeParser;

options {
    tokenVocab=TimeLexer;
}

program
    : statementList? EOF
    ;

statementList
    : (statement uselessWords?)+
    ;

statement
    : zhAt? zhPeriodDateTime
    | enAt? enPeriodDateTime
    | enAt? stdPeriodDateTime

    | zhAt? zhDateTime
    | enAt? enDateTime
    | enAt? stdDateTime

    | zhAt? zhDate
    | enAt? enDate
    | enAt? stdDate

    | zhAt? zhTime
    | enAt? enTime
    | enAt? stdTime

    | zhAt? zhDirectTimeAround
    | enAt? enDirectTimeAround
    ;

//// std
stdPeriodDateTime
    : stdDate stdPeriodTo stdDate             # StdPeriodDateToDate
    | stdDateTime stdPeriodTo stdDateTime     # StdPeriodDateTimeToDateTime
    | stdDateTime stdPeriodTo stdTime         # StdPeriodDateTimeToTime
    | stdTime stdPeriodTo stdTime             # StdPeriodTimeToTime
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
enPeriodDateTime
    : enDate enPeriodTo enDate             # EnPeriodDateToDate
    | enDateTime enPeriodTo enDateTime     # EnPeriodDateTimeToTime
    | enDateTime enPeriodTo enTime         # EnPeriodDateTimeToTime
    | enTime enPeriodTo enTime             # EnPeriodTimeToTime
    ;

enDateTime
    : enDate enTime
    | enTime enAt? enDate;

enDate
    : enDateNormal
    | enDateAround
    ;

enDateNormal
    : enMonthDay (Comma YearNumber)?
    ;

enDateAround
    // e.g.: April 5, next year
    : enMonthDay Comma? EnAroundWord EnYearWord                     # EnDateYearAroundAlias
    // e.g.: next year on April 5th
    | EnAroundWord EnYearWord enAt enMonthDay                       # EnDateYearAroundAlias_2
    // e.g.: 5th of next month
    | enDay enAt EnAroundWord EnMonthWord                           # EnDateMonthAroundAlias
    // e.g.: next month on the 5th
    | EnAroundWord EnMonthWord enAt enDay                           # EnDateMonthAroundAlias_2
    // e.g.: 5th of next April
    | enDay enAt EnAroundWord EnMonthValue                          # EnDateMonthAroundAlias_3
    // e.g.: next April on the 5th
    | EnAroundWord EnMonthValue enAt enDay                          # EnDateMonthAroundAlias_4
    // e.g.: next day
    | EnAroundWord EnDayWord                                        # EnDateDayAroundAlias
    // e.g.: tomorrow
    | EnAroundDayWord                                               # EnDateDayAroundAlias_2
    // e.g.: next friday
    | EnAroundWord? EnWeekValue                                     # EnDateWeekAroundAlias
    // e.g.: friday of next week
    | EnWeekValue enAt EnAroundWord EnWeekWord                      # EnDateWeekAroundAlias_2

    // e.g.: April 5, 3 years later
    | enMonthDay Comma? stepValue EnYearWord enStepAliasMark        # EnDateYearAroundStep
    // e.g.: April 5 after 3 years
    | enMonthDay Comma? enStepAliasMark stepValue EnYearWord        # EnDateYearAroundStep_2
    // e.g.: 5th 3 months later
    | enDay Comma? stepValue EnMonthValue enStepAliasMark           # EnDateMonthAroundStep
    // e.g.: 5th after 3 months
    | enDay Comma? enStepAliasMark stepValue EnMonthValue           # EnDateMonthAroundStep
    // e.g.: 3 days later
    | stepValue EnDayWord enStepAliasMark                           # EnDateDayAroundStep
    // e.g.: after 3 days
    | enStepAliasMark stepValue EnDayWord                           # EnDateDayAroundStep_2
    // e.g.: friday, 3 weeks later
    | EnWeekValue Comma? stepValue EnWeekWord enStepAliasMark       # EnDateWeekAroundStep
    // e.g.: friday, after 3 weeks
    | EnWeekValue Comma? enStepAliasMark stepValue EnWeekWord       # EnDateWeekAroundStep_2
    ;

enMonthDay
    : EnMonthValue enDay
    | enDay enAt EnMonthValue
    ;

enDay
    : EnDayValue
    | DateNumber
    ;

enTime
    : stdTime (EnAfternoonWord | EnMorningWord)?
    | DateNumber EnHourWholeWord
    ;

enDirectTimeAround
    // e.g.: after 3 hours and 30 minutes
    : enStepAliasMark stepValue EnHourWord (EnAndWord stepValue EnMinuteWord)?     # EnTimeHourStep
    // e.g.: 3 hours and 30 minutes later
    | stepValue EnHourWord (EnAndWord stepValue EnMinuteWord)? enStepAliasMark     # EnTimeHourStep_2
    // e.g.: after 30 minutes
    | enStepAliasMark stepValue EnMinuteWord                                       # EnTimeMinuteStep
    // e.g.: 30 minutes later
    | stepValue EnMinuteWord enStepAliasMark                                       # EnTimeMinuteStep_2
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
zhPeriodDateTime
    : zhDate zhPeriodTo zhDate             # ZhPeriodDateToDate
    | zhDateTime zhPeriodTo zhDateTime     # ZhPeriodDateTimeToTime
    | zhDateTime zhPeriodTo zhTime         # ZhPeriodDateTimeToTime
    | zhTime zhPeriodTo zhTime             # ZhPeriodTimeToTime
    ;

zhDateTime
    : zhDate zhTime
    ;

zhDate
    : zhDateNormal
    | zhDateAround
    ;

zhDateNormal
    : (yearValue ZhYearWord)? zhDateMonthDay
    ;

zhDateAround
    : zhAroundAliasMark ZhYearWord zhDateMonthDay                         # ZhDateYearAroundAlias
    | zhAroundAliasMark ZhCountMonth zhDateDay                            # ZhDateMonthAroundAlias
    | zhAroundAliasMark (ZhTian | ZhDayWord)                              # ZhDateDayAroundAlias
    | zhAroundAliasMark? (ZhWeekWord ZhOf)? ZhWeekWord zhWeekDayValue     # ZhDateWeekAroundAlias
    | stepValue ZhYearWord zhAroundStepMark zhDateMonthDay                # ZhDateYearAroundStep
    | stepValue ZhCountMonth zhAroundStepMark zhDateDay                   # ZhDateMonthAroundStep
    | stepValue (ZhTian | ZhDayWord) zhAroundStepMark                     # ZhDateDayAroundStep
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
    | NormaNumber
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
