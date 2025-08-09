import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeroComponent } from '../../components/hero/hero.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [
    CommonModule,
    BaseHeroComponent,
    RouterModule
  ],
  templateUrl: './programs.html',
  styleUrls: ['./programs.css']
})
export class ProgramsPage {
}