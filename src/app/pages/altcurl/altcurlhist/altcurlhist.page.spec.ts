import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltcurlhistPage } from './altcurlhist.page';

describe('AltcurlhistPage', () => {
  let component: AltcurlhistPage;
  let fixture: ComponentFixture<AltcurlhistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AltcurlhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
