import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './pages/home/hero/hero';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials';
import { WelcomeComponent } from './pages/home/welcome/welcome';
import { ProgramsComponent } from './pages/home/programs/programs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent, 
    HeroComponent,
    TestimonialsComponent,
    WelcomeComponent,
    ProgramsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
