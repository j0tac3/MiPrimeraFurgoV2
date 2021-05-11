import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamperizacionComponent } from './camperizacion.component';

describe('CamperizacionComponent', () => {
  let component: CamperizacionComponent;
  let fixture: ComponentFixture<CamperizacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
