import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from "./posts/posts.component";
import { TagsComponent } from "./tags/tags.component";
import { CatalogComponent } from './catalog/catalog.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CamperizacionComponent } from './camperizacion/camperizacion.component';

export const ADMINISTRAR_ROUTES: Routes = [
    {path: 'etiquetas', component: TagsComponent },
    {path: 'entradas', component: PostsComponent },
    {path: 'catalogo', component: CatalogComponent },
    {path: 'usuarios', component: UsuariosComponent },
    {path: 'camperizacion', component: CamperizacionComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'administrat'}
];