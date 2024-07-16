import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-fx-ui-input-radio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fx-ui-input-radio.component.html',
  styleUrl: './fx-ui-input-radio.component.scss',
})
export class FxUiInputRadioComponent implements OnInit {

  ngOnInit(): void { }

}
