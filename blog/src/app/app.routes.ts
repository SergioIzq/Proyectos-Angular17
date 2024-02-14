import { Routes } from '@angular/router';
import { CreacionPostComponent } from './post/creacion-post/creacion-post.component';
import { ListadoComponent } from './post/listado/listado.component';
import { ActualizarPostComponent } from './post/actualizar-post/actualizar-post.component';
import { VerPostComponent } from './post/ver-post/ver-post.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent },
    { path: 'new-post', component: CreacionPostComponent },
    { path: 'update-post/:id', component: ActualizarPostComponent },
    { path: 'view-post/:id', component: VerPostComponent }
];
