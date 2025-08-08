import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-base',
  templateUrl: './contact.base.component.html',
  styleUrls: ['./contact.base.component.css']
})
export class BaseContactComponent {
  
  constructor() { }

  onSubmit(event: Event) {
    // The form will be handled by Netlify automatically
    // This method can be used for additional client-side validation or tracking
    console.log('Contact section form submitted');
  }
}