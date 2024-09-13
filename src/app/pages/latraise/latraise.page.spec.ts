import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatraisePage } from './latraise.page';

describe('LatraisePage', () => {
  let component: LatraisePage;
  let fixture: ComponentFixture<LatraisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LatraisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
