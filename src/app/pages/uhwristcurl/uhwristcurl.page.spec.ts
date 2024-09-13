import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UhwristcurlPage } from './uhwristcurl.page';

describe('UhwristcurlPage', () => {
  let component: UhwristcurlPage;
  let fixture: ComponentFixture<UhwristcurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UhwristcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
