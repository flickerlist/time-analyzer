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
      const value = this.visit(item);
      if (!value) {
        continue;
      }
      value.resetContext(item);
      values.push(value);
    }
    return new AnalyzerValueArray(values);
  };

  visitStatement = (ctx: StatementContext): AnalyzerValue => {
    // PeriodDateTime
    if (ctx.zhPeriodDateTime()) {
      return this.visit(ctx.zhPeriodDateTime());
    }
    if (ctx.enPeriodDateTime()) {
      return this.visit(ctx.enPeriodDateTime());
    }
    if (ctx.stdPeriodDateTime()) {
      return this.visit(ctx.stdPeriodDateTime());
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
    if (ctx.stdDate()) {
      return this.visit(ctx.stdDate());
    }

    // Time
    if (ctx.zhTime()) {
      return this.visit(ctx.zhTime());
    }
    if (ctx.enTime()) {
      return this.visit(ctx.enTime());
    }
    if (ctx.stdTime()) {
      return this.visit(ctx.stdTime());
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