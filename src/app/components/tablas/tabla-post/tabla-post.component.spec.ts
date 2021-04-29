import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPostComponent } from './tabla-post.component';

describe('TablaPostComponent', () => {
  let component: TablaPostComponent;
  let fixture: ComponentFixture<TablaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
