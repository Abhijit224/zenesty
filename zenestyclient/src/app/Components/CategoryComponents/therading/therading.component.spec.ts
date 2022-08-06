import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheradingComponent } from './therading.component';

describe('TheradingComponent', () => {
  let component: TheradingComponent;
  let fixture: ComponentFixture<TheradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheradingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
