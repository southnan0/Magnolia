import {Component, Input, NgModule, ModuleWithProviders, AfterContentInit, OnChanges,Output,EventEmitter,forwardRef} from '@angular/core';
import {
  FormsModule,
} from '@angular/forms';

const noop = () => {
};

interface InputEventTarget extends EventTarget{
  value:string
}

interface InputTarget extends Event {
  currentTarget:InputEventTarget
}

@Component({
  selector: 'md-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class MdInput implements AfterContentInit,OnChanges {
  private _placeholder:string;
  private _value:string;

  get value(): any { return this._value; };
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }

  @Input() set placeholder(v: any) {
    if (v !== this._value) {
      this._placeholder = v;
    }
  }

  @Output() onChange = new EventEmitter();

  ngOnChanges() {
    console.info('onChanges')
  }

  ngAfterContentInit() {
    console.info('ngAfterContentInit')
  }

  _onChange(event:InputTarget){
    this.onChange.emit(event.currentTarget.value);
  }

  private _onChangeCallback:(_:any) => void = noop;
}

@NgModule({
  declarations: [MdInput],
  imports: [FormsModule],
  exports: [MdInput],
})
export class MdInputModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: MdInputModule,
      providers: []
    };
  }
}
