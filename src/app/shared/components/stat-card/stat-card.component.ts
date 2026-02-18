import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-stat-card',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="stat-card">
      <div class="stat-inner">
        <div class="stat-text">
          <div class="stat-title">{{ title }}</div>
          <div class="stat-value">{{ value }}</div>
        </div>
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
    .stat-inner{ display:flex; align-items:center; justify-content:center; gap:10px; flex-direction:column; text-align:center }
    .stat-text{ flex:1 }
    .stat-title{ font-size:0.65rem; color:#9aa3ad; font-weight:600; text-transform:uppercase; letter-spacing:0.25px }
    .stat-value{ font-size:1.3rem; font-weight:700; color:#0f172a; margin-top:4px }
    .stat-sub{ margin-top:8px; font-size:0.6rem; color:#c4c8cf }
    `
  ]
})
export class StatCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() subtitle?: string;
  @Input() colorClass = 'bg-blue';
}
