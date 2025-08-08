import { Component  } from '@angular/core';
import { LucideIconsModule } from '../../lucide.module';

@Component({
  selector: 'app-footer-base',
  standalone: true,
  imports: [LucideIconsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

    currentYear = new Date().getFullYear();


}