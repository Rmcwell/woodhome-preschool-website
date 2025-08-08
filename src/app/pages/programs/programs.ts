import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [
    CommonModule,
    BaseHeroComponent
  ],
  templateUrl: './programs.html',
  styleUrls: ['./programs.css']
})
export class ProgramsPage {
}