import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-fx-ui-input-checkbox',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fx-ui-input-checkbox.component.html',
  styleUrl: './fx-ui-input-checkbox.component.scss',
})
export class FxUiInputCheckboxComponent implements OnInit {

  ngOnInit(): void { }

}
