import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagetoolPage } from './pagetool.page';

describe('PagetoolPage', () => {
  let component: PagetoolPage;
  let fixture: ComponentFixture<PagetoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagetoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
