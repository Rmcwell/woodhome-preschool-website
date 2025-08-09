import { Component } from '@angular/core';
import { BaseHeroComponent } from '../../components/hero/hero.component';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  photoUrl: string;
  emoji: string;
  altText: string;
}

@Component({
  selector: 'app-about',
  imports: [
    BaseHeroComponent
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.css']

})
export class AboutPage {
  teamMembers: TeamMember[] = [
    {
      name: 'Kristanna Jones',
      title: 'Lead Teacher & Owner',
      description: 'Mrs. Kristanna brings a rich background in child psychology, communications, and educational leadership to create a safe, fun, and emotionally supportive environment where every child feels confident, smart, and loved.',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      emoji: '👑',
      altText: 'Kristanna Jones'
    },
    {
      name: 'Sunny Fisher',
      title: 'Lead Teacher',
      description: 'Former owner of Woodhome Preschool for over 25 years, Mrs. Sunny continues to bring creativity, warmth, and a family-like spirit to the classroom, touching the hearts of every child she teaches.',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      emoji: '👩‍🏫',
      altText: 'Sunny Fisher'
    },
    {
      name: 'Abbie Matson',
      title: 'Assistant Teacher',
      description: 'Since joining in 2021, Ms. Abbie’s fun-loving nature, responsiveness, and deep care for her students have made her an irreplaceable favorite in the nurturing Woodhome Preschool environment.',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      emoji: '🤝',
      altText: 'Abbie Matson'
    },
    {
      name: 'Caroline Mitrus',
      title: 'Assistant Teacher',
      description: 'With strong classroom management and a playful, empathetic approach, Mrs. Caroline builds lasting connections and makes learning joyful in Woodhome Preschool’s family-like atmosphere.',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      emoji: '🎨',
      altText: 'Caroline Mitrus'
    },
    {
      name: 'Julie McCloskey',
      title: 'Operations Manager',
      description: 'After 20 years in the classroom, Mrs. Julie now serves as Operations Manager, using her deep love for children and school history to expertly oversee communication, billing, and organizational needs.',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      emoji: '📋',
      altText: 'Julie McCloskey'
    },
    {
      name: 'Kate Fitzgerald',
      title: 'Substitute Teacher',
      description: 'A retired director with over 20 years of preschool experience, Mrs. Kate now brings joy and energy as a beloved substitute teacher and fun-maker at Woodhome Preschool.',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      emoji: '🎉',
      altText: 'Kate Fitzgerald'
    }
  ];
}