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
export class HomeComponent
  implements OnInit, OnDestroy, AfterViewInit, AfterContentInit
{
  private router = inject(Router);
  dataService = inject(DataService);
  products$: Observable<Product[]> | undefined;
  products$$ = signal<Product[]>([]);
  tasks$$ = signal<any[]>([]);
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
    console.log('I am initialized');
    // 1. Returns an observable stream of products
    this.products$ = this.dataService.getData().pipe(
      takeUntilDestroyed(this.destroyRef), // Automatically unsubscribes when the component is destroyed
      map((data) => data.products), // Transforms the response to extract just the products array
    );

    // 2. Subscribes to the observable directly and sets the products array as a signal
    this.dataService.getData().subscribe({
      next: (res) => {
        this.products$$.set(res.products); // Updates the reactive signal with the new products data
        this.products = res.products; // Updates a plain property with the new products data
        console.log(res.products); // Logs the products array
        console.log(res);
      },
      error: (err) => {
        console.log(err); // Logs any errors during the HTTP request
      },
      complete: () => {
        console.log('complete'); // Logs when the observable completes
      },
    });

    this.dataService.getTasks().subscribe({
      next: (res) => {
        this.tasks$$.set(res);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  ngOnChanges() {
    console.log('Something changed');
  }
  ngAfterContentInit() {
    console.log('Content initialized');
  }
  ngAfterViewInit() {
    console.log('View initialized');
  }
  ngOnDestroy() {
    console.log('I am destroyed');
  }

  //https://au-devops-v21.myqa.simprosuite.com/api/mobile/v1.0/companies/0/tasks/?module=TM
}
