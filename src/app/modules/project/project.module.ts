import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";
import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectRoutingModule } from "./project-routing.module";
import { ProjectComponent } from './pages/project.component';
import { ProjectFormRfComponent } from './components/project-form-rf/project-form-rf.component';

@NgModule({
  declarations: [
    ProjectDashboardComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectFormComponent,
    ProjectComponent,
    ProjectFormRfComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProjectRoutingModule
  ]
})

export class ProjectModule {}