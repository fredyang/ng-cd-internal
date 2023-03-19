//import 'zone.js/dist/zone';
import {  enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, { ngZone: 'noop' }).catch(err => console.error(err));
// platform.bootstrapModule(AppModule).catch(err => console.error(err));

