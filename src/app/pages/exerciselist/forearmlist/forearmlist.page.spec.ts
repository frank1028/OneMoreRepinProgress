import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForearmlistPage } from './forearmlist.page';

describe('ForearmlistPage', () => {
  let component: ForearmlistPage;
  let fixture: ComponentFixture<ForearmlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForearmlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForearmlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
