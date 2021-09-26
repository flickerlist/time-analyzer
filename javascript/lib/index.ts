import { CharStreams, CommonTokenStream} from 'antlr4ts';

import { TimeLexer } from './grammar/TimeLexer';
import { TimeParser } from './grammar/TimeParser';
import { AnalyzerValue, AnalyzerValueArray } from './model';
import { TimeAnalyzerVisitor } from './visitor';

export default class TimeAnalyzer {
  parser: TimeParser;
  visitor: TimeAnalyzerVisitor;

  private value: AnalyzerValueArray;
  
  constructor(input: string) {
    const chars = CharStreams.fromString(input);
    const lexer = new TimeLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    this.parser = new TimeParser(tokens);

    this.visitor = new TimeAnalyzerVisitor();
    
    this.value = this.visitor.visit(this.parser.program()) as AnalyzerValueArray;

    this.value.values.forEach((item) => {
      item.resetMatchText(input);
    });
  }

  get values(): AnalyzerValue[] {
    return this.value?.values || [];
  }
}