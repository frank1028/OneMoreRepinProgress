import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TricepslistPage } from './tricepslist.page';

describe('TricepslistPage', () => {
  let component: TricepslistPage;
  let fixture: ComponentFixture<TricepslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricepslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TricepslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
