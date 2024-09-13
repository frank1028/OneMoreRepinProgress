import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InclinecurlPage } from './inclinecurl.page';

describe('InclinecurlPage', () => {
  let component: InclinecurlPage;
  let fixture: ComponentFixture<InclinecurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InclinecurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
