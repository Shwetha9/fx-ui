import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-fx-ui-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './fx-ui-dropdown.component.html',
  styleUrl: './fx-ui-dropdown.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FxUiDropdownComponent),
      multi: true,
    },
  ],
})
export class FxUiDropdownComponent {
  options = input<string[]>(['Option 1', 'Option 2', 'Option 3']);
  optionLabel = input('an option');
  selectedOption = signal('');
  isOpen = false;
  elementRef: ElementRef = inject(ElementRef);
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  value = '';
  disabled = false;
  // This closes the dropdown immediately when an option is selected, needs to be fixed

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption.set(option);
    this.isOpen = false;
  }
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
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
