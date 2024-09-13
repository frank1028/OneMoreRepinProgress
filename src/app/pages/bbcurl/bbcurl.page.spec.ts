import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BbcurlPage } from './bbcurl.page';

describe('BbcurlPage', () => {
  let component: BbcurlPage;
  let fixture: ComponentFixture<BbcurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
