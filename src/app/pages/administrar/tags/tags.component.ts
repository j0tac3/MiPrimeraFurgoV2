import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EtiquetaModel } from '../../../models/etiqueta.model';
import { TagsService } from '../../../service/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  constructor(private fBuilder: FormBuilder, private etiquetasSerivice: TagsService) {
    this.createFormTags();
  }

  public formTags: FormGroup;
  public etiquetas: EtiquetaModel[];
  public etiqueta: EtiquetaModel = new EtiquetaModel();


  ngOnInit(): void {
    this.getTags();
  }

  createFormTags(){
    this.formTags = this.fBuilder.group({
      desc : ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  addNewTag() {
    this.etiquetas.push()
  }

  saveTag(form: NgForm){
    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }
    this.etiqueta.desc = this.formTags.get('desc').value;
    if ( this.etiqueta.id) {
      this.etiquetasSerivice.updateTag( this.etiqueta )
      .subscribe( resp => {
        console.log(resp);
      });
    } else {
      this.etiquetasSerivice.createTag( this.etiqueta )
      .subscribe( resp => {
        console.log(resp);
      });
    }
    this.etiquetas.push(this.etiqueta);
    this.formTags.get('desc').reset();
  }

  getTags(){
    this.etiquetasSerivice.getTags()
    .subscribe( resp =>  {
      this.etiquetas = resp;
    });
    console.log(`Etiquetas: ${this.etiquetas}`);
    }

  get descValid() {
    return this.formTags.get('desc').invalid && this.formTags.get('desc').touched;
  }
}
