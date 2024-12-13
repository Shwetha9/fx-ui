import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FxUiDropdownComponent } from 'src/app/ui-lib/atomic/molecules/form-elements/fx-ui-dropdown/fx-ui-dropdown.component';
import { FxUiInputGroupComponent } from 'src/app/ui-lib/atomic/molecules/form-elements/fx-ui-input-group/fx-ui-input-group.component';
import { FxUiToggleSwitchComponent } from 'src/app/ui-lib/atomic/molecules/fx-ui-toggle-switch/fx-ui-toggle-switch.component';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { FxUiButtonComponent } from '../../../ui-lib/atomic/atoms/fx-ui-button/fx-ui-button.component';
import { ToastModule } from 'primeng/toast';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    CommonModule,
    FxUiInputGroupComponent,
    FxUiToggleSwitchComponent,
    FxUiDropdownComponent,
    EditorModule,
    CalendarModule,
    FxUiButtonComponent,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
  providers: [MessageService],
})
export class NewTaskComponent {
  private fb = inject(FormBuilder); // Use inject() instead of constructor
  private messageService = inject(MessageService); // Use inject() instead of constructor

  taskForm: FormGroup = this.fb.group({
    taskTitle: ['', Validators.required],
    site: [''],
    company: [''],
    technician: [''],
    assignToMe: [false],
    taskStatus: ['Pending', Validators.required],
    taskDescription: [''],
    taskNotes: [''],
    startDate: new Date(),
  });

  createTask() {
    if (this.taskForm.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Task Created Successfully',
      });
      return;
    }
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please fill in all required fields',
    });
  }

  siteOptions: string[] = [
    '123 Maple Street, Springfield, IL 62701',
    '456 Oak Avenue, Riverdale, NY 10471',
    '789 Pine Lane, Lakeview, CA 90210',
    '101 Elm Drive, Meadowbrook, TX 75001',
    '202 Cedar Boulevard, Mountainview, CO 80401',
    '303 Birch Road, Brookfield, WI 53005',
    '404 Willow Court, Sunnyside, FL 33101',
    '505 Aspen Way, Crestview, OR 97035',
    '606 Chestnut Circle, Hillside, GA 30303',
    '707 Redwood Trail, Baytown, WA 98004',
    '808 Poplar Place, Seaside, MA 01970',
    '909 Cypress Grove, Woodland, MI 48888',
    '1001 Magnolia Terrace, Parkland, NJ 07001',
    '1102 Juniper Crescent, Riverview, MO 63010',
    '1203 Fir Street, Silverlake, AZ 85001',
    '1304 Spruce Alley, Greenfield, VT 05641',
    '1405 Hickory Lane, Elmwood, NM 87501',
    '1506 Alder Parkway, Ridgewood, MN 55101',
    '1607 Sycamore Hill, Oakwood, PA 19001',
    '1708 Ash Terrace, Clearview, NV 89101',
  ];

  technicians: string[] = [
    'John Appleseed',
    'Jane Doe',
    'James Smith',
    'Emily Jones',
    'Michael Johnson',
    'Jessica Brown',
    'William Davis',
    'Patricia Miller',
    'Richard Wilson',
    'Jennifer Moore',
    'Charles Taylor',
    'Elizabeth Anderson',
    'Matthew Thomas',
    'Laura Jackson',
  ];

  companyOptions: string[] = [
    'PixelParadise',
    'CodeHive',
    'DesignSphere',
    'CloudVista',
    'TechHaven',
    'IdeaForge',
    'LaunchDock',
    'SkylineSites',
    'NexusNodes',
    'StreamScape',
    'QuantumPulse',
    'CyberNest',
    'EchoGrid',
    'FusionFrame',
    'VisionVault',
    'SolarShift',
    'MetaMingle',
    'DynamicDome',
    'InnoBridge',
    'ZenWebworks',
  ];
}
