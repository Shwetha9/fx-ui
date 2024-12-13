import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, OnInit, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-fx-ui-toggle-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-ui-toggle-switch.component.html',
  styleUrl: './fx-ui-toggle-switch.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FxUiToggleSwitchComponent),
      multi: true,
    },
  ],
})
export class FxUiToggleSwitchComponent implements OnInit {
  toggleInputId = input<string>('toggleInputId');
  toggleSupportText = input<string>('Toggle');
  toggleTextPosition = input<'left' | 'right'>('right');
  isToggledOn = signal<boolean>(false);
  isInputFocused = signal<boolean>(false);
  toggleName = input.required();
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  value = '';
  disabled = false;

  ngOnInit(): void {
    console.log(this.toggleName());
  }
  toggleSwitch(): void {
    this.isToggledOn.set(!this.isToggledOn());
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleSwitch();
    }
  }
  onInputFocus(): void {
    this.isInputFocused.set(true);
  }

  onInputBlur(): void {
    this.isInputFocused.set(false);
  }

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
}
