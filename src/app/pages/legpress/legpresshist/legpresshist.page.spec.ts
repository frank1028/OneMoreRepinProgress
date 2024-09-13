import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegpresshistPage } from './legpresshist.page';

describe('LegpresshistPage', () => {
  let component: LegpresshistPage;
  let fixture: ComponentFixture<LegpresshistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegpresshistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
