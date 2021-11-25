import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectComponent } from "./pages/project.component";


const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: 'details/:id', component: ProjectDetailComponent},
      { path: '', component: ProjectDashboardComponent},
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProjectRoutingModule {}