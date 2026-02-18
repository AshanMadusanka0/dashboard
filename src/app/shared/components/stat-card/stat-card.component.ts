import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-stat-card',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="stat-card" [ngClass]="colorClass">
      <div class="stat-inner">
        <div class="stat-text">
          <div class="stat-title">{{ title }}</div>
          <div class="stat-value">{{ value }}</div>
        </div>
        <div class="stat-icon"><ng-content select="[icon]"></ng-content></div>
      </div>
      <div *ngIf="subtitle" class="stat-sub">{{ subtitle }}</div>
    </div>
  `,
  styles: [
    `:host { display: block; }
    .stat-card{ background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55));
      border-radius:10px; padding:12px; box-shadow:0 2px 8px rgba(2,6,23,0.04); backdrop-filter: blur(8px);
      border: 1px solid rgba(16,24,40,0.05); transition:all 0.2s ease;
    }
    .stat-card:hover{ box-shadow:0 4px 16px rgba(2,6,23,0.08); transform:translateY(-1px) }
    .stat-inner{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
    .stat-text{ flex:1 }
    .stat-title{ font-size:0.65rem; color:#9aa3ad; font-weight:600; text-transform:uppercase; letter-spacing:0.25px }
    .stat-value{ font-size:1.2rem; font-weight:700; color:#0f172a; margin-top:4px }
    .stat-icon{ width:40px; height:40px; min-width:40px; display:flex; align-items:center; justify-content:center; border-radius:10px; background: linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.1)); font-size:18px }
    .stat-sub{ margin-top:8px; font-size:0.6rem; color:#c4c8cf }
    /* color helpers */
    .bg-blue .stat-icon{ background: linear-gradient(135deg,#dbeafe,#e0f2fe); color:#0369a1 }
    .bg-green .stat-icon{ background: linear-gradient(135deg,#dcfce7,#f0fdf4); color:#059669 }
    .bg-red .stat-icon{ background: linear-gradient(135deg,#fee2e2,#fef2f2); color:#dc2626 }
    .bg-yellow .stat-icon{ background: linear-gradient(135deg,#fef3c7,#fffbeb); color:#b45309 }
    `
  ]
})
export class StatCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() subtitle?: string;
  @Input() colorClass = 'bg-blue';
}
