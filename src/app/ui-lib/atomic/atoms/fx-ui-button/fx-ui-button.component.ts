import { CommonModule } from '@angular/common';
import { Component, OnInit, input, computed, output } from '@angular/core';
import {
  FxUiButtonType,
  FxUiButtonSize,
  FxUiButtonColor,
  FxUiButtonShape,
  FxUiButtonIconPosition,
  FxUiButtonState,
} from './fx-ui-button.component.type';

@Component({
  selector: 'app-fx-ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-ui-button.component.html',
  styleUrls: ['./fx-ui-button.component.scss'],
})
export class FxUiButtonComponent implements OnInit {
  type = input<FxUiButtonType>('fill');
  size = input<FxUiButtonSize>('medium');
  color = input<FxUiButtonColor>('secondary');
  shape = input<FxUiButtonShape>();
  iconPosition = input<FxUiButtonIconPosition>();
  state = input<FxUiButtonState>();
  label = input.required<string>();
  buttonClickEvent = output<void>();
  classModifiers: { [key: string]: boolean } = {};
  icon = input<string>();

  ngOnInit(): void {
    this.classModifiers = this.generateButtonClass();
  }

  ngOnChanges(): void {
    this.classModifiers = this.generateButtonClass();
  }

  generateButtonClass(): { [key: string]: boolean } {
    return {
      [`fx-button--${this.size()}`]: !!this.size(),
      [`fx-button--${this.color()}`]: !!this.color(),
      [`fx-button--${this.shape()}`]: !!this.shape(),
      [`fx-button--${this.iconPosition()}`]: !!this.iconPosition(),
      [`fx-button--${this.state()}`]: !!this.state(),
      [`fx-button--${this.type()}`]: !!this.type(),
    };
  }

  handleButtonClick(): void {
    this.buttonClickEvent.emit();
  }

  // Computed properties
  readonly isDisabled = computed(
    () => this.state() === 'disabled' || this.state() === 'loading',
  );
}
