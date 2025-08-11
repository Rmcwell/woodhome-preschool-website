import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-programs-home',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule,
    RouterModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class HomeProgramsComponent {
  programs = [
    {
      title: 'Morning Program',
      ageRange: '2 – 4 yrs',
      imgSrc: 'https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      borderColor: '#60a5fa',
      iconBg: '#dbebfe',
      iconLetter: 'M',
      iconColor: '#1e3a8a',
      description: 'A nurturing space where children build independence, social skills, and creativity. Through purposeful indoor and outdoor play, they explore, imagine, and lay the foundations for learning.',
      features: ['Language enrichment & early literacy', 'Sensory exploration & creative play', 'Motor skills development'],
    },
    {
      title: 'Afternoon Program',
      ageRange: '3 – 4 yrs',
      imgSrc: 'https://plus.unsplash.com/premium_photo-1663090965547-f3dccf770b3b?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      borderColor: '#fbbf24',
      iconBg: '#fef3c7',
      iconLetter: 'A',
      iconColor: '#b45309',
      description: 'An engaging, collaborative program that builds on each child’s current skills. Following the same themes as the morning class, it offers extended learning and enrichment through varied curriculum approaches.',
      features: ['Shapes, letters & numbers recognition', 'Hands-on activities across multiple subjects', 'Kindergarten readiness'],
    },
    {
      title: 'Before/Aftercare Program',
      ageRange: '2 – 4 yrs',
      imgSrc: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      borderColor: '#34d399',
      iconBg: '#dcfce7',
      iconLetter: 'B',
      iconColor: '#065f46',
      description: 'Supportive care that extends the day with enriching activities, social development, and a smooth transition between home and school.',
      features: ['Social skill development', 'Morning readiness activities & gentle transitions', 'Afternoon creative projects & active play'],
    }
  ];
}
