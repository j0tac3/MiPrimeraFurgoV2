import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionMiniatureComponent } from './section-miniature.component';

describe('SectionMiniatureComponent', () => {
  let component: SectionMiniatureComponent;
  let fixture: ComponentFixture<SectionMiniatureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMiniatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
