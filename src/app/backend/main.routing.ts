import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {UsersComponent} from '../users/users.component';
import {MessageComponent} from '../message/message.component';

const routes:Routes = [{
  path: '', component: MainComponent,
  children: [
    {path: '', component: MessageComponent},
    {path: 'users', component: UsersComponent},
    {path: 'message', component: MessageComponent}
  ]
}];

export const routing = RouterModule.forChild(routes);
