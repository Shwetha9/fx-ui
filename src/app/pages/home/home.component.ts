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

  items: MenuItem[] = [
    {
      label: 'Router',
      icon: 'pi pi-palette',
      items: [
        {
          label: 'Installation',
          route: '/installation',
        },
        {
          label: 'Configuration',
          route: '/configuration',
        },
      ],
    },
    {
      label: 'Programmatic',
      icon: 'pi pi-link',
      command: () => {
        this.router.navigate(['/installation']);
      },
    },
    {
      label: 'External',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Angular',
          url: 'https://angular.io/',
        },
        {
          label: 'Vite.js',
          url: 'https://vitejs.dev/',
        },
      ],
    },
  ];

  ngOnInit() {
    // 2. Subscribes to the observable directly and sets the products array as a signal
    this.dataService.getData().subscribe({
      next: (res) => {
        this.products$$.set(res.products); // Updates the reactive signal with the new products data
        this.products = res.products; // Updates a plain property with the new products data
      },
      error: (err) => {
        console.log(err); // Logs any errors during the HTTP request
      },
      complete: () => {
        console.log('complete'); // Logs when the observable completes
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
