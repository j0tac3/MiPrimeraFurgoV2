import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMiniatureComponent } from './section-miniature.component';

describe('SectionMiniatureComponent', () => {
  let component: SectionMiniatureComponent;
  let fixture: ComponentFixture<SectionMiniatureComponent>;

  beforeEach(async(() => {
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
