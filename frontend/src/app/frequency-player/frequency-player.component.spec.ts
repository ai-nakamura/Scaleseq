import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyPlayerComponent } from './frequency-player.component';

describe('FrequencyPlayerComponent', () => {
  let component: FrequencyPlayerComponent;
  let fixture: ComponentFixture<FrequencyPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencyPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
