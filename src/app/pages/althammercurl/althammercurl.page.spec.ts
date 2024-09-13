import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlthammercurlPage } from './althammercurl.page';

describe('AlthammercurlPage', () => {
  let component: AlthammercurlPage;
  let fixture: ComponentFixture<AlthammercurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlthammercurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
