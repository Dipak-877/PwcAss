import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingPartComponent } from './shoping-part.component';

describe('ShopingPartComponent', () => {
  let component: ShopingPartComponent;
  let fixture: ComponentFixture<ShopingPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
