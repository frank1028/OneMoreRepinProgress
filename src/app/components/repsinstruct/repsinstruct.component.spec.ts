import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepsinstructComponent } from './repsinstruct.component';

describe('RepsinstructComponent', () => {
  let component: RepsinstructComponent;
  let fixture: ComponentFixture<RepsinstructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepsinstructComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepsinstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
