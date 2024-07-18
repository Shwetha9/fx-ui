import { CommonModule } from '@angular/common';
import { Component, InputSignal, input, type OnInit } from '@angular/core';
import { FxUiButtonComponent } from '../../atoms/fx-ui-button/fx-ui-button.component';
interface CardFooter {
  footerRichText?: string;
  footerButton?: string;
}
@Component({
  selector: 'app-fx-ui-card',
  standalone: true,
  imports: [CommonModule, FxUiButtonComponent],
  templateUrl: './fx-ui-card.component.html',
  styleUrl: './fx-ui-card.component.scss',
})
export class FxUiCardComponent implements OnInit {
  cardTitle = input.required<string>();
  cardDescription = input.required<string>();
  cardImage = input<string>();
  cardImgAltText = input<string>();
  cardFooter = input<CardFooter>();

  ngOnInit(): void {
    return;
  }
}
