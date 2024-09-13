import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenchpressPage } from './benchpress.page';

describe('BenchpressPage', () => {
  let component: BenchpressPage;
  let fixture: ComponentFixture<BenchpressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
