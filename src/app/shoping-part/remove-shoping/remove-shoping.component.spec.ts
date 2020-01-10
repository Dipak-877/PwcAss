import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveShopingComponent } from './remove-shoping.component';

describe('RemoveShopingComponent', () => {
  let component: RemoveShopingComponent;
  let fixture: ComponentFixture<RemoveShopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveShopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveShopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
