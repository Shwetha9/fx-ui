import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FxUiInputGroupComponent } from '../fx-ui-input-group/fx-ui-input-group.component';
import { FxUiToggleSwitchComponent } from '../../fx-ui-toggle-switch/fx-ui-toggle-switch.component';
import { FxUiDropdownComponent } from '../fx-ui-dropdown/fx-ui-dropdown.component';

@Component({
  selector: 'app-fx-ui-standard-form',
  standalone: true,
  imports: [
    CommonModule,
    FxUiInputGroupComponent,
    FxUiToggleSwitchComponent,
    FxUiDropdownComponent,
  ],
  templateUrl: './fx-ui-standard-form.component.html',
  styleUrl: './fx-ui-standard-form.component.scss',
})
export class FxUiStandardFormComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
}
