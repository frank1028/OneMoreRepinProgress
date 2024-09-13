import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegcurlhistPage } from './legcurlhist.page';

describe('LegcurlhistPage', () => {
  let component: LegcurlhistPage;
  let fixture: ComponentFixture<LegcurlhistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegcurlhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
