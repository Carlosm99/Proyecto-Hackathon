import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoonlinePage } from './pagoonline.page';

describe('PagoonlinePage', () => {
  let component: PagoonlinePage;
  let fixture: ComponentFixture<PagoonlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoonlinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoonlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
