import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidepulldownPage } from './widepulldown.page';

describe('WidepulldownPage', () => {
  let component: WidepulldownPage;
  let fixture: ComponentFixture<WidepulldownPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WidepulldownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
