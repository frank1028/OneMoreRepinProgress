import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VbarpulldownPage } from './vbarpulldown.page';

describe('VbarpulldownPage', () => {
  let component: VbarpulldownPage;
  let fixture: ComponentFixture<VbarpulldownPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VbarpulldownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
