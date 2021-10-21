import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavigationModule } from './navigation/navigation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNG Modules

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
