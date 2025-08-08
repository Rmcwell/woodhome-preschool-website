import { Component } from '@angular/core';
import { BaseContactComponent } from '../../components/contact/contact.base.component';
import { BaseHeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-contact',
  imports: [
    BaseContactComponent,
    BaseHeroComponent
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
  
})
export class ContactPage {
  
}