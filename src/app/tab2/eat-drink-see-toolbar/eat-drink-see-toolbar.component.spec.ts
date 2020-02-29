import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EatDrinkSeeToolbarComponent } from './eat-drink-see-toolbar.component';

describe('EatDrinkSeeToolbarComponent', () => {
  let component: EatDrinkSeeToolbarComponent;
  let fixture: ComponentFixture<EatDrinkSeeToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatDrinkSeeToolbarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EatDrinkSeeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
