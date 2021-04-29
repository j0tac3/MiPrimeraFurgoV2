import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostModel } from 'src/app/models/post.model';
import { SeccionModel } from 'src/app/models/seccion.model';
import { SeccionImageModel } from 'src/app/models/seccionImage.model';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {
  @Input() showFormSeccion: boolean;
  @Input() nSecciones: number;
  @Input() seccion: SeccionModel;

  @Output() addNewSeccionEvent = new EventEmitter<SeccionImageModel>();

  public formSeccion: FormGroup;
  public url_imgSeccion: any;
  private seccionImageFile: File;

  @ViewChild('imageSeccionSelect',  {
    read: ElementRef
  }) imageSeccionSelect: ElementRef;

  constructor( private fBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.nSecciones);
    this.crearFormularioSeccion();
    this.setDefaultValues();
  }

  crearFormularioSeccion() {
    this.formSeccion = this.fBuilder.group({
      imgSeccion: ['', ],
      textSeccion: ['', ],
      ordenSeccion: ['', ],
    })
  }

  setDefaultValues(){
    this.formSeccion.get('id').setValue(this.seccion.id)
    this.formSeccion.get('post_id').setValue(this.seccion.post_id)
    this.formSeccion.get('ordenSeccion').setValue(this.seccion.orden)
    this.formSeccion.get('textSeccion').setValue(this.seccion.texto)
  }
  
  openFileSeccion(){
    this.seccionImageFile = this.imageSeccionSelect.nativeElement.files[0];
    let reader = new FileReader();
    reader.onload = e => this.url_imgSeccion = e.target.result;
    reader.readAsDataURL(this.seccionImageFile);
  }

  saveSeccion() {
    let newSeccion = new SeccionModel();
    newSeccion.texto = this.formSeccion.get('textSeccion').value;
    newSeccion.orden = this.formSeccion.get('ordenSeccion').value;

    let seccionImageComplete = new SeccionImageModel();
    seccionImageComplete.urlimage = this.seccionImageFile;
    seccionImageComplete.seccion = newSeccion;

    this.addNewSeccion(seccionImageComplete);
    this.cancelarSeccion();
  }

  addNewSeccion(seccionImage: SeccionImageModel){
    this.addNewSeccionEvent.emit(seccionImage);
  }

  cancelarSeccion(){
    this.formSeccion.get('imgSeccion').reset();
    this.formSeccion.get('textSeccion').reset();
    this.url_imgSeccion = [];
    this.seccionImageFile = undefined;
    this.imageSeccionSelect.nativeElement.value = '';
    this.formSeccion.get('ordenSeccion').setValue(this.nSecciones);
    this.showFormSeccion = false;
  }

}
