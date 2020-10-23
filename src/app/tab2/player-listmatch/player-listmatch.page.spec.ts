import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerListmatchPage } from './player-listmatch.page';

describe('PlayerListmatchPage', () => {
  let component: PlayerListmatchPage;
  let fixture: ComponentFixture<PlayerListmatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListmatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerListmatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
