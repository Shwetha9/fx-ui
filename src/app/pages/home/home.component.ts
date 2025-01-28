import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DestroyRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AnimateModule } from 'primeng/animate';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DataService } from 'src/app/services/api-service';
import { Product } from '../../models/product.model';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { TasksListComponent } from 'src/app/ui-lib/atomic/molecules/tasks-list/tasks-list.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { TaskResponse } from 'src/app/models/tasks.model';
import { transformTasksApiRes } from 'src/app/api-logic/tasks-dto';
import { navItems } from './home.component.static';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    AnimateModule,
    CommonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    TasksListComponent,
  ],
  providers: [DataService],
  animations: [],
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  dataService = inject(DataService);
  products$: Observable<Product[]> | undefined;
  products$$ = signal<Product[]>([]);
  tasks$$ = signal<TaskResponse[]>([]);
  products: Product[] = [];
  destroyRef = inject(DestroyRef);
  @Input() title = 'Home';

  items: MenuItem[] = navItems;

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (res) => {
        this.products$$.set(res.products);
        this.products = res.products;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });

    this.dataService
      .getTasks()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          const resDto = transformTasksApiRes(res);
          console.log(resDto);
          this.tasks$$.set(resDto);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}

// this.dataService
//   .getTasks()
//   .pipe(
//     map((res) => res.tasks.filter((task) => task.completed)), // Extract only completed tasks
//     takeUntilDestroyed(this.destroyRef)
//   )
//   .subscribe({
//     next: (completedTasks) => {
//       console.log(completedTasks); // Log completed tasks
//       this.tasks$$.set(completedTasks); // Update the state with completed tasks
//     },
//     error: (err) => {
//       console.error('Error fetching tasks:', err);
//     },
//     complete: () => {
//       console.log('Task fetching completed.');
//     },
//   });

// this.dataService
//   .getTechnicians()
//   .pipe(
//     filter((res) => res.technicians && res.technicians.length > 0), // Proceed only if technicians exist
//     map((res) => res.technicians), // Extract the list of technicians
//     takeUntilDestroyed(this.destroyRef)
//   )
//   .subscribe({
//     next: (technicians) => {
//       console.log(technicians); // Log the list of technicians
//       this.technicians$$.set(technicians); // Update the state with the list of technicians
//     },
//     error: (err) => {
//       console.error('Error fetching technicians:', err);
//     },
//     complete: () => {
//       console.log('Technician fetching completed.');
//     },
//   });
