import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
export class MenuOptionComponent implements OnInit {
  @Output() ocultarMenu = new EventEmitter<boolean>();
  private isHiddenMenu: boolean = true;

  constructor() { }

  @Input()
  url: string;

  ngOnInit(): void {
  }

  onOcultarMenu() {
    this.ocultarMenu.emit(this.isHiddenMenu);
  }

}
