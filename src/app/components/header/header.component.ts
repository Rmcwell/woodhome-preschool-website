import { Component } from '@angular/core';
import { LucideIconsModule } from '../../lucide.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-base',
  standalone: true,
  imports: [
    LucideIconsModule,
    RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    websiteLogo: string = 'assets/images/websiteLogo.webp';
    
    isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
    }