import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeatedlegcurlPage } from './seatedlegcurl.page';

describe('SeatedlegcurlPage', () => {
  let component: SeatedlegcurlPage;
  let fixture: ComponentFixture<SeatedlegcurlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatedlegcurlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
