import { Component  } from '@angular/core';
import { LucideIconsModule } from '../../lucide.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideIconsModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})

export class FooterComponent {

    currentYear = new Date().getFullYear();


}