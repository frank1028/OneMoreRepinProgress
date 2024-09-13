import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnearmrowPage } from './onearmrow.page';

describe('OnearmrowPage', () => {
  let component: OnearmrowPage;
  let fixture: ComponentFixture<OnearmrowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnearmrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
