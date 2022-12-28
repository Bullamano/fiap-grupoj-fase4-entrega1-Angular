import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'tutorial', component: TutorialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
