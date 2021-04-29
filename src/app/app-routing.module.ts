import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CamperizarComponent } from "./pages/camperizar/camperizar.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ArticulosComponent } from "./pages/articulos/articulos.component";
import { AdministrarComponent } from "./pages/administrar/administrar.component";
/* Rutas de administracion */
import { PostsComponent } from "./pages/administrar/posts/posts.component";
import { TagsComponent } from "./pages/administrar/tags/tags.component";
import { UsersComponent } from "./pages/administrar/users/users.component";

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'camperizar', component: CamperizarComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'articulos', component: ArticulosComponent },
  {path: 'administrar', component: AdministrarComponent },
  {path: 'administrar/etiquetas', component: TagsComponent },
  {path: 'administrar/entradas', component: PostsComponent },
  {path: 'usuarios', component: UsersComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
