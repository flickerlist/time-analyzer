abstract class AnalyzerValue {}

class DateValue extends AnalyzerValue {
  int year = 0;
  int month = 0;
  int day = 0;
}


class TimeValue extends AnalyzerValue {
  int hour = 0;
  int minute = 0;
  int second = 0;
}

class DateTimeValue extends AnalyzerValue {
  int year = 0;
  int month = 0;
  int day = 0;
  int hour = 0;
  int minute = 0;
  int second = 0;
}

class AnalyzerDateTime extends AnalyzerValue {
  DateTime dateTime;
  bool hasTime;

  AnalyzerDateTime(this.dateTime, {
    this.hasTime = true,
  });
}
