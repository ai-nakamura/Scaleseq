import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call "hello" function when card is clicked', () => {
    // Arrange
    const app = fixture.componentInstance;
    const card: HTMLAnchorElement = fixture.nativeElement.querySelector('.card');
    spyOn(app, 'hello');

    // Act
    card.click();

    // Assert
    expect(app.hello).toHaveBeenCalled();
  });
});
