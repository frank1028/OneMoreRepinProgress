import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReversedbcurlPage } from './reversedbcurl.page';

describe('ReversedbcurlPage', () => {
  let component: ReversedbcurlPage;
  let fixture: ComponentFixture<ReversedbcurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversedbcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
