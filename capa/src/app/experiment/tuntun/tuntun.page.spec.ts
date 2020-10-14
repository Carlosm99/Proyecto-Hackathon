import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TuntunPage } from './tuntun.page';

describe('TuntunPage', () => {
  let component: TuntunPage;
  let fixture: ComponentFixture<TuntunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuntunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TuntunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
