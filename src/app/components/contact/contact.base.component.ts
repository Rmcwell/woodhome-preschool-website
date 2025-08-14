import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-base',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.base.component.html',
  styleUrls: ['./contact.base.component.css']
})
export class BaseContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      childAge: ['', Validators.required],
      message: ['', Validators.required],
      botField: [''] // Honeypot field
    });
  }

  formSubmitted = false;

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.formSubmitted = true;

      // Optionally reset the form
      this.contactForm.reset();
    }
  }

}