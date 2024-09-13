import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltfrontraisePage } from './altfrontraise.page';

describe('AltfrontraisePage', () => {
  let component: AltfrontraisePage;
  let fixture: ComponentFixture<AltfrontraisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AltfrontraisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
