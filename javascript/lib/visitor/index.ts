import { ProgramContext, StatementListContext, StatementContext } from "../grammar/TimeParser";
import { AnalyzerValue, AnalyzerValueArray } from "../model";
import { EnTimeAnalyzerVisitor } from "./en";

export class TimeAnalyzerVisitor extends EnTimeAnalyzerVisitor {
  visitProgram = (ctx: ProgramContext): AnalyzerValue => {
    return this.visit(ctx.statementList());
  };

  visitStatementList = (ctx: StatementListContext): AnalyzerValue => {
    const values: AnalyzerValue[] = [];
    const statements = ctx.statement();
    for (const item of statements) {
      values.push(this.visit(item));
    }
    return new AnalyzerValueArray(values);
  };

  visitStatement = (ctx: StatementContext): AnalyzerValue => {
    return this.visitChildren(ctx);
  };
}