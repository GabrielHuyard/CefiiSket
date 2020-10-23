import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminListplayerPage } from './admin-listplayer.page';

describe('AdminListplayerPage', () => {
  let component: AdminListplayerPage;
  let fixture: ComponentFixture<AdminListplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListplayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminListplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
