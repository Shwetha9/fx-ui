import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, type OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fx-ui-rich-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-ui-rich-text.component.html',
  styleUrl: './fx-ui-rich-text.component.scss',
})
export class FxUiRichTextComponent {
  richText = input<string>('');
  sanitize = inject(DomSanitizer);
  richtextSanitized = computed(() =>
    this.sanitize.bypassSecurityTrustHtml(this.richText()),
  );
}
