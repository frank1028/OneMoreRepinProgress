import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlyhistPage } from './flyhist.page';

describe('FlyhistPage', () => {
  let component: FlyhistPage;
  let fixture: ComponentFixture<FlyhistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
