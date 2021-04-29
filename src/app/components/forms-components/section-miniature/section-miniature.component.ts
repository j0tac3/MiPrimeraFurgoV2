import { Component, Input, OnInit } from '@angular/core';
import { SeccionImageModel} from '../../../models/seccionImage.model'

@Component({
  selector: 'app-section-miniature',
  templateUrl: './section-miniature.component.html',
  styleUrls: ['./section-miniature.component.css']
})
export class SectionMiniatureComponent implements OnInit {
  public url_imgSeccion: any;
  @Input() seccionInfo: SeccionImageModel;

  constructor() { }

  ngOnInit(): void {
    this.cargarImage();
  }

  cargarImage() {
    if (this.seccionInfo.urlimage !== undefined){
      let reader = new FileReader();
      reader.onload = e => this.url_imgSeccion = e.target.result;
      reader.readAsDataURL(this.seccionInfo.urlimage);
    }
  }

}
