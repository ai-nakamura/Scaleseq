import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { ButtonCardComponent } from './button-card/button-card.component';
import { HttpService } from './http.service';
import { RadioComponent } from './radio/radio.component';
import { SliderComponent } from './slider/slider.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let httpService: jasmine.SpyObj<HttpService>;
  beforeEach(() => {
    httpService = jasmine.createSpyObj('HttpService', ['fetchFrequencies', 'setBaseUrl']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(ButtonCardComponent),
        MockComponent(RadioComponent),
        MockComponent(SliderComponent),
      ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: HttpService,
          useValue: httpService,
        },
      ],
      // schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should make http call when "hello" is called', () => {
    // Arrange
    const app = fixture.componentInstance;
    httpService.fetchFrequencies.and.returnValue(of([[0.000001], [0.000002]]));

    // Act
    app.onButtonCardClick();

    // Assert
    expect(httpService.fetchFrequencies).toHaveBeenCalled();
  });

  it('should receive data from http call when getSamples runs', () => {
    // Arrange
    const app = fixture.componentInstance;
    const params = {
      freq: 440,
      duration: 1,
      scaleType: 'major',
    };
    httpService.fetchFrequencies.and.returnValue(of([[0.00001, 0.0002], [1, 2]]));

    // Act
    app.getSamples(params);

    // Assert
    expect((app.freqData ?? [])[0]).toContain(0.00001);
  });
});
