import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UhpulldownPage } from './uhpulldown.page';

describe('UhpulldownPage', () => {
  let component: UhpulldownPage;
  let fixture: ComponentFixture<UhpulldownPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UhpulldownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
