import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeatedrowPage } from './seatedrow.page';

describe('SeatedrowPage', () => {
  let component: SeatedrowPage;
  let fixture: ComponentFixture<SeatedrowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatedrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
