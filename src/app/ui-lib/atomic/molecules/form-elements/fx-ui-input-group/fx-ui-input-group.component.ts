import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  forwardRef,
  input,
  type OnInit,
} from '@angular/core';
import { v4 } from 'uuid';
import {
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-fx-ui-input-group',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FxUiInputGroupComponent),
      multi: true,
    },
  ],
  templateUrl: './fx-ui-input-group.component.html',
  styleUrl: './fx-ui-input-group.component.scss',
})
export class FxUiInputGroupComponent {
  inputType = input<'text' | 'radio' | 'checkbox'>('text');
  inputLabel = input<string>('Input Label');
  inputId = v4();
  inputGroupId = v4();
  private baseId = v4();
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  value = '';
  disabled = false;

  getComputedLabelProps = computed(() => {
    let labelFor = `${this.baseId}_text`;

    if (this.inputType() === 'radio') {
      labelFor = `${this.baseId}_radio`;
    }

    if (this.inputType() === 'checkbox') {
      labelFor = `${this.baseId}_checkbox`;
    }

    return labelFor;
  });

  // Write a new value to the element
  writeValue(value: any): void {
    this.value = value;
  }

  // Register the function to call when the value changes
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  // Register the function to call when the control is touched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allow Angular to disable the component
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value); // Notify Angular forms of the value change
    this.onTouched(); // Mark as touched
  }
}
