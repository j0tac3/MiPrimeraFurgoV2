import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamperizarComponent } from './camperizar.component';

describe('CamperizarComponent', () => {
  let component: CamperizarComponent;
  let fixture: ComponentFixture<CamperizarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
