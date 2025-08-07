import { NgModule } from '@angular/core';
import { LucideAngularModule,
         Phone,
         Mail,
         House,
         Clock,
         User,
         BookOpen,
         MessageCircle,
         Star
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
      Star
    })
  ],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}