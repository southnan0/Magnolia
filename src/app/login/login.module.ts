import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {LoginComponent} from './login.component';
import {MdInputModule} from '../input/input.component';
import {MdButtonModule} from '../button/button.component';
import {FormsModule} from '@angular/forms';
import {routing} from './login.routing';

@NgModule({
  imports: [
    routing,
    FormsModule,
    MdInputModule.forRoot(),
    MdButtonModule.forRoot()
  ],
  providers: [],
  declarations: [LoginComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule {
}
