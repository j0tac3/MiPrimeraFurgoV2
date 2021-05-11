import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputImageHeaderComponent } from './input-image-header.component';

describe('InputImageHeaderComponent', () => {
  let component: InputImageHeaderComponent;
  let fixture: ComponentFixture<InputImageHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputImageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputImageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
