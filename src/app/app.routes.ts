import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProgramsPage } from './pages/programs/programs';
import { ContactPage } from './pages/contact/contact';
import { AboutPage } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programs', component: ProgramsPage },
  { path: 'contact', component: ContactPage },
  { path: 'about', component: AboutPage },
  { path: '**', redirectTo: '' }
];