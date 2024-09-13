import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InclineflyPage } from './inclinefly.page';

describe('InclineflyPage', () => {
  let component: InclineflyPage;
  let fixture: ComponentFixture<InclineflyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InclineflyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
