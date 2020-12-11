import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderModulePage } from './order-module.page';

describe('OrderModulePage', () => {
  let component: OrderModulePage;
  let fixture: ComponentFixture<OrderModulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderModulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
