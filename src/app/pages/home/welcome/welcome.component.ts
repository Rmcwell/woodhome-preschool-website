import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../../../lucide.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-home',
  standalone: true,
  imports: [
    CommonModule,
    LucideIconsModule,
    RouterModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class HomeWelcomeComponent {
  
}