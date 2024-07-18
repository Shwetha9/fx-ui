import { CommonModule } from '@angular/common';
import { Component, computed, input, type OnInit } from '@angular/core';
import { v4 } from 'uuid';

@Component({
  selector: 'app-fx-ui-input-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-ui-input-group.component.html',
  styleUrl: './fx-ui-input-group.component.scss',
})
export class FxUiInputGroupComponent implements OnInit {
  inputType = input<'text' | 'radio' | 'checkbox'>('text');
  inputLabel = input<string>('Input Label');
  inputId = v4();
  inputGroupId = v4();

  getComputedLabelProps = computed(() => {
    let labelFor = `text_${v4()}`;

    if (this.inputType() === 'radio') {
      labelFor = `radio_${v4()}`;
    }

    if (this.inputType() === 'checkbox') {
      labelFor = `checkbox_${v4()}`;
    }

    return labelFor;
  });

  ngOnInit(): void {}
}
