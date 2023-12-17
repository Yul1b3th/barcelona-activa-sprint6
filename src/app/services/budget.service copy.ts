// budget.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BudgetService {
  private budgetsSubject = new BehaviorSubject<Array<any>>([]);
  budgets$ = this.budgetsSubject.asObservable();
  calculateTotalBudget(seo: boolean, ads: boolean, web: boolean, webCost: number): number {
    let total = 0;

    if (seo) {
      total += 300;
    }

    if (ads) {
      total += 400;
    }

    if (web) {
      total += 500;
    }

    return total + webCost;
  }

  addBudget(budget: any) {
    const currentBudgets = this.budgetsSubject.getValue();
    const budgetWithDate = { ...budget, date: new Date() };
    this.budgetsSubject.next([...currentBudgets, budgetWithDate]);
  }
  getBudgets() {
    return this.budgetsSubject.getValue();
  }
  constructor() { }
}

