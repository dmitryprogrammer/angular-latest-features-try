import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, Routes} from '@angular/router';

import {AppComponent} from './app/components/app/app.component';
import {ListComponent} from './app/components/list/list.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => ListComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(withInterceptorsFromDi())],
}).catch((err) => console.error(err));
