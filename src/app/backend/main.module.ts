import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MainComponent} from './main.component';
import {MenuComponent} from '../b.menu/b.menu.component';
import {UsersComponent} from '../b.users/b.users.component';
import {MenusComponent} from '../b.menus/b.menus.component';
import {MessageComponent} from '../b.message/b.message.component.ts';
import {RoleComponent} from '../b.role/b.role.component.ts';
import {EditorComponent} from '../../common/editor/editor.component';
import {MdTable} from '../../common/table/table.component';
import {MdPopup} from '../../common/popup/popup.component';
import {routing} from './main.routing';
import {CommonModule} from '@angular/common';
import {MdInputModule} from '../../common/input/input.component';
import {MdButtonModule} from '../../common/button/button.component';
import {FormsModule} from '@angular/forms';
import {CanDeactivateGuard} from '../../services/can-deactivate-guard.service';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    MdInputModule.forRoot(),
    MdButtonModule.forRoot()
  ],
  providers: [CanDeactivateGuard],
  declarations: [
    MainComponent,
    MenuComponent,
    EditorComponent,
    UsersComponent,
    MenusComponent,
    MessageComponent,
    RoleComponent,
    MdTable,
    MdPopup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {
}
