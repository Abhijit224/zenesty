import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoareaComponent } from './videoarea.component';

describe('VideoareaComponent', () => {
  let component: VideoareaComponent;
  let fixture: ComponentFixture<VideoareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
