import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AnalyzerValue } from "../model";
import { TimeParserVisitor } from "../grammar/TimeParserVisitor";

export abstract class BasicTimeAnalyzerVisitor extends AbstractParseTreeVisitor<AnalyzerValue> implements TimeParserVisitor<AnalyzerValue> {
  defaultResult = () => null;
}