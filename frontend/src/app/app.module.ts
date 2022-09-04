import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonCardComponent } from './button-card/button-card.component';
import { SliderComponent } from './slider/slider.component';
import { RadioComponent } from './radio/radio.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ButtonCardComponent,
    RadioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
