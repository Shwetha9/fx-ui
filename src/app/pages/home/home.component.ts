import { Component, OnInit, inject } from '@angular/core';
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
import { PanelModule } from 'primeng/panel';
import { AnimateModule } from 'primeng/animate';

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
    PanelModule,
  ],
  animations: [],
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;
  private router = inject(Router);

  ngOnInit() {
    this.items = [
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
  }
}
