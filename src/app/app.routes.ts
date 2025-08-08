import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProgramsPage } from './pages/programs/programs';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programs', component: ProgramsPage },
  { path: '**', redirectTo: '' } // Optional: fallback for unknown routes
];