lexer grammar TimeLexer;

channels { ERROR }

//// en
EnMonthValue
    : J A N U A R Y | J A N '.'
    | F E B R U A R Y | F E B '.'
    | M A R C H | M A R '.'
    | A P R I L | A P R '.'
    | M A Y '.' | M A Y
    | J U N E | J U N '.'
    | J U L Y | J U L '.'
    | A U G U S T | A U G '.'
    | S E P T E M B E R | S E P '.'
    | O C T O B E R | O C T '.'
    | N O V E M B E R | N O V '.'
    | D E C E M B E R | D E C '.';
EnWeekValue
    : M O N D A Y | M O N '.'
    | T U E S D A Y | T U E S '.'
    | W E D N E S D A Y | W E D '.'
    | T H U R S D A Y | T H U R '.'
    | F R I D A Y | F R I '.'
    | S A T U R D A Y | S A T '.'
    | S U N D A Y | S U N '.'
    ;
EnDayValue            : [1-9][0-9]* (T H | S T | N D | R D);
EnNumberValue
    : Z E R O
    | O N E
    | T W O
    | T H R E E
    | F O U R
    | F I V E
    | S I X
    | S E V E N
    | E I G H T
    | N I N E
    | T E N
    | E L E V E N T
    | T W E L V E
    | T H I R T E E N
    | F O U R T E E N
    | F I F T E E N
    | S I X T E E N
    | S E V E N T E E N
    | E I G H T E E N
    | N I N E T E E N
    | T W E N T Y
    | T W E N T Y '-' O N E
    | T W E N T Y '-' T W O
    | T W E N T Y '-' T H R E E
    ;

EnAroundWord          
    : O F ' ' T H E ' ' F O L L O W I N G
    | L A S T
    | T H I S
    | N E X T;
EnAroundDayWord       
    : T H E ' ' D A Y ' ' B E F O R E ' ' Y E S T E R D A Y
    | T H E ' ' D A Y ' ' A F T E R ' ' T O M O R R O W
    | Y E S T E R D A Y
    | T O D A Y
    | T O M O R R O W;
EnBeforeWord          
    : B E F O R E
    | A G O;
EnAfterWord           
    : A F T E R
    | L A T E R;

EnYearWord            : Y E A R S?;
EnMonthWord           : M O N T H S?;
EnDayWord             : D A Y S?;
EnWeekWord            : W E E K S?;
EnHourWord            : H O U R S?;
EnMinuteWord          : M I N U T E S?;
EnSecondWord          : S E C O N D S?;


EnMorningWord         
    : A '.' M '.'? | A M
    | EnAtWord? M O R N I N G
    | EnAtWord? N O O N
    ;
EnAfternoonWord       
    : P '.' M '.'? | P M
    | EnAtWord? A F T E R N O O N
    | EnAtWord? E V E N I N G
    | EnAtWord? N I G H T
    ;
EnHourWholeWord
    : O F ' ' C L O C K
    | O ('???' | '\'') C L O C K
    ;
EnHalfPast            : H A L F ' ' P A S T;
EnHalf                : H A L F;

EnAtWord
    : ((I N) | (O N) | (A T)) ' ' (T H E ' ')?
    | O F
    | W H E N
    | W H I L E
    ;

EnAndWord             : A N D;
EnToWord              : T O;
EnFrom                : F R O M;
EnAn                  : A N?;

//// zh (cn && tw && hk)
fragment ZHNUMBERVALUE
    : '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' | '???'
    | '???' 
    | '???'
    ;
ZhValueWord           : ZHNUMBERVALUE+;
ZhAroundWord
    // used for 'month, week'
    : '??????' | '??????' | '???' | '???' | '???' | '??????' | '???' | '??????' | '???' 
    // use for 'year, day'
    | '??????' | '??????' | '???' | '???' | '???' | '???' | '??????'
    ;
ZhBeforeWord          : '??????' | '???';
ZhAfterWord           : '??????' | '??????' | '???' | '???';

ZhYearWord            : '???';
ZhMonthWord           : '???';
ZhCountMonth          : '??????';
ZhDayWord             : '???';
ZhDayWord_2           : '???' | '???';
ZhTian                : '???';
ZhWeekWord            : '???' | '???' | '?????????' | '??????';
ZhHourWord            : '???' | '???' | '???' | '???';
ZhHourWholeWord       : '???';
ZhCountHour           : '?????????' | '??????' | '?????????' | '??????';
ZhMinuteWord          : '???';
ZhCountMinute         : '??????' | '??????';
ZhSecondWord          : '???';
ZhCountSecond         : '??????' | '??????';
ZhHalf                : '???';

ZhMorningWord         : '??????' | '??????' | '??????' | '??????' | '??????'; // Useless
ZhAfternoonWord       : '??????' | '??????';

ZhToWord              : '???' | '???';
ZhAtWord              : '???' | '???';
ZhOf                  : '???';
ZhFrom                : '???';

//// common
YearNumber            : [1-9][0-9][0-9][0-9];
DateNumber            : [0-9]?[0-9];
NormalNumber          : [1-9][0-9]*;

MiddelConnectorWord   : '-';
MiddelConnectorCurve  : '~';
SlashConnectorWord    : '/';
TimeConnectorWord     : ':';
DateTimeConnectorWord : 'T';
Comma                 : ',' | '???';

//// useless words
NEWLINE               : '\r'? '\n' -> skip;
WS                    : [ \n\u000D] -> skip;
IGNORE_WORD           : .; // Ignore words, don't use `skip`

//// used for case-insensitive
fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];