import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPartComponent } from './sort-part.component';

describe('SortPartComponent', () => {
  let component: SortPartComponent;
  let fixture: ComponentFixture<SortPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
