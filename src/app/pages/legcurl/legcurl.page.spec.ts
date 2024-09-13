import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegcurlPage } from './legcurl.page';

describe('LegcurlPage', () => {
  let component: LegcurlPage;
  let fixture: ComponentFixture<LegcurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
