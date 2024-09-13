import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PecdeckPage } from './pecdeck.page';

describe('PecdeckPage', () => {
  let component: PecdeckPage;
  let fixture: ComponentFixture<PecdeckPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PecdeckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
