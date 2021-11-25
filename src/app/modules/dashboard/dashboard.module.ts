import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./pages/home/home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})

export class DashboardModule {}