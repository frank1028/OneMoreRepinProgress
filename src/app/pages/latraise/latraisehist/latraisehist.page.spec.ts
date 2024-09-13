import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatraisehistPage } from './latraisehist.page';

describe('LatraisehistPage', () => {
  let component: LatraisehistPage;
  let fixture: ComponentFixture<LatraisehistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LatraisehistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
