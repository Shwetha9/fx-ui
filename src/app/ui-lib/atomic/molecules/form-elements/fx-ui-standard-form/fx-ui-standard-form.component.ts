import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FxUiInputGroupComponent } from '../fx-ui-input-group/fx-ui-input-group.component';

@Component({
  selector: 'app-fx-ui-standard-form',
  standalone: true,
  imports: [CommonModule, FxUiInputGroupComponent],
  templateUrl: './fx-ui-standard-form.component.html',
  styleUrl: './fx-ui-standard-form.component.scss',
})
export class FxUiStandardFormComponent {}
