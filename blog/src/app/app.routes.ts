import { Routes } from '@angular/router';
import { CreacionPostComponent } from './post/creacion-post/creacion-post.component';
import { ListadoComponent } from './post/listado/listado.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent },
    { path: 'new-post', component: CreacionPostComponent },
];