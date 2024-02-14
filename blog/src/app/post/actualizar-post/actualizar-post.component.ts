import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-actualizar-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './actualizar-post.component.html',
  styleUrl: './actualizar-post.component.css'
})
export class ActualizarPostComponent {

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

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // No enviar si el formulario no está correctamente validado
    if (this.registerForm.invalid) {
      return;
    }

    const newPost: Post = {
      id: this.id, // Id provisional ya que en create le asigno el que le corresponde
      title: this.registerForm.value.title ? this.registerForm.value.title.toString() : '',
      body: this.registerForm.value.body ? this.registerForm.value.body.toString() : ''
    };

    this.postService.update(this.id, newPost).subscribe(
      (response: any) => {
        alert(`Post actualizado correctamente: Título: ${newPost.title}, Cuerpo: ${newPost.body}`)
        // Redirige a una ruta relativa
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Error al crear el post:', error);
      }
    );
  }


  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
