import { CharStreams, CommonTokenStream} from 'antlr4ts';

import { TimeLexer } from './grammar/TimeLexer';
import { TimeParser } from './grammar/TimeParser';

export default class TimeAnalyzer {
  parser: any;
  tree: any;
  
  constructor(input: string) {
    const chars = CharStreams.fromString(input);
    const lexer = new TimeLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    this.parser = new TimeParser(tokens);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.program();
  }
}