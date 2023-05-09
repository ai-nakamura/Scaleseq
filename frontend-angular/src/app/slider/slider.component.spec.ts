import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SliderComponent} from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('- onSlide -', () => {
    it('should emit with correct value onSlide', () => {
      // Arrange
      spyOn(component.bySliding, 'emit');

      // Act
      component.onSlide('10');
      // fixture.detectChanges();

      // Assert
      expect(component.bySliding.emit).toHaveBeenCalledWith(10);
    });

    it('should call onSlide when slider changes in the DOM', () => {
      // Arrange
      const nativeElement = fixture.nativeElement;
      const slider = nativeElement.querySelector('#slider');
      spyOn(component, 'onSlide');

      // Act
      slider.dispatchEvent(new InputEvent('input'));

      // Assert
      expect(component.onSlide).toHaveBeenCalled();
    });
  });
});
