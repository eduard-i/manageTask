import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SectionHeaderComponent } from "./components/section-header/section-header.component";
import { CardComponent } from './components/card/card.component';


@NgModule ({
  declarations: [
    SectionHeaderComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionHeaderComponent,
    CardComponent
  ]

})
export class SharedModule {}