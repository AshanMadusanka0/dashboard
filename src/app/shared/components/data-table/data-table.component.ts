import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-data-table',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="table-root">
      <div class="table-row table-head">
        <div>#</div>
        <div>Заведение</div>
        <div class="align-right">Сальдо</div>
        <div class="align-right">Приход</div>
        <div class="align-right">Расход</div>
        <div class="align-right">Прибыль</div>
        <div class="align-right">Сдано</div>
        <div class="align-right">Задолженность</div>
        <div class="align-right">Рентабельность</div>
      </div>

      <ng-container *ngFor="let row of rows">
        <div class="table-row table-card">
          <div class="index">{{ row.id }}</div>
          <div class="cell name">
            <div class="icon">{{ row.icon }}</div>
            <div class="name-text">{{ row.name }}</div>
          </div>
          <div class="align-right text-muted">{{ row.balance }}</div>
          <div class="align-right text-muted">{{ row.income }}</div>
          <div class="align-right text-danger">{{ row.expense }}</div>
          <div class="align-right text-success">{{ row.profit }}</div>
          <div class="align-right text-success">{{ row.given }}</div>
          <div class="align-right text-muted">{{ row.debt }}</div>
          <div class="align-right">{{ row.rentability }}</div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `:host{display:block}
    .table-root{display:block}
    .table-row{display:grid;grid-template-columns:32px 140px 100px 100px 100px 100px 100px 130px 120px;gap:10px;align-items:left;padding:12px 14px}
    .table-head{font-weight:700;color:#9ca3af;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.4px;background:transparent;padding:10px 14px;margin-bottom:6px;color:black}
    .table-card{background:linear-gradient(180deg,#ffffff,#fbfdff);border-radius:10px;margin-bottom:8px;box-shadow:0 2px 8px rgba(2,6,23,0.03);border:1px solid rgba(16,24,40,0.04);transition:all 0.2s}
    .table-card:hover{box-shadow:0 4px 12px rgba(2,6,23,0.06)}
    .index{color:#b4b8bf;font-weight:600;font-size:0.85rem}
    .icon{width:32px;height:32px;border-radius:8px;background:rgba(15,23,42,0.04);display:flex;align-items:center;justify-content:center;font-size:18px}
    .name{display:flex;gap:8px;align-items:center}
    .name-text{font-weight:600;color:#0f172a;font-size:0.65rem}
    .text-muted{color:#9ca3af;font-size:0.8rem}
    .text-danger{color:#ef4444;font-weight:700;font-size:0.8rem}
    .text-success{color:#16a34a;font-weight:700;font-size:0.8rem}
    .align-right{text-align:right;font-size:0.6rem;font-weight:600}
    @media (max-width: 1200px){.table-row{grid-template-columns:32px 140px 90px 90px 90px 90px 90px 90px 90px}}
    @media (max-width: 900px){.table-row{grid-template-columns:32px 1fr repeat(3,90px)}.table-head > div:nth-child(n+5),.table-card > div:nth-child(n+5){display:none}}
    `
  ]
})
export class DataTableComponent {
  @Input() rows: any[] = [];
}
