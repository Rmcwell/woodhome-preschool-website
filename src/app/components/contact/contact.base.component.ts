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

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default Angular handling

    if (this.contactForm.valid) {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          this.formSubmitted = true;
          this.contactForm.reset();
        })
        .catch((error) => alert("Error submitting form: " + error));
    }
  }

}