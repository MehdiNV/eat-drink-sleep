import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultiIntegrationButtonComponent } from './multi-integration-button.component';

describe('MultiIntegrationButtonComponent', () => {
  let component: MultiIntegrationButtonComponent;
  let fixture: ComponentFixture<MultiIntegrationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiIntegrationButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiIntegrationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
