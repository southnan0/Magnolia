import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {UsersComponent} from '../b.users/b.users.component';
import {MenusComponent} from '../b.menus/b.menus.component';
import {MessageComponent} from '../b.message/b.message.component.ts';
import {RoleComponent} from '../b.role/b.role.component.ts';
import {DicComponent} from '../b.dic/b.dic.component.ts';
import {CanDeactivateGuard} from '../../services/can-deactivate-guard.service';

const routes:Routes = [{
  path: '', component: MainComponent,
  children: [
    {path: '', component: UsersComponent,canDeactivate: [CanDeactivateGuard]},
    {path: 'users', component: UsersComponent,canDeactivate: [CanDeactivateGuard]},
    {path: 'menus', component: MenusComponent,canDeactivate: [CanDeactivateGuard]},
    {path: 'role', component: RoleComponent,canDeactivate: [CanDeactivateGuard]},
    {path: 'message', component: MessageComponent},
    {path: 'dic', component: DicComponent}
  ]
}];

export const routing = RouterModule.forChild(routes);
