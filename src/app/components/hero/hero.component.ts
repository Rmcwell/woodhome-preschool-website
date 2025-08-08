import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-hero-base',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class BaseHeroComponent {
  @Input() title: string = 'Welcome';
  @Input() subtitle: string = 'Default subtitle text';
  @Input() description: string = 'Default description text';
}