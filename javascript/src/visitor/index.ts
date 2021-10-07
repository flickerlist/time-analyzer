import { ProgramContext, StatementListContext, StatementContext } from "../grammar/TimeParser";
import { AnalyzerValue, AnalyzerValueArray } from "../model";
import { EnTimeAnalyzerVisitor } from "./en";

export class TimeAnalyzerVisitor extends EnTimeAnalyzerVisitor {
  visitProgram(ctx: ProgramContext): AnalyzerValue {
    if (!ctx.statementList()) {
      return null;
    }
    return this.visit(ctx.statementList());
  };

  visitStatementList(ctx: StatementListContext): AnalyzerValue {
    const values: AnalyzerValue[] = [];
    const statements = ctx.statement();
    for (const item of statements) {
      const value = this.visit(item);
      if (!value) {
        continue;
      }
      value.resetContext(item);
      values.push(value);
    }
    return new AnalyzerValueArray(values);
  };

  visitStatement(ctx: StatementContext): AnalyzerValue {
    // Period
    if (ctx.zhPeriod()) {
      return this.visit(ctx.zhPeriod());
    }
    if (ctx.enPeriod()) {
      return this.visit(ctx.enPeriod());
    }
    
    // DateTime
    if (ctx.zhDateTime()) {
      return this.visit(ctx.zhDateTime());
    }
    if (ctx.enDateTime()) {
      return this.visit(ctx.enDateTime());
    }
    if (ctx.stdDateTime()) {
      return this.visit(ctx.stdDateTime());
    }

    // Date
    if (ctx.zhDate()) {
      return this.visit(ctx.zhDate());
    }
    if (ctx.enDate()) {
      return this.visit(ctx.enDate());
    }

    // Time
    if (ctx.zhTime()) {
      return this.visit(ctx.zhTime());
    }
    if (ctx.enTime()) {
      return this.visit(ctx.enTime());
    }

    // DirectTimeAround
    if (ctx.zhDirectTimeAround()) {
      return this.visit(ctx.zhDirectTimeAround());
    }
    if (ctx.enDirectTimeAround()) {
      return this.visit(ctx.enDirectTimeAround());
    }
    return this.defaultResult();
  };
}