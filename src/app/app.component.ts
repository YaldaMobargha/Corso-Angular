import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { ProvaComponent } from './prova/prova.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProvaComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'corso-angular';
}
