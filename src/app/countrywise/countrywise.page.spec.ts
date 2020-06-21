import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountrywisePage } from './countrywise.page';

describe('CountrywisePage', () => {
  let component: CountrywisePage;
  let fixture: ComponentFixture<CountrywisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrywisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountrywisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
