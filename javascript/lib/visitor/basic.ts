import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgramContext, StatementContext, StatementListContext } from "lib/grammar/TimeParser";
import { TimeParserVisitor } from "lib/grammar/TimeParserVisitor";

export abstract class BasicTimeAnalyzerVisitor extends AbstractParseTreeVisitor<AnalyzerValue> implements TimeParserVisitor<AnalyzerValue> {
  defaultResult: () => null;
}