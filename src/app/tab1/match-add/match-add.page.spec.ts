import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchAddPage } from './match-add.page';

describe('MatchAddPage', () => {
  let component: MatchAddPage;
  let fixture: ComponentFixture<MatchAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
