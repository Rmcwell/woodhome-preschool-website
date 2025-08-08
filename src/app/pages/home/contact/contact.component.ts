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

    onSubmit(event: Event) {
    // The form will be handled by Netlify automatically
    // This method can be used for additional client-side validation or tracking
    console.log('Form submitted');
  }
    }