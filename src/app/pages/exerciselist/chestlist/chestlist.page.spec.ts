import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestlistPage } from './chestlist.page';

describe('ChestlistPage', () => {
  let component: ChestlistPage;
  let fixture: ComponentFixture<ChestlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
