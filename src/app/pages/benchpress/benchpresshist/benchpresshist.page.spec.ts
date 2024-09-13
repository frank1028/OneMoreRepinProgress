import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenchpresshistPage } from './benchpresshist.page';

describe('BenchpresshistPage', () => {
  let component: BenchpresshistPage;
  let fixture: ComponentFixture<BenchpresshistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchpresshistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
