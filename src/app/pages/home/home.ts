import { Component } from '@angular/core';
import { HomeHeroComponent } from './hero/hero.component';
import { HomeTestimonialsComponent } from './testimonials/testimonials.component';
import { HomeWelcomeComponent } from './welcome/welcome.component';
import { HomeProgramsComponent } from './programs/programs.component';
import { HomeContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeTestimonialsComponent,
    HomeWelcomeComponent,
    HomeProgramsComponent,
    HomeContactComponent
],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
}
