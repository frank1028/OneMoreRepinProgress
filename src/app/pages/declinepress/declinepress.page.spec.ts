import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclinepressPage } from './declinepress.page';

describe('DeclinepressPage', () => {
  let component: DeclinepressPage;
  let fixture: ComponentFixture<DeclinepressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinepressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
