import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaxingComponent } from './waxing.component';

describe('WaxingComponent', () => {
  let component: WaxingComponent;
  let fixture: ComponentFixture<WaxingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaxingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
