import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BolatraisePage } from './bolatraise.page';

describe('BolatraisePage', () => {
  let component: BolatraisePage;
  let fixture: ComponentFixture<BolatraisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BolatraisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
