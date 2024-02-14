import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-creacion-post',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './creacion-post.component.html',
  styleUrls: ['./creacion-post.component.css']
})

export class CreacionPostComponent {

  submitted = false;

  constructor(private _fb: FormBuilder, private postService: PostService, private router: Router) { }

  registerForm = this._fb.group(
    {
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required]],
    },
  );

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // No enviar si el formulario no está correctamente validado
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value.title);
    console.log(this.registerForm.value.body);
    // Inicializar newPost con un ID inicial de tipo number
    const newPost: Post = {
      id: 0, // Id provisional ya que en create le asigno el que le corresponde
      title: this.registerForm.value.title ? this.registerForm.value.title.toString() : '',
      body: this.registerForm.value.body ? this.registerForm.value.body.toString() : ''
    };

    this.postService.create(newPost).subscribe(
      (response: any) => {
        console.log('Post creado exitosamente:', response);

        // Asignar el ID obtenido de la respuesta al objeto newPost
        newPost.id = response.id;

        alert(`El post se ha creado correctamente: ID ${newPost.id}, Título: ${newPost.title}, Cuerpo: ${newPost.body}`);
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
