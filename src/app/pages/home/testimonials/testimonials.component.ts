import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';

@Component({
  selector: 'app-testimonials-home',
  standalone: true,
  imports: [CommonModule, LucideIconsModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class HomeTestimonialsComponent implements OnInit {
  stars = Array(5);
  currentIndex = 0;
  visibleCount = 3;
  touchStartX = 0;

  testimonials = [
    {
      initials: 'TO',
      name: 'Tiffany O.',
      role: 'Parent',
      text: ['"My daughter loves this school! The children learn so much and my daughter is writing her name and letters within the first month. This is an excellent center."'],
      gradientClass: 'yellow-card',
      iconClass: 'icon-yellow',
      avatarClass: 'avatar-yellow'
    },
    {
      initials: 'KW',
      name: 'Kimmie W.',
      role: 'Parent',
      text: ['"Woodhome Pre-K has been a perfect fit for our family. My current kindergartener went through all three class offerings (2s, 3s, and 4s) and thrived each year, building friendships and developing vocabulary and foundational school concepts. Now, my 2-year-old is doing the same and equally enjoys her time there. I especially appreciate the à la carte before- and after-care options. Woodhome is very flexible, allowing me to drop off early or pick up late when needed, all at a fair rate. Woodhome truly sets children up for success, and we couldn\'t be happier with our experience."'],
      gradientClass: 'red-card',
      iconClass: 'icon-red',
      avatarClass: 'avatar-red'
    },
    {
      initials: 'GK',
      name: 'Gina K.',
      role: 'Parent',
      text: ['"Woodhome Preschool has helped my son gain so much confidence and independence by creating a safe and nurturing environment for him to learn and grow. The classrooms are colorful and full of fun information for young minds to absorb. I\'m so thankful we found this school and for teachers who feel like family!"'],
      gradientClass: 'blue-card',
      iconClass: 'icon-blue',
      avatarClass: 'avatar-blue'
    },
    {
      initials: 'KS',
      name: 'Kenya S.',
      role: 'Parent',
      text: ['"Love the staff and love that my daughter runs out to me with a smile on her face each time. They keep the kids happy and she loves to learn."'],
      gradientClass: 'yellow-card',
      iconClass: 'icon-yellow',
      avatarClass: 'avatar-yellow'
    }
  ];

  ngOnInit() {
    this.updateVisibleCount();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleCount();
    if (this.currentIndex > this.maxIndex) {
      this.currentIndex = this.maxIndex;
    }
  }

  updateVisibleCount() {
    const w = window.innerWidth;
    if (w < 640) {
      this.visibleCount = 1;
    } else if (w < 1024) {
      this.visibleCount = 2;
    } else {
      this.visibleCount = 3;
    }
  }

  get maxIndex(): number {
    return Math.max(0, this.testimonials.length - this.visibleCount);
  }

  get slideTranslate(): string {
    const pct = (this.currentIndex / this.testimonials.length) * 100;
    return `translateX(-${pct}%)`;
  }

  get dotArray(): number[] {
    return Array(this.maxIndex + 1);
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next() {
    if (this.currentIndex < this.maxIndex) this.currentIndex++;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].clientX;
  }

  onTouchEnd(e: TouchEvent) {
    const delta = this.touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? this.next() : this.prev();
    }
  }
}