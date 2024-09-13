import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OhwristcurlPage } from './ohwristcurl.page';

describe('OhwristcurlPage', () => {
  let component: OhwristcurlPage;
  let fixture: ComponentFixture<OhwristcurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OhwristcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
