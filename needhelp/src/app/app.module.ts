import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { GreeterAreaComponent } from './greeter-area/greeter-area.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    GreeterAreaComponent,
    HomePageComponent,
    TutorialPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
