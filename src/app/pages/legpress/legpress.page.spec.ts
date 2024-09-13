import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegpressPage } from './legpress.page';

describe('LegpressPage', () => {
  let component: LegpressPage;
  let fixture: ComponentFixture<LegpressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
