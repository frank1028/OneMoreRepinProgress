import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklistPage } from './backlist.page';

describe('BacklistPage', () => {
  let component: BacklistPage;
  let fixture: ComponentFixture<BacklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
