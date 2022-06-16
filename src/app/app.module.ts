import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { comp1Component } from './comp1/comp1.component';
import { comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    comp1Component,
    comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
