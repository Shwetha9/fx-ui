import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-fx-ui-input-text',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fx-ui-input-text.component.html',
  styleUrl: './fx-ui-input-text.component.scss',
})
export class FxUiInputTextComponent implements OnInit {

  ngOnInit(): void { }

}
