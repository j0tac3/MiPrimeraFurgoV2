import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeccionImageModel } from 'src/app/models/seccionImage.model';

@Component({
  selector: 'app-sections-region',
  templateUrl: './sections-region.component.html',
  styleUrls: ['./sections-region.component.css']
})
export class SectionsRegionComponent implements OnInit {
  @Input() secciones: SeccionImageModel[];
  @Input() formSeccionVisible: boolean;

  @Output() showFormEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  showFormSecciones(){
    this.showFormEvent.emit(true);
  }

}
