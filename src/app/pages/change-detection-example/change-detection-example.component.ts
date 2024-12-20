import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NewTaskComponent } from '../forms/new-task/new-task.component';

@Component({
  selector: 'app-change-detection-example',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NewTaskComponent],
  templateUrl: './change-detection-example.component.html',
  styleUrl: './change-detection-example.component.scss',
})
export class ChangeDetectionExampleComponent {
  @Input() selectedTechnicians: string[] = [];
}
