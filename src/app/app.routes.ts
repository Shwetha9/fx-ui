import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewTaskComponent } from './pages/forms/new-task/new-task.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'create-task',
    component: NewTaskComponent,
  },
  {
    path: 'home',
    component: NewTaskComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
