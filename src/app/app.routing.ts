import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { CheckComponent } from './check/check.component';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[CheckComponent] },
  { path: 'about', component: AboutComponent,canActivate:[CheckComponent]},
  { path: 'nav', component: NavComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
