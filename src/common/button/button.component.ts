import {Component,
  NgModule,
  ModuleWithProviders,
  AfterContentInit,
  OnChanges,
  Output,
  EventEmitter} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
} from '@angular/forms';

const noop = () => {

};

@Component({
  selector: 'md-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  providers: []
})
export class MdButton implements OnChanges {
  @Output() onSubmit = new EventEmitter();
  ngOnChanges() {
    console.info('onChanges')
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  writeValue(value:any) {

  }

  _onSubmit(event:Event){
    this.onSubmit.emit(event)
  }
}

@NgModule({
  declarations: [MdButton],
  imports: [FormsModule],
  exports: [MdButton],
})
export class MdButtonModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: MdButtonModule,
      providers: []
    };
  }
}
