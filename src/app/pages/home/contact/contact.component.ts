import { Component } from '@angular/core';
import { BaseContactComponent } from '../../../components/contact/contact.base.component';

@Component({
  selector: 'app-contact-home',
  standalone: true,
  imports: [BaseContactComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class HomeContactComponent {

}