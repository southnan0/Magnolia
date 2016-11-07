import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CheckComponent } from './check/check.component';

//todo  配置找不到path时，跳转到公共页面
const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[CheckComponent] },
  { path: 'about', component: AboutComponent,canActivate:[CheckComponent]},
  { path: 'login', loadChildren: './login/login.module#LoginModule'}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

