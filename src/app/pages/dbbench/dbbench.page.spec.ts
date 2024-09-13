import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DbbenchPage } from './dbbench.page';

describe('DbbenchPage', () => {
  let component: DbbenchPage;
  let fixture: ComponentFixture<DbbenchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DbbenchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
