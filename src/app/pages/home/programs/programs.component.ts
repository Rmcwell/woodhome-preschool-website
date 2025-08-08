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
      ageRange: '2 – 5 yrs',
      imgSrc: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      borderColor: '#fbbf24',
      iconBg: '#fef3c7',
      iconLetter: 'M',
      iconColor: '#b45309',
      description: 'A nurturing environment focused on social skills, language development, sensory exploration, and developing independence.',
      features: ['Language development activities', 'Sensory exploration', 'Motor skills development'],
      linkColor: '#d97706'
    },
    {
      title: 'Afternoon Program',
      ageRange: '3 – 5 yrs',
      imgSrc: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      borderColor: '#60a5fa',
      iconBg: '#dbebfe',
      iconLetter: 'A',
      iconColor: '#1e3a8a',
      description: 'Building foundational skills through play-based learning, art, music, early literacy, and social skill development.',
      features: ['Pre‑literacy activities', 'Creative arts & music', 'Social skill development'],
      linkColor: '#2563eb'
    },
    {
      title: 'Before/Aftercare Program',
      ageRange: '2 – 5 yrs',
      imgSrc: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      borderColor: '#34d399',
      iconBg: '#dcfce7',
      iconLetter: 'B',
      iconColor: '#065f46',
      description: 'Supportive care that extends the day with enriching activities, social development, and a smooth transition between home and school.',
      features: ['Kindergarten readiness', 'Early math & science', 'Advanced social skills'],
      linkColor: '#059669'
    }
  ];
}
