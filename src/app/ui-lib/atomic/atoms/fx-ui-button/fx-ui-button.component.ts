import { CommonModule } from '@angular/common';
import { Component, OnInit, input, computed } from '@angular/core';
import { FxUiButtonType, FxUiButtonSize, FxUiButtonColor, FxUiButtonShape, FxUiButtonIconPosition, FxUiButtonState } from './fx-ui-button.component.type';

@Component({
  selector: 'fx-ui-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fx-ui-button.component.html',
  styleUrls: ['./fx-ui-button.component.scss'],
})
export class FxUiButtonComponent implements OnInit {

  type = input<FxUiButtonType>('submitBtn');
  size = input<FxUiButtonSize>('medium');
  color = input<FxUiButtonColor>('secondary');
  shape = input.required<FxUiButtonShape>();
  iconPosition = input.required<FxUiButtonIconPosition>();
  state = input.required<FxUiButtonState>();
  label = input.required<string>();

  ngOnInit(): void {}

  // Computed properties
  readonly isDisabled = computed(() => this.state() === 'disabled' || this.state() === 'loading');
}
