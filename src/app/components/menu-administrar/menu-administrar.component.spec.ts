import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuAdministrarComponent } from './menu-administrar.component';

describe('MenuAdministrarComponent', () => {
  let component: MenuAdministrarComponent;
  let fixture: ComponentFixture<MenuAdministrarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
