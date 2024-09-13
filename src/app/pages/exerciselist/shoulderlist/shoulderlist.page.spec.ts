import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoulderlistPage } from './shoulderlist.page';

describe('ShoulderlistPage', () => {
  let component: ShoulderlistPage;
  let fixture: ComponentFixture<ShoulderlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoulderlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoulderlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
