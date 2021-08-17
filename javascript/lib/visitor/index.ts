import { ProgramContext, StatementListContext, StatementContext } from "lib/grammar/TimeParser";
import { EnTimeAnalyzerVisitor } from "./en";

export class TimeAnalyzerVisitor extends EnTimeAnalyzerVisitor {
  visitProgram?: (ctx: ProgramContext) => AnalyzerValue;
  visitStatementList?: (ctx: StatementListContext) => AnalyzerValue;
  visitStatement?: (ctx: StatementContext) => AnalyzerValue;
}