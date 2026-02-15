import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Phone,
  Mail,
  House,
  Clock,
  User,
  BookOpen,
  MessageCircle,
  Star,
  CalendarClock,
  Sprout,
  Rocket,
  Facebook
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Phone,
      Mail,
      House,
      Clock,
      User,
      BookOpen,
      MessageCircle,
      Star,
      CalendarClock,
      Sprout,
      Rocket,
      Facebook
    })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule { }