import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  registerForm: FormGroup;
  submitted = false;

  constructor(private _fb: FormBuilder) {
    this.registerForm = this._fb.group({
      tel: ['', [Validators.required, Validators.minLength(9)]],
      nombre: ['', [Validators.required]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // No enviar si el formulario no está correctamente validado
    if (this.registerForm.invalid) {
      return;
    }

    // Obtener los valores del formulario
    const formData = this.registerForm.value;

    alert(`Gracias por cumplimentar el formulario ${formData.nombre}, nos pondremos en contacto contigo en breve.`);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
