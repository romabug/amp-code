import {Component, forwardRef, Input } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Component({
  selector: 'app-input-percentage',
  templateUrl: './input-percentage.component.html',
  styleUrls: ['./input-percentage.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPercentageComponent),
      multi: true,
    }
  ]

})
export class InputPercentageComponent implements ControlValueAccessor {

  @Input('value') _value: string = '';
  @Input() decimalPlaces: number | string = 0;

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(): void {
    this.value = this.handleNumberInput(this.value, this.decimalPlaces);
    this.onChange(this.value);
    this.onTouched();
  }


  handleNumberInput(input: string, decimals: number | string): string {
    if (!input) {
      console.warn("not value input to app-input-percentage");
    }

    if (isNaN(Number(input))) {
      return Number("0").toFixed(Number(decimals)).toString();
    }

    return Number(input).toFixed(Number(decimals)).toString();
  }


}
