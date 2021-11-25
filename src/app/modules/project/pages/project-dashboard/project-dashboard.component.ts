import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { LogService } from '@app/services/log.service';
import { Observable, Subscription } from 'rxjs';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'ngprj-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {

  projects$!: Observable<Project[]>;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();

  }

  selectProject(project: Project) {
    this.router.navigate(['/projects', 'details', project.id]);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project).subscribe(data => this.projects$ = this.projectService.getAll())
  }

}
