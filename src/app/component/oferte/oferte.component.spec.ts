import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OferteComponent } from './oferte.component';

describe('OferteComponent', () => {
  let component: OferteComponent;
  let fixture: ComponentFixture<OferteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OferteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
