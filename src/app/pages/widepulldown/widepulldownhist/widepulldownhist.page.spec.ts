import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidepulldownhistPage } from './widepulldownhist.page';

describe('WidepulldownhistPage', () => {
  let component: WidepulldownhistPage;
  let fixture: ComponentFixture<WidepulldownhistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WidepulldownhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
