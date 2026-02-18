import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside class="sidebar">
      <div class="logo"> <!-- circular logo -->
        <div class="logo-inner"></div>
      </div>
      <!-- <nav class="nav">
        <a class="nav-item active" title="Home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a class="nav-item" title="Orders">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M5 7v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a class="nav-item" title="Products">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73L12 3 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 21l8-3.27A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a class="nav-item" title="Customers">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM6 11c1.657 0 3-1.567 3-3.5S7.657 4 6 4 3 5.567 3 7.5 4.343 11 6 11zM16 13c-2.761 0-4 1.791-4 4v1h8v-1c0-2.209-1.239-4-4-4zM6 13c-2.761 0-4 1.791-4 4v1h8v-1c0-2.209-1.239-4-4-4z" stroke="currentColor" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </nav> -->

      <nav class="nav">
  <!-- Home -->
  <a class="nav-item active" title="Home">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z"
        stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>

  <!-- Calculator -->
  <a class="nav-item" title="Calculator">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3" width="14" height="18" rx="2"
        stroke="currentColor" stroke-width="1.2"/>
      <line x1="8" y1="7" x2="16" y2="7" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
      <circle cx="12" cy="11" r="1" fill="currentColor"/>
      <circle cx="16" cy="11" r="1" fill="currentColor"/>
      <circle cx="8" cy="15" r="1" fill="currentColor"/>
      <circle cx="12" cy="15" r="1" fill="currentColor"/>
      <circle cx="16" cy="15" r="1" fill="currentColor"/>
    </svg>
  </a>

  <!-- Products (Cube) -->
  <a class="nav-item" title="Products">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21 16V8a2 2 0 0 0-1-1.73L12 3 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 21l8-3.27A2 2 0 0 0 21 16z"
        stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>

  <!-- Customers -->
  <a class="nav-item" title="Customers">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="16" cy="8" r="3" stroke="currentColor" stroke-width="1.2"/>
      <path d="M3 20c0-3 3-5 5-5s5 2 5 5M11 20c0-3 3-5 5-5s5 2 5 5"
        stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>

  <!-- Analytics (Pie Chart) -->
  <a class="nav-item" title="Analytics">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v10l8.66 5A10 10 0 1 1 12 2z"
        stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>

  <!-- Revenue ($ Circle) -->
  <a class="nav-item" title="Revenue">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.2"/>
      <path d="M15 9c0-1.5-1.5-2-3-2s-3 .5-3 2 1.5 2 3 2 3 .5 3 2-1.5 2-3 2-3-.5-3-2"
        stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>

  <!-- Delivery (Truck) -->
  <a class="nav-item" title="Delivery">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="7" width="15" height="10" rx="2"
        stroke="currentColor" stroke-width="1.2"/>
      <path d="M16 10h4l3 3v4h-7z"
        stroke="currentColor" stroke-width="1.2"/>
      <circle cx="6" cy="18" r="2" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="18" cy="18" r="2" stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>

  <!-- Reports (Document) -->
  <a class="nav-item" title="Reports">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="3" width="12" height="18" rx="2"
        stroke="currentColor" stroke-width="1.2"/>
      <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="1.2"/>
      <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>

  <!-- Integrations (Layers) -->
  <a class="nav-item" title="Integrations">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <polygon points="12 3 3 8 12 13 21 8 12 3"
        stroke="currentColor" stroke-width="1.2"/>
      <polyline points="3 12 12 17 21 12"
        stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>

  <!-- Logout -->
  <a class="nav-item" title="Logout">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M10 17l5-5-5-5"
        stroke="currentColor" stroke-width="1.2"/>
      <path d="M15 12H3"
        stroke="currentColor" stroke-width="1.2"/>
      <path d="M21 21V3"
        stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </a>
</nav>


      
      <div class="side-cta"> 
        <button class="logout">⤴</button>
      </div>
    </aside>
  `,
  styles: [
    `:host{display:block}
    .sidebar{width:72px; background: linear-gradient(180deg,#0b2540 0%, #0a3150 100%); color:#fff; height:100vh; padding:20px 12px; box-sizing:border-box; display:flex; flex-direction:column; align-items:center; gap:20px; position:fixed; left:0; top:0; bottom:0; z-index:1000}
    .logo{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#1a4d7f,#0d6fa8);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(2,6,23,0.4)}
    .logo-inner{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1)}
    .nav{display:flex;flex-direction:column;gap:14px;margin-top:16px;flex:1}
    .nav-item{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.6);opacity:1;border:1px solid rgba(255,255,255,0.05);transition:all 0.2s;cursor:pointer}
    .nav-item:hover{color:rgba(255,255,255,0.9);background:rgba(255,255,255,0.05)}
    .nav-item.active{background:linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05)); box-shadow:0 6px 20px rgba(2,6,23,0.25); color:#fff; border:1px solid rgba(255,255,255,0.1)}
    .side-cta{margin-top:auto}
    .logout{background:transparent;border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.5);padding:8px 10px;border-radius:8px;cursor:pointer;transition:all 0.2s}
    .logout:hover{border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.8)}
    `
  ]
})
export class SidebarComponent {}
