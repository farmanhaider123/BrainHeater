import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ReportProblemComponent } from './Component/report-problem/report-problem.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
 {path:"report",component:ReportProblemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
