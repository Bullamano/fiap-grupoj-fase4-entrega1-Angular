import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { GreeterAreaComponent } from './greeter-area/greeter-area.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    GreeterAreaComponent,
    CustomGridComponent,
    HomePageComponent,
    TutorialPageComponent,
    CustomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
