import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';

@Component({
  selector: 'app-testimonials-home',
  standalone: true,
  imports: [CommonModule, LucideIconsModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class HomeTestimonialsComponent {
  stars = Array(5);

  testimonials = [
    {
      initials: 'CK',
      name: 'Carla K.',
      role: 'Parent',
      text: [
        '“I LOVE the teachers at Woodhome! My son cries when he can’t go to school for some reason – I am so grateful they’ve started him out with a love of attending school.”'
      ],
      gradientClass: 'yellow-card',
      iconClass: 'icon-yellow',
      avatarClass: 'avatar-yellow'
    },
    {
      initials: 'TC',
      name: 'Tina C.',
      role: 'Parent',
      text: [
        '“Both of my boys started going to Woodhome this summer for camp/daycare and they loved it! My oldest moved on to kindergarten but my youngest is in the pre k 2 program and loves it and the ladies that work here are FANTASTIC!! Would recommend this daycare to anyone.”'
      ],
      gradientClass: 'red-card',
      iconClass: 'icon-red',
      avatarClass: 'avatar-red'
    },
    {
      initials: 'KS',
      name: 'Kenya S.',
      role: 'Parent of Toddler',
      text: [
        '“Love the staff and love that my daughter runs out to me with a smile on her face each time. They keep the kids happy and she loves to learn.”'
      ],
      gradientClass: 'blue-card',
      iconClass: 'icon-blue',
      avatarClass: 'avatar-blue'
    }
  ];


}
