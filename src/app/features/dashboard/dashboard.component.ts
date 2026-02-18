import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartCardComponent } from '../../shared/components/chart-card/chart-card.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
import { DashboardService } from '../../core/services/dashboard.service';
import { NgIf, NgForOf, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, NgIf, NgForOf, AsyncPipe, SidebarComponent, ChartCardComponent, DataTableComponent],
  template: `
    <div class="app-layout">
      <app-sidebar />
      <div class="main-area">
        <header class="topbar">
          <h1>Главная</h1>
          <div class="tabs">
            <button class="tab active">Статистика</button>
            <button class="tab">Заведения</button>
            <button class="tab">Доступ</button>
            <button class="tab">Инвестиции</button>
            <button class="tab">ОДР</button>
          </div>
          <div class="actions">
            <label>Текущая заведений</label>
            <select class="filter">
              <option>Все</option>
              <option>Филиал A</option>
              <option>Филиал B</option>
            </select>
          </div>
        </header>

        <section class="grid">
          <div class="stats">
            <div class="stat-item stat-beige">
              <div class="stat-label">Количество заведений</div>
              <div class="stat-value">6</div>
            </div>
            <div class="stat-item stat-blue">
              <div class="stat-label">Все сотрудники</div>
              <div class="stat-value">477</div>
            </div>
            <div class="stat-item stat-yellow">
              <div class="stat-label">Количество заведений</div>
              <div class="stat-value">6</div>
            </div>
            <div class="stat-item stat-green">
              <div class="stat-label">Общии приход</div>
              <div class="stat-value">120 647 000 сум</div>
            </div>
            <div class="stat-item stat-pink">
              <div class="stat-label">Общий расход</div>
              <div class="stat-value">12 407 000 сум</div>
            </div>
          </div>

          <div class="content-row">
            <div class="charts-section">
              <ng-container *ngIf="bar$ | async as bar">
                <app-chart-card title="Приход / Расход по годам" [type]="'bar'" [labels]="bar.categories" [datasets]="bar.series"></app-chart-card>
              </ng-container>

              <div class="side-cards">
                <ng-container *ngIf="pies$ | async as pies">
                  <app-chart-card title="Доля прихода каждого направления" [type]="'doughnut'" [labels]="pies.labels" [datasets]="[{ data: pies.revenueA, backgroundColor: ['#166534','#d97706','#7c3aed','#0ea5e9'] }]">
                    <div class="sub"></div>
                  </app-chart-card>
                  <app-chart-card title="Доля прихода каждого направления" [type]="'doughnut'" [labels]="pies.labels" [datasets]="[{ data: pies.revenueB, backgroundColor: ['#166534','#d97706','#7c3aed','#0ea5e9'] }]">
                    <div class="sub"></div>
                  </app-chart-card>
                </ng-container>
              </div>
            </div>
          </div>

          <div class="table-wrap">
            <h3 class="section-title">Заведения</h3>
            <ng-container *ngIf="table$ | async as table">
              <app-data-table [rows]="table" />
            </ng-container>
          </div>
        </section>
      </div>

      <aside class="right-sidebar">
        <div class="right-sidebar-header">
          <select class="location-select">
            <option>Все</option>
            <option>Филиал A</option>
            <option>Филиал B</option>
          </select>
        </div>

        <div class="calendar card">
          <div class="cal-nav">
            <button class="cal-btn">&lt;</button>
            <div class="cal-head">February 2026</div>
            <button class="cal-btn">&gt;</button>
          </div>
          <div class="cal-body">
            <div class="cal-grid">
              <div class="cal-day muted">S</div><div class="cal-day muted">M</div><div class="cal-day muted">T</div><div class="cal-day muted">W</div><div class="cal-day muted">T</div><div class="cal-day muted">F</div><div class="cal-day muted">S</div>
              <div class="cal-cell"></div><div class="cal-cell"></div><div class="cal-cell"></div><div class="cal-cell"></div><div class="cal-cell"></div><div class="cal-cell"></div><div class="cal-cell">1</div>
              <div class="cal-cell">2</div><div class="cal-cell">3</div><div class="cal-cell">4</div><div class="cal-cell">5</div><div class="cal-cell">6</div><div class="cal-cell">7</div><div class="cal-cell">8</div>
              <div class="cal-cell">9</div><div class="cal-cell">10</div><div class="cal-cell">11</div><div class="cal-cell">12</div><div class="cal-cell">13</div><div class="cal-cell">14</div><div class="cal-cell">15</div>
              <div class="cal-cell">16</div><div class="cal-cell">17</div><div class="cal-cell active">18</div><div class="cal-cell active">19</div><div class="cal-cell">20</div><div class="cal-cell">21</div><div class="cal-cell">22</div>
              <div class="cal-cell">23</div><div class="cal-cell">24</div><div class="cal-cell">25</div><div class="cal-cell">26</div><div class="cal-cell">27</div><div class="cal-cell">28</div><div class="cal-cell"></div>
            </div>
          </div>
        </div>

        <div class="rates card">
          <h4>Курсы валют</h4>
          <div *ngIf="currencies$ | async as currencies" class="rates-list">
            <div class="rate" *ngFor="let c of currencies">
              <div>{{ c.code }}</div>
              <div class="rate-val">{{ c.rate }} <span [class.positive]="c.delta>0" [class.negative]="c.delta<0">{{ c.delta>0 ? '+' : '' }}{{ c.delta }}</span></div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  `,
  styles: [
    `:host{display:block;font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial}
    .app-layout{display:flex;gap:0;min-height:100vh}
    .main-area{flex:1;padding:20px 24px;background:linear-gradient(180deg,#f3f6fb,#eef3f8);overflow-y:auto;margin-left:72px;max-height:100vh}
    .topbar{display:flex;align-items:center;justify-content:space-between;gap:32px;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid rgba(2,6,23,0.08);background:linear-gradient(180deg,#f3f6fb,#eef3f8)}
    .topbar h1{margin:0;font-size:1.6rem;font-weight:700;color:#0f172a;min-width:120px;white-space:nowrap}
    .tabs{display:flex;gap:8px;flex:1}
    .tab{background:transparent;border:0;padding:10px 16px;border-radius:6px;color:#6b7280;font-size:0.95rem;font-weight:500;cursor:pointer;transition:all 0.2s;white-space:nowrap}
    .tab:hover{color:#0f172a;background:rgba(2,6,23,0.04)}
    .tab.active{background:#1e3a8a;color:#fff;font-weight:600;box-shadow:0 2px 8px rgba(30,58,138,0.2)}
    .actions{display:flex;align-items:center;gap:12px;white-space:nowrap}
    .actions label{font-size:0.9rem;font-weight:600;color:#0f172a}
    .filter{padding:8px 12px;border-radius:6px;border:1px solid rgba(2,6,23,0.15);background:#fff;font-size:0.9rem;cursor:pointer;font-weight:500;color:#0f172a;transition:all 0.2s;min-width:100px}
    .filter:hover{border-color:rgba(2,6,23,0.3);background:#fbfdff}
    .filter:focus{outline:none;border-color:#1e3a8a;box-shadow:0 0 0 3px rgba(30,58,138,0.1)}

    .grid{display:grid;grid-template-columns:1fr;gap:12px;margin-right:320px}
    .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;width:97%;height:85px;padding:6px 0px}
    
    .stat-item{padding:10px 8px;border-radius:10px;border:2px solid;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:auto}
    .stat-label{font-size:0.7rem;font-weight:600;margin-bottom:4px;line-height:1.1}
    .stat-value{font-size:0.95rem;font-weight:700}
    
    .stat-beige{background:#fef8f0;border-color:#e8d5c4;color:#8b6f47;box-shadow:0 4px 12px rgba(139,111,71,0.12)}
    .stat-blue{background:#cce5ff;border-color:#99c7ff;color:#0066cc;box-shadow:0 4px 12px rgba(0,102,204,0.12)}
    .stat-yellow{background:#fffef0;border-color:#f0e8d0;color:#8b8547;box-shadow:0 4px 12px rgba(139,133,71,0.12)}
    .stat-green{background:#d4f5e8;border-color:#a8e6d0;color:#0d7f5c;box-shadow:0 4px 12px rgba(13,127,92,0.12)}
    .stat-pink{background:#ffd9d9;border-color:#ffb3b3;color:#cc3333;box-shadow:0 4px 12px rgba(204,51,51,0.12)}

    .content-row{display:grid;grid-template-columns:1fr;gap:12px;width:100%}
    .charts-section{display:grid;grid-template-columns:1.8fr 0.9fr;gap:12px;align-items:stretch;height:auto}
    .side-cards{display:flex;flex-direction:column;gap:12px}
    .side-cards app-chart-card{height:auto}

    .table-wrap{background:transparent;width:100%}
    .section-title{margin:0 0 16px 0;font-size:1.1rem;font-weight:700;color:#0f172a}

    .right-sidebar{position:fixed;right:0;top:0;height:100vh;width:320px;background:linear-gradient(180deg,#f3f6fb,#eef3f8);padding:28px 20px;overflow-y:auto;display:flex;flex-direction:column;gap:20px;border-left:1px solid rgba(2,6,23,0.06)}
    .right-sidebar-header{display:flex;align-items:center}
    .location-select{width:100%;padding:10px 12px;border-radius:8px;border:1px solid rgba(2,6,23,0.1);background:#fff;font-size:0.9rem;font-weight:500;color:#0f172a;cursor:pointer;transition:all 0.2s}
    .location-select:hover{border-color:rgba(2,6,23,0.2);background:#fbfdff}
    .location-select:focus{outline:none;border-color:#1e40af;box-shadow:0 0 0 3px rgba(30,64,175,0.1)}
    .right-sidebar .card{background:linear-gradient(180deg,#fff,#fbfdff);padding:16px;border-radius:12px;box-shadow:0 2px 8px rgba(2,6,23,0.04);border:1px solid rgba(16,24,40,0.05)}
    .right-sidebar .card h4{margin:0 0 12px 0;font-size:0.95rem;font-weight:700;color:#0f172a}
    .cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;gap:8px}
    .cal-btn{background:transparent;border:1px solid rgba(2,6,23,0.1);border-radius:6px;width:28px;height:28px;cursor:pointer;color:#0f172a;font-weight:600;transition:all 0.2s}
    .cal-btn:hover{background:rgba(2,6,23,0.05);border-color:rgba(2,6,23,0.2)}
    .cal-head{text-align:center;font-weight:700;color:#0f172a;font-size:0.9rem;flex:1}
    .cal-body{padding:8px 0}
    .cal-grid{display:grid;grid-template-columns:repeat(7,26px);gap:4px;justify-content:center}
    .cal-cell{height:26px;border-radius:5px;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:0.75rem;font-weight:500}
    .cal-day.muted{font-size:0.65rem;font-weight:600;color:#d1d5db}
    .cal-cell.active{background:linear-gradient(90deg,#1e40af,#0284c7);color:#fff;font-weight:700}

    .rates-list{display:flex;flex-direction:column;gap:10px}
    .rate{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(15,23,42,0.05);font-size:0.85rem}
    .rate:last-child{border-bottom:none}
    .rate div:first-child{font-weight:600;color:#0f172a}
    .rate-val{display:flex;gap:6px;align-items:center;font-weight:700;justify-content:flex-end}
    .rate-val .positive{color:#16a34a;font-size:0.75rem}
    .rate-val .negative{color:#ef4444;font-size:0.75rem}

    @media (max-width: 1600px){ .charts-section{grid-template-columns:1.5fr 1fr} }
    @media (max-width: 1400px){ .charts-section{grid-template-columns:1.2fr 1fr} .stats{grid-template-columns:repeat(4,1fr)} }
    @media (max-width: 1200px){ .stats{grid-template-columns:repeat(3,1fr)} .charts-section{grid-template-columns:1fr} .side-cards{display:grid;grid-template-columns:repeat(2,1fr)} .right-sidebar{width:280px} .table-wrap{margin-right:280px} .charts-section{margin-right:280px} }
    @media (max-width: 1024px){ .stats{grid-template-columns:repeat(2,1fr)} .charts-section{grid-template-columns:1fr} .side-cards{display:grid;grid-template-columns:1fr} .right-sidebar{width:100%;position:relative;height:auto;top:auto;border-left:none;border-top:1px solid rgba(2,6,23,0.06)} .table-wrap{margin-right:0} .charts-section{margin-right:0} }
    @media (max-width: 768px){ .stats{grid-template-columns:1fr} .main-area{padding:20px 24px} }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  stats$: Observable<any[]>;
  bar$: Observable<any>;
  pies$: Observable<any>;
  table$: Observable<any[]>;
  currencies$: Observable<any[]>;

  constructor(private ds: DashboardService) {
    this.stats$ = this.ds.getStats();
    this.bar$ = this.ds.getBar();
    this.pies$ = this.ds.getPies();
    this.table$ = this.ds.getTable();
    this.currencies$ = this.ds.getCurrencies();
  }
}
