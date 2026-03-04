import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-base',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.base.component.html',
  styleUrls: ['./contact.base.component.css']
})
export class BaseContactComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName:  new FormControl('', Validators.required),
    email:     new FormControl('', [Validators.required, Validators.email]),
    phone:     new FormControl('', Validators.required),
    childAge:  new FormControl('', Validators.required),
    message:   new FormControl('', Validators.required),
  });

  get isFormValid() {
    return this.contactForm.valid;
  }

  async onSubmit() {
    if (!this.contactForm.valid) return;
    (document.querySelector('form[name="contact"]') as HTMLFormElement).submit();
  }
}