import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MainComponent} from './main.component';
import {routing} from './main.routing';

@NgModule({
  imports: [
    routing
  ],
  providers: [],
  declarations: [MainComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule {
}
