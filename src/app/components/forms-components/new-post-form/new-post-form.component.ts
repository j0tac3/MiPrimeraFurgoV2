import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EtiquetaModel } from 'src/app/models/etiqueta.model';
import { PostModel } from 'src/app/models/post.model';
import { SeccionImageModel } from 'src/app/models/SeccionImage.model';
import { PostsService } from 'src/app/service/posts.service';
import { TagsService } from 'src/app/service/tags.service';
import { TagPostService } from 'src/app/service/tag-post.service';
import { EtiquetaPostModel } from 'src/app/models/etiqeutaPost.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {
  @Input() entrada: PostModel;
  @Output() resetPost = new EventEmitter<boolean>();

  formEntrada: FormGroup;
  formSeccion: FormGroup;

  public etiquetas: EtiquetaModel[] = [];
  public secciones: SeccionImageModel[] = [];
  public urlImgSeccion: any;
  public headerImage: File;

  public showFormSeccion = false;
  public formSeccionVisible = false;

  constructor(private fBuilder: FormBuilder,
              private postService: PostsService,
              private etiquetaService: TagsService,
              private etiquetasPostService: TagPostService) {
    this.crearFormularioEntrada();
    //this.setDefaultValues();
   }

  ngOnInit(): void {
    //this.setDefaultValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (this.entrada){
      this.fillFormFromPost(this.entrada);
    }
  }

  crearFormularioEntrada(): void {
    this.formEntrada = this.fBuilder.group({
      titulo: ['', Validators.required],
      subtitulo: ['', ],
      descEtiqueta: ['', ],
      headerImage: ['', ],
      etiquetasComponent: ['', ]
    });
  }

  fillFormFromPost(post: PostModel){
    if (this.entrada !== undefined && this.entrada !== null) {
      this.etiquetas = post.etiquetas;
      console.log(post);
      console.log(post.etiquetas);
      this.formEntrada.get('titulo').setValue(post.titulo);
      this.formEntrada.get('subtitulo').setValue(this.entrada.subtitulo); //TODO : Descomentar cuando se añada la propiedad en el Back
      //this.formEntrada.get('headerImage').setValue(post.image_url);
    }
  }

  addTag(): void{
    const descEtiqueta = this.formEntrada.get('descEtiqueta').value;
    if (descEtiqueta !== undefined && descEtiqueta !== '' && descEtiqueta !== null) {
      const etiquetaDuplicada = this.etiquetas.filter(etiqueta => etiqueta.desc === descEtiqueta);
      if (etiquetaDuplicada.length === 0) {
        const newTag = new EtiquetaModel();
        newTag.desc = descEtiqueta;
        this.etiquetas.push(newTag);
      } else {
        console.log('Etiqueta Duplicada');
      }
    }
    this.formEntrada.get('descEtiqueta').reset();
  }

  addNewSeccion(seccionImage: SeccionImageModel): any{
    this.showFormSeccion = !this.showFormSeccion;
    this.secciones.push(seccionImage);
    this.ordenarSeccion();
  }

  openFormSeccion(mostrar: boolean): any{
    this.showFormSeccion = !this.showFormSeccion;
  }

  ordenarSeccion(): any {
    this.secciones.sort( function(a, b) {
      if (a.seccion.orden > b.seccion.orden) {
        return 1;
      }
      if (a.seccion.orden < b.seccion.orden){
        return -1;
      }
      return 0;
    })
  }

  savePost(form: NgForm): any{
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    } 
    this.entrada.user_id = 1;
    this.entrada.titulo = this.formEntrada.get('titulo').value;
    this.entrada.subtitulo = this.formEntrada.get('subtitulo').value;
    if ( this.headerImage !== undefined){
      this.entrada.image_url = this.headerImage.name;
      this.entrada.headerImage = this.formEntrada.get('headerImage')[0];
    }
    if ( this.entrada.id) {
      this.postService.updatePost( this.entrada )
      .subscribe( resp => {
        console.log(resp);
        this.entrada = resp['data'];
        this.guardarEtiquetas();
      });
    } else {
      this.postService.crearPost( this.entrada )
      .subscribe(resp => {
        this.entrada = resp['data'];
        this.guardarEtiquetas();
      });
    }
  }

  guardarEtiquetas(): any {
    for (let tag of this.etiquetas){
      if ( !tag.id ) {
        this.etiquetaService.createTag(tag)
        .subscribe( resp => {
          tag = resp;
          this.guardarEtiquetasPost(tag);
        });
      }
      else {
        this.guardarEtiquetasPost(tag);
      }
    }
  }

  guardarEtiquetasPost(tag: any): any {
      if ( tag.id ) {
        console.log('Entrada agregada: ' + this.entrada.id);
        console.log('Etiqueta agregada: ' + tag.etiqueta_id);
        let etiquetaPost = new EtiquetaPostModel();
        etiquetaPost.etiqueta_id = tag.etiqueta_id ? tag.etiqueta_id : tag.id;
        etiquetaPost.post_id = this.entrada.id;
        console.log('ID ETiquetaPost: ' + etiquetaPost.etiqueta_id);
        this.etiquetasPostService.createEtiquetasPost(etiquetaPost)
        .subscribe( resp => {
          etiquetaPost = resp;
          console.log(etiquetaPost);
          this.onResetPost();
        });
      }
  }

  onResetPost(){
    this.resetPost.emit(true);
  }

  onChangeImage(imageSelected: File){
    this.headerImage = imageSelected;
  }

}
