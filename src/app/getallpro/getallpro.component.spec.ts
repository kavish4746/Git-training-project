import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallproComponent } from './getallpro.component';

describe('GetallproComponent', () => {
  let component: GetallproComponent;
  let fixture: ComponentFixture<GetallproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
