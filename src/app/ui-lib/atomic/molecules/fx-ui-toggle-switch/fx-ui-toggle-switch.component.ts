import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-fx-ui-toggle-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-ui-toggle-switch.component.html',
  styleUrl: './fx-ui-toggle-switch.component.scss',
})
export class FxUiToggleSwitchComponent {
  toggleInputId = input<string>('toggleInputId');
  toggleSupportText = input<string>('Toggle');
  toggleTextPosition = input<'left' | 'right'>('right');
  togglePosition = signal<boolean>(false);
  isInputFocused = signal<boolean>(false);

  toggleSwitch(): void {
    this.togglePosition.set(!this.togglePosition());
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
}
