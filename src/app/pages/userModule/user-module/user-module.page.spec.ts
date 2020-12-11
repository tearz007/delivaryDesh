import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserModulePage } from './user-module.page';

describe('UserModulePage', () => {
  let component: UserModulePage;
  let fixture: ComponentFixture<UserModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
