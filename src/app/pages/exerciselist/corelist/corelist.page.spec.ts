import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorelistPage } from './corelist.page';

describe('CorelistPage', () => {
  let component: CorelistPage;
  let fixture: ComponentFixture<CorelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
