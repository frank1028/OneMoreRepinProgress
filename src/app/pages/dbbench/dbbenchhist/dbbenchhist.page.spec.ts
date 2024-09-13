import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DbbenchhistPage } from './dbbenchhist.page';

describe('DbbenchhistPage', () => {
  let component: DbbenchhistPage;
  let fixture: ComponentFixture<DbbenchhistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DbbenchhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
