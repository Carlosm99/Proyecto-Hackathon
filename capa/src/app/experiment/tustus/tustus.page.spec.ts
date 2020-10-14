import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TustusPage } from './tustus.page';

describe('TustusPage', () => {
  let component: TustusPage;
  let fixture: ComponentFixture<TustusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TustusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TustusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
