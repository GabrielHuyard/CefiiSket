import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminListmatchPage } from './admin-listmatch.page';

describe('AdminListmatchPage', () => {
  let component: AdminListmatchPage;
  let fixture: ComponentFixture<AdminListmatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListmatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminListmatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
