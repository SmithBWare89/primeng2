import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NavigationModule } from './navigation/navigation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module'
import { DashboardModule } from './dashboard/dashboard.module';
import { SelectionModule } from './selection/selection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    FooterModule,
    DashboardModule,
    HttpClientModule,
    SelectionModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
