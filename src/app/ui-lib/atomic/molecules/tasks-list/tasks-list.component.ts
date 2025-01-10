import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [PanelModule, CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent implements OnInit {
  header$$ = input<string>('', { alias: 'header' });
  description$$ = input<string>('', { alias: 'description' });
  footerContent$$ = input<string[]>([], { alias: 'footerContent' });
  ngOnInit(): void {
    return;
  }
}
