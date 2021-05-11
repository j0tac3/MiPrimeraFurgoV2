import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionsRegionComponent } from './sections-region.component';

describe('SectionsRegionComponent', () => {
  let component: SectionsRegionComponent;
  let fixture: ComponentFixture<SectionsRegionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
