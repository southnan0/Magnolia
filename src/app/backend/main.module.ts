import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MainComponent} from './main.component';
import {MenuComponent} from '../menu/menu.component';
import {UsersComponent} from '../users/users.component';
import {MessageComponent} from '../message/message.component';
import {EditorComponent} from '../editor/editor.component';
import {MdTable} from '../table/table.component';
import {MdPopup} from '../popup/popup.component';
import {routing} from './main.routing';
import {CommonModule} from '@angular/common';
import {MdInputModule} from '../input/input.component';
import {MdButtonModule} from '../button/button.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    MdInputModule.forRoot(),
    MdButtonModule.forRoot()
  ],
  providers: [],
  declarations: [
    MainComponent,
    MenuComponent,
    EditorComponent,
    UsersComponent,
    MessageComponent,
    MdTable,
    MdPopup],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {
}
