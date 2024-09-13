import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverheadextPage } from './overheadext.page';

describe('OverheadextPage', () => {
  let component: OverheadextPage;
  let fixture: ComponentFixture<OverheadextPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OverheadextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
