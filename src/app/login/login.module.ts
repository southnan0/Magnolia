import {NgModule, ApplicationRef} from '@angular/core';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [],
  providers: [],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule {
  constructor() {
  }

  ngOnInit():void{}
}
