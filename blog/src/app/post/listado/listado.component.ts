import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { PostService } from '../post.service';
import { CreacionPostComponent } from '../creacion-post/creacion-post.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, CreacionPostComponent, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAll().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error al obtener los posts:', error);
      }
    );
  }

  eliminarPost(id: number) {
    this.postService.delete(id).subscribe(
      (response: any) => {
        alert(`Post borrado correctamente.`);
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
          this.posts.splice(index, 1); // Eliminar el post del arreglo 'posts'
        }
      },
      (error) => {
        console.error('Error al borrar el post:', error);
      }
    );
  }

}


