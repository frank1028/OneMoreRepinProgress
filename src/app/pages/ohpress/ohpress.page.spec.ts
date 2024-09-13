import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OhpressPage } from './ohpress.page';

describe('OhpressPage', () => {
  let component: OhpressPage;
  let fixture: ComponentFixture<OhpressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OhpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
