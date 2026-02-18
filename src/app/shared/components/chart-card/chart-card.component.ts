import { Component, Input, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

@Component({
  standalone: true,
  selector: 'app-chart-card',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="chart-card">
      <div class="chart-card__header">
        <h4>{{ title }}</h4>
        <div class="chart-sub"><ng-content select=".sub"></ng-content></div>
      </div>
      <div class="chart-card__body">
        <canvas #canvas></canvas>
      </div>
    </div>
  `,
  styles: [
    `:host{display:block}
    .chart-card{background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55)); border-radius:12px; padding:14px; box-shadow:0 2px 8px rgba(2,6,23,0.04); border:1px solid rgba(16,24,40,0.05); height:100%}
    .chart-card__header{display:flex; align-items:center; justify-content:space-between; gap:12px; padding-bottom:10px}
    .chart-card__header h4{margin:0; font-size:0.9rem; font-weight:600; color:#0f172a}
    .chart-card__body{min-height:220px; display:flex; align-items:center; justify-content:center}
    canvas{width:100% !important; height:200px !important}
    `
  ]
})
export class ChartCardComponent implements AfterViewInit, OnChanges {
  @Input() title = '';
  @Input() type: 'bar' | 'doughnut' | 'line' = 'bar';
  @Input() labels: string[] = [];
  @Input() datasets: any[] = [];

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private chart?: Chart;

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && (changes['datasets'] || changes['labels'] || changes['type'])) {
      this.updateChart();
    }
  }

  private renderChart() {
    const cfg: ChartConfiguration = {
      type: this.type as any,
      data: {
        labels: this.labels,
        datasets: this.datasets.map((d: any, idx: number) => ({
          label: d.name ?? d.label ?? `Series ${idx + 1}`,
          data: d.data ?? d.values ?? [],
          backgroundColor: d.backgroundColor,
          borderColor: d.borderColor,
          borderWidth: 1,
          fill: false,
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
          legend: { 
            display: true,
            position: this.type === 'doughnut' ? 'right' : 'top',
            labels: {
              padding: this.type === 'doughnut' ? 12 : 15,
              font: { size: this.type === 'doughnut' ? 11 : 12 }
            }
          } 
        },
        scales: this.type === 'doughnut' ? undefined : { y: { beginAtZero: true } }
      }
    };

    const ctx = this.canvas.nativeElement.getContext('2d')!;
    this.chart = new Chart(ctx, cfg);
  }

  private updateChart() {
    // destroy + re-render to handle type/scale changes cleanly
    if (this.chart) {
      try { this.chart.destroy(); } catch (e) { /* ignore */ }
      this.chart = undefined;
    }
    this.renderChart();
  }
}
