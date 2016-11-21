import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {UsersComponent} from '../users/users.component';
import {MessageComponent} from '../message/message.component';
import {CanDeactivateGuard} from '../../services/can-deactivate-guard.service';

const routes:Routes = [{
  path: '', component: MainComponent,
  children: [
    {path: '', component: UsersComponent,canDeactivate: [CanDeactivateGuard]},
    {path: 'users', component: UsersComponent,canDeactivate: [CanDeactivateGuard]},
    {path: 'message', component: MessageComponent}
  ]
}];

export const routing = RouterModule.forChild(routes);
