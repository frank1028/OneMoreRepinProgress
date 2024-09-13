import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThighlistPage } from './thighlist.page';

describe('ThighlistPage', () => {
  let component: ThighlistPage;
  let fixture: ComponentFixture<ThighlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThighlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThighlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
