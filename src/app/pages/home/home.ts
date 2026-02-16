import { Component } from '@angular/core';
import { HomeHeroComponent } from './hero/hero.component';
import { HomeTestimonialsComponent } from './testimonials/testimonials.component';
import { HomeWelcomeComponent } from './welcome/welcome.component';
import { HomeAwardsComponent } from './awards/awards.component';
import { HomeContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeroComponent,
    HomeTestimonialsComponent,
    HomeWelcomeComponent,
    HomeAwardsComponent,
    HomeContactComponent
],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
}
