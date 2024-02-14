import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
  
  constructor(private _fb: FormBuilder, private postService:PostService) { }

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
    // Inicializar newPost con un ID inicial de tipo number (puede ser null o undefined)
    // const newPost: Post = {
    //   id: null, 
    //   title: this.registerForm.value.title,
    //   body: this.registerForm.value.body
    // };
  
    // this.postService.create(newPost).subscribe(
    //   (response: any) => {
    //     console.log('Post creado exitosamente:', response);
  
    //     // Asignar el ID obtenido de la respuesta al objeto newPost
    //     newPost.id = response.id;
  
    //     console.log('ID del nuevo post guardado en newPost:', newPost.id);
  
    //     // Aquí podrías redirigir a la página de visualización de posts o realizar alguna otra acción
    //   },
    //   (error) => {
    //     console.error('Error al crear el post:', error);
    //   }
    // );
  }  

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
