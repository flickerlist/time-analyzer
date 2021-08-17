import { CharStreams, CommonTokenStream} from 'antlr4ts';

import { TimeLexer } from './grammar/TimeLexer';
import { ProgramContext, TimeParser } from './grammar/TimeParser';
import { TimeAnalyzerVisitor } from './visitor';

export default class TimeAnalyzer {
  parser: TimeParser;
  tree: ProgramContext;
  visitor: TimeAnalyzerVisitor;
  
  constructor(input: string) {
    const chars = CharStreams.fromString(input);
    const lexer = new TimeLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    this.parser = new TimeParser(tokens);
    this.tree = this.parser.program();

    this.visitor = new TimeAnalyzerVisitor();
    this.visitor.visit(this.tree);
  }
}