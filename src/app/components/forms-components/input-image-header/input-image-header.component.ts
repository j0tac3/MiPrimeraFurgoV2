import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, Directive, Output, EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-image-header',
  templateUrl: './input-image-header.component.html',
  styleUrls: ['./input-image-header.component.css']
})
export class InputImageHeaderComponent implements OnInit {
  @Input() formGroupParent: FormGroup;
  @Input() headerImage: File;

  @Output() changeImage = new EventEmitter<File>();

  public url_header: any;

  @ViewChild('headerImageSelect',  {
    read: ElementRef
  }) headerImageSelect: ElementRef;
  
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  onChanveImage(event){
    let img = event.target;
    this.headerImage = this.headerImageSelect.nativeElement.files[0];
    let reader = new FileReader();
    reader.onload = e => this.url_header = e.target.result;
    reader.readAsDataURL(this.headerImageSelect.nativeElement.files[0]);
    //console.log(this.url_header);
    //this.formGroupParent.get('headerImage').touched;
    this.updateImage();
  }

  updateImage(){
    this.changeImage.emit(this.headerImage);
  }

}
