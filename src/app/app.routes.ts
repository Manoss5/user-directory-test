import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  // This route could also lead to a 404 not found page
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
