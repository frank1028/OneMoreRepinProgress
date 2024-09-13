import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlyPage } from './fly.page';

describe('FlyPage', () => {
  let component: FlyPage;
  let fixture: ComponentFixture<FlyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
