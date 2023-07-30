import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningAngularComponent } from './learning-angular/learning-angular.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
