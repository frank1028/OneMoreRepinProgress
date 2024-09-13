import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PecdeckhistPage } from './pecdeckhist.page';

describe('PecdeckhistPage', () => {
  let component: PecdeckhistPage;
  let fixture: ComponentFixture<PecdeckhistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PecdeckhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
