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
  CalendarClock
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
      CalendarClock
    })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule { }