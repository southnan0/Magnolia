import {Component, Input, NgModule, ModuleWithProviders, AfterContentInit, OnChanges,Output,EventEmitter} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
} from '@angular/forms';
import {CommonModule} from '@angular/common';

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
  styleUrls: ['input.component.scss'],
  providers: []
})
export class MdInput implements ControlValueAccessor,AfterContentInit,OnChanges {
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

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  writeValue(value:any) {
    this._value = value;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  registerOnChange(fn:any) {
    this._onChangeCallback = fn;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  registerOnTouched(fn:any) {
    this._onTouchedCallback = fn;
  }

  private _onChangeCallback:(_:any) => void = noop;
  private _onTouchedCallback:(_:any) => void = noop;
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
