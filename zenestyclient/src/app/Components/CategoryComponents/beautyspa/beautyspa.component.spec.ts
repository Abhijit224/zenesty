import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyspaComponent } from './beautyspa.component';

describe('BeautyspaComponent', () => {
  let component: BeautyspaComponent;
  let fixture: ComponentFixture<BeautyspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyspaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
