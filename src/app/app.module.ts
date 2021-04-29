import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { CamperizarComponent } from './pages/camperizar/camperizar.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/administrar/posts/posts.component';
import { TagsComponent } from './pages/administrar/tags/tags.component';
import { UsersComponent } from './pages/administrar/users/users.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSectionComponent } from './components/forms-components/form-section/form-section.component';
import { InputTagsComponent } from './components/forms-components/input-tags/input-tags.component';
import { InputImageHeaderComponent } from './components/forms-components/input-image-header/input-image-header.component';
import { SectionMiniatureComponent } from './components/forms-components/section-miniature/section-miniature.component';
import { SectionsRegionComponent } from './components/forms-components/sections-region/sections-region.component';
import { NewPostFormComponent } from './components/forms-components/new-post-form/new-post-form.component';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TablaPostComponent } from './components/tablas/tabla-post/tabla-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrarComponent,
    ArticulosComponent,
    CamperizarComponent,
    HomeComponent,
    PostsComponent,
    TagsComponent,
    UsersComponent,
    BackButtonComponent,
    FooterComponent,
    FormSectionComponent,
    InputTagsComponent,
    InputImageHeaderComponent,
    SectionMiniatureComponent,
    SectionsRegionComponent,
    NewPostFormComponent,
    MenuOptionComponent,
    BlogComponent,
    NavbarComponent,
    HeaderComponent,
    TablaPostComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
