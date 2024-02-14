import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-ver-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './ver-post.component.html',
  styleUrl: './ver-post.component.css'
})
export class VerPostComponent {

  registerForm: FormGroup;
  @Input() id = this.rutaActiva.snapshot.params['id'];
  title = "";
  body = "";
  submitted = false;

  constructor(private _fb: FormBuilder, private postService: PostService, private rutaActiva: ActivatedRoute, private router: Router) {
    this.registerForm = this._fb.group(
      {
        title: [this.title, [Validators.required, Validators.minLength(3)]],
        body: [this.body, [Validators.required]],
      },
    );

  }

  ngOnInit() {
    this.postService.find(this.id).subscribe(
      (response: any) => {
        this.title = response.title;
        this.body = response.body;

        // Actualizar el valor del formulario después de obtener los datos del servicio
        this.registerForm.patchValue({
          title: this.title,
          body: this.body
        });
      }
    );
  }
}
