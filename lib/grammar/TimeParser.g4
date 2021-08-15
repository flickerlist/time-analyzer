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
    : zh
    | en
    | std
    ;

//// std
std
    : stdDateTime
    | stdDate
    | stdTime
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

//// en
en
    : EnOf? enDateTime
    | EnOf? enDate
    | EnOf? enTime
    | EnOf? enDirectTimeAround
    ;

enDateTime
    : enDate enTime
    | enTime EnOf? enDate;

enDate
    : enDateNormal
    | enDateAround
    ;

enDateNormal
    : enMonthDay (Dot YearNumber)?
    ;

enDateAround
    // e.g.: April 5, next year
    : enMonthDay Dot? EnAroundWord EnYearWord                             # EnDateYearAroundAlias
    // e.g.: next year on April 5th
    | EnAroundWord EnYearWord EnOf enMonthDay                             # EnDateYearAroundAlias_2
    // 5th of next month
    | enDay EnOf EnAroundWord EnMonthWord                                 # EnDateMonthAroundAlias
    // e.g.: next April on the 5th
    | EnAroundWord EnMonthWord EnOf enDay                                 # EnDateMonthAroundAlias_2
    // e.g.: next day
    | EnAroundWord EnDayWord                                              # EnDateDayAroundAlias
    // e.g.: tomorrow
    | EnAroundDayWord                                                     # EnDateDayAroundAlias_2
    // e.g.: next friday
    | EnAroundWord? EnWeekValue                                           # EnDateWeekAroundAlias
    // e.g.: friday of next week
    | EnWeekValue EnOf EnAroundWord EnWeekWord                            # EnDateWeekAroundAlias_2

    // e.g.: April 5, 3 years later
    | enMonthDay Dot? stepValue EnYearWord enAroundMark                   # EnDateYearAroundStep
    // e.g.: April 5 after 3 years
    | enMonthDay Dot? enAroundMark stepValue EnYearWord                   # EnDateYearAroundStep_2
    // e.g.: 5th 3 months later
    | enDay Dot? stepValue EnMonthValue enAroundMark                      # EnDateMonthAroundStep
    // e.g.: 5th after 3 months
    | enDay Dot? enAroundMark stepValue EnMonthValue                      # EnDateMonthAroundStep
    // e.g.: 3 days later
    | stepValue EnDayWord enAroundMark                                    # EnDateDayAroundStep
    // e.g.: after 3 days
    | enAroundMark stepValue EnDayWord                                    # EnDateDayAroundStep_2
    // e.g.: friday, 3 weeks later
    | EnWeekValue Dot? stepValue EnWeekWord enAroundMark                  # EnDateWeekAroundStep
    // e.g.: friday, after 3 weeks
    | EnWeekValue Dot? enAroundMark stepValue EnWeekWord                  # EnDateWeekAroundStep_2
    ;

enMonthDay
    : EnMonthValue enDay
    | enDay EnOf EnMonthValue
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
    : enAroundMark stepValue EnHourWord (EnAnd stepValue EnMinuteWord)?         # EnTimeHourStep
    // e.g.: 3 hours and 30 minutes later
    | stepValue EnHourWord (EnAnd stepValue EnMinuteWord)? enAroundMark         # EnTimeHourStep_2
    // e.g.: after 30 minutes
    | enAroundMark stepValue EnMinuteWord                                       # EnTimeMinuteStep
    // e.g.: 30 minutes later
    | stepValue EnMinuteWord enAroundMark                                       # EnTimeMinuteStep_2
    ;

enAroundMark
    : EnBeforeWord
    | EnAfterWord
    ;

//// zh
zh
    : zhDateTime
    | zhDate
    | zhTime
    | zhDirectTimeAround
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
    | zhAroundAliasMark? (ZhWeekWord ZhOf)? ZhWeekWord (stepValue | ZhDayWord)                 # ZhDateWeekAroundAlias
    | stepValue ZhYearWord zhAroundStepMark zhDateMonthDay                  # ZhDateYearAroundStep
    | stepValue ZhCountMonth zhAroundStepMark zhDateDay                     # ZhDateMonthAroundStep
    | stepValue (ZhTian | ZhDayWord) zhAroundStepMark                       # ZhDateDayAroundStep
    | stepValue ZhWeekWord zhAroundStepMark ZhOf? ZhWeekWord zhWeekDayValue       # ZhDateWeekAroundStep
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
    | Dot
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
    | EnOf
    | EnAnd
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
