import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InclinebenchPage } from './inclinebench.page';

describe('InclinebenchPage', () => {
  let component: InclinebenchPage;
  let fixture: ComponentFixture<InclinebenchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InclinebenchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
