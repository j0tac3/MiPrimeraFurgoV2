import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CamperizarComponent } from "./pages/camperizar/camperizar.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { ArticulosComponent } from "./pages/articulos/articulos.component";
import { AdministrarComponent } from "./pages/administrar/administrar.component";
import { ADMINISTRAR_ROUTES } from './pages/administrar/administrar.routes';
/* Rutas de administracion */

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'camperizar', component: CamperizarComponent, },
  {path: 'blog', component: BlogComponent },
  {path: 'articulos', component: ArticulosComponent },
  {path: 'administrar', component: AdministrarComponent,
    children: ADMINISTRAR_ROUTES,
  },
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
