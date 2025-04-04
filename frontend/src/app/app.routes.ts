import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UserListComponent },
  { path: 'usuarios/novo', component: UserFormComponent },
  { path: 'usuarios/editar/:id', component: UserFormComponent },
];
