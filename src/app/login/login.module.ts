import {NgModule, ApplicationRef} from '@angular/core';
import {LoginComponent} from './login.component';
import {MdInputModule} from '../input/input.component';
import {MdButtonModule} from '../button/button.component';

@NgModule({
  imports: [MdInputModule.forRoot(),MdButtonModule.forRoot()],
  providers: [],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule {
  constructor() {
  }

  ngOnInit():void {
  }
}
