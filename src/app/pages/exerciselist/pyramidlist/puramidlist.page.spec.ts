import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidlistPage } from './pyramidlist.page';

describe('PyramidlistPage', () => {
  let component: PyramidlistPage;
  let fixture: ComponentFixture<PyramidlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
