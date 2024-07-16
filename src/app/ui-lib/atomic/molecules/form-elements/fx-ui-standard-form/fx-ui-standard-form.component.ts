import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-fx-ui-standard-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fx-ui-standard-form.component.html',
  styleUrl: './fx-ui-standard-form.component.scss',
})
export class FxUiStandardFormComponent implements OnInit {

  ngOnInit(): void { }

}
