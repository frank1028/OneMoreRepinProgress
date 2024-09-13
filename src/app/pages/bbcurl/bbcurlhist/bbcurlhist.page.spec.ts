import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BbcurlhistPage } from './bbcurlhist.page';

describe('BbcurlhistPage', () => {
  let component: BbcurlhistPage;
  let fixture: ComponentFixture<BbcurlhistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcurlhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
