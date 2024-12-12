import { CommonModule } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-fx-ui-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-ui-dropdown.component.html',
  styleUrl: './fx-ui-dropdown.component.scss',
})
export class FxUiDropdownComponent {
  @Input() options: string[] = [];
  selectedOption: WritableSignal<string | null> = signal(null);
  isOpen: WritableSignal<boolean> = signal(false);

  toggleDropdown() {
    this.isOpen.update((prev) => !prev);
  }

  selectOption(option: string) {
    this.selectedOption.set(option);
    this.isOpen.set(false);
  }
}
