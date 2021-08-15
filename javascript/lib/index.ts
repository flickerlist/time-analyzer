import * as antlr4 from 'antlr4';

import TimeLexer from './grammar/TimeLexer';
import TimeParser from './grammar/TimeParser';

export default class TimeParserEntry {
  parser: any;
  tree: any;
  
  constructor(input: string) {
    const chars = new antlr4.InputStream(input);
    const lexer = new TimeLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    this.parser = new TimeParser(tokens);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.program();
  }
}