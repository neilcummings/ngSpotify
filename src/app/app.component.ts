import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <div class="main">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>

  `,
  styles: [`
    .main {
      border-bottom: #333 1px solid;
      padding: 30px 0;
    }
  `]
})
export class AppComponent  { name = 'Angular'; }
