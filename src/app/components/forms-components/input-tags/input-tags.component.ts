import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EtiquetaModel } from 'src/app/models/etiqueta.model';
import { TagsService } from 'src/app/service/tags.service';

@Component({
  selector: 'app-input-tags',
  templateUrl: './input-tags.component.html',
  styleUrls: ['./input-tags.component.css']
})
export class InputTagsComponent implements OnInit {
  constructor(private etiquetasService: TagsService) { }

  @Input() etiquetas: EtiquetaModel[];
  @Input() formGroupParent : FormGroup;

  public tagsFromDB: EtiquetaModel[];

  ngOnInit(): void {
    this.getTagsFromDB();
  }

  getTagsFromDB() {
    this.etiquetasService.getTags()
    .subscribe( resp => {
      this.tagsFromDB = resp;
    })
  }

  addTagToArray(){
    const descEtiqueta: string = this.formGroupParent.get('etiquetasComponent').value;
    if (descEtiqueta !== null && descEtiqueta !== undefined){
      if (descEtiqueta.length > 0){
        const existingTag = this.tagsFromDB.filter(tag => tag.desc === descEtiqueta)[0];
        if (this.tagsFromDB.length === 0 || ( existingTag === null || existingTag === undefined) ) {
          let newEtiqueta = new EtiquetaModel();
          newEtiqueta.desc = descEtiqueta;
          this.etiquetas.push(newEtiqueta);
        } else {
          this.etiquetas.push(existingTag);
        }
      }
      this.formGroupParent.get('etiquetasComponent').reset();
    }
  }

  deleteTag(currentTag: EtiquetaModel): void{
    this.etiquetas.splice(this.etiquetas.indexOf(currentTag), 1);
  }

}
