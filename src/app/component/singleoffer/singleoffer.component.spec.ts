import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleofferComponent } from './singleoffer.component';

describe('SingleofferComponent', () => {
  let component: SingleofferComponent;
  let fixture: ComponentFixture<SingleofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
