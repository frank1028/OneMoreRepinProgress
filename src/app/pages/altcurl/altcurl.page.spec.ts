import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltcurlPage } from './altcurl.page';

describe('AltcurlPage', () => {
  let component: AltcurlPage;
  let fixture: ComponentFixture<AltcurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AltcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
