import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./modules/dashboard/pages/home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'projects',
    loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
