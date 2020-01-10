import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadrePartComponent } from './headre-part.component';

describe('HeadrePartComponent', () => {
  let component: HeadrePartComponent;
  let fixture: ComponentFixture<HeadrePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadrePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadrePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
