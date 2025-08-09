import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/pages/home/home';
import { ProgramsPage } from './app/pages/programs/programs';
import { ContactPage } from './app/pages/contact/contact'
import 'zone.js';
import { AboutPage } from './app/pages/about/about';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'programs', component: ProgramsPage },
      { path: 'contact', component: ContactPage },
      { path: 'about', component: AboutPage },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch(err => console.error(err));