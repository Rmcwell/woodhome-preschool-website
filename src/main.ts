import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // Scrolls to top on navigation
        anchorScrolling: 'enabled'           // Allows #anchor navigation
      })
    )
  ]
}).catch(err => console.error(err));