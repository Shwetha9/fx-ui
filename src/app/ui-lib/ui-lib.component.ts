import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'fx-ui-lib',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ui-lib.component.html',
  styleUrl: './ui-lib.component.scss',
})
export class UiLibComponent { }
