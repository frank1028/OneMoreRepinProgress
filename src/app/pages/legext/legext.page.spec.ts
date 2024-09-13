import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegextPage } from './legext.page';

describe('LegextPage', () => {
  let component: LegextPage;
  let fixture: ComponentFixture<LegextPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
