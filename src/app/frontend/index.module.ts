import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {IndexComponent} from './index.component.ts';
/*import {NavComponent} from '../nav/nav.component';*/
import {HomeComponent} from '../home/home.component';
import {FooterComponent} from '../footer/footer.component';
import {BannerComponent} from '../banner/banner.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './index.routing.ts';

@NgModule({
  imports: [
    routing,
    HttpModule,
    FormsModule,
  ],
  providers: [

  ],
  declarations: [
    IndexComponent,
    /*NavComponent,*/
    FooterComponent,
    BannerComponent,
    HomeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [IndexComponent]
})
export class IndexModule {
}
//todo  navComponent render 有bug
