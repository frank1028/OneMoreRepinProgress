import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeighthelpComponent } from './weighthelp.component';

describe('WeighthelpComponent', () => {
  let component: WeighthelpComponent;
  let fixture: ComponentFixture<WeighthelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeighthelpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeighthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
