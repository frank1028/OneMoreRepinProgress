import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreachercurlPage } from './preachercurl.page';

describe('PreachercurlPage', () => {
  let component: PreachercurlPage;
  let fixture: ComponentFixture<PreachercurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreachercurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
