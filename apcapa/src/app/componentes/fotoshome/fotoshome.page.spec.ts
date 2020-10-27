import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FotoshomePage } from './fotoshome.page';

describe('FotoshomePage', () => {
  let component: FotoshomePage;
  let fixture: ComponentFixture<FotoshomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoshomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FotoshomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
