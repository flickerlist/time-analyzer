import { CharStreams, CommonTokenStream} from 'antlr4ts';

import { TimeLexer } from './grammar/TimeLexer';
import { TimeParser } from './grammar/TimeParser';
import { AnalyzerValue, AnalyzerValueArray } from './model';
import { TimeAnalyzerVisitor } from './visitor';

export * from './model';

export class TimeAnalyzer {
  parser: TimeParser;
  visitor: TimeAnalyzerVisitor;

  private value: AnalyzerValueArray;
  
  constructor(input: string) {
    if (!input) {
      return;
    }
    const chars = CharStreams.fromString(input);
    const lexer = new TimeLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    this.parser = new TimeParser(tokens);

    // hide error while parsing.
    this.parser.removeErrorListeners();

    this.visitor = new TimeAnalyzerVisitor();
    
    this.value = this.visitor.visit(this.parser.program()) as AnalyzerValueArray;


    if (this.value) {
      this.value.values.forEach((item) => {
        item.resetMatchText(input);
      });
    }
  }

  get values(): AnalyzerValue[] {
    return this.value
      ? (this.value.values || [])
      : [];
  }
}