import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedimaniComponent } from './pedimani.component';

describe('PedimaniComponent', () => {
  let component: PedimaniComponent;
  let fixture: ComponentFixture<PedimaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedimaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedimaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
