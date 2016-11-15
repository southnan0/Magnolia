import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CheckComponent } from './check/check.component';

//todo  配置找不到path时，跳转到公共页面
const routes: Routes = [
  { path: '', loadChildren:'./frontend/index.module#IndexModule' },
  { path: 'about', component: AboutComponent,canActivate:[CheckComponent]},
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path:'backend',loadChildren:'./backend/main.module#MainModule'}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

