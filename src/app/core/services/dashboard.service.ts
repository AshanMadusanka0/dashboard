import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MOCK_DASHBOARD } from '../data/mock-dashboard.data';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  getStats(): Observable<any[]> {
    return of(MOCK_DASHBOARD.stats);
  }

  getBar(): Observable<any> {
    return of(MOCK_DASHBOARD.bar);
  }

  getPies(): Observable<any> {
    return of(MOCK_DASHBOARD.pies);
  }

  getTable(): Observable<any[]> {
    return of(MOCK_DASHBOARD.table);
  }

  getCurrencies(): Observable<any[]> {
    return of(MOCK_DASHBOARD.currencies);
  }
}
