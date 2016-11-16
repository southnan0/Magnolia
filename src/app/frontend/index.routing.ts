import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index.component';
import {HomeComponent} from '../home/home.component';

const routes:Routes = [
  {
    path: '', component: IndexComponent,
    children: [{path: '', component: HomeComponent}]
  }
];

export const routing = RouterModule.forChild(routes);
