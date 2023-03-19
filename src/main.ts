import 'zone.js/dist/zone';
import { Component, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
enableProdMode();
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppComponent],

  template: `
  <app-root></app-root>
  `,
})
export class App {
}

bootstrapApplication(App);
