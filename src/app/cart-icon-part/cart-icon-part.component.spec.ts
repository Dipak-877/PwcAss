import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIconPartComponent } from './cart-icon-part.component';

describe('CartIconPartComponent', () => {
  let component: CartIconPartComponent;
  let fixture: ComponentFixture<CartIconPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartIconPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIconPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
