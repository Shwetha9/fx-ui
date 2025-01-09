import { Component, type OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
@Component({
  selector: 'tasks-list',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent implements OnInit {
  ngOnInit(): void {}
}
