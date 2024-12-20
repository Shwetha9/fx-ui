import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewTaskComponent } from './pages/forms/new-task/new-task.component';
import { ChangeDetectionExampleComponent } from './pages/change-detection-example/change-detection-example.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'create-task',
    component: NewTaskComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'ChangeDetectionExampleComponent',
  },
];
