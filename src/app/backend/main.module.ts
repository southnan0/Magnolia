import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MainComponent} from './main.component';
import {MenuComponent} from '../menu/menu.component';
import {routing} from './main.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    routing,CommonModule,
  ],
  providers: [],
  declarations: [MainComponent, MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {
}
