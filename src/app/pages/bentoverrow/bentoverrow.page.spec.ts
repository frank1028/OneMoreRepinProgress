import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BentoverrowPage } from './bentoverrow.page';

describe('BentoverrowPage', () => {
  let component: BentoverrowPage;
  let fixture: ComponentFixture<BentoverrowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BentoverrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
