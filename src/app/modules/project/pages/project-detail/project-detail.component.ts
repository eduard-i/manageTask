import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  @Input() project$!: Observable<Project>;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.project$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.get(+params.get('id')!)
      )
    );
  }

  public updateProject(project: Project, id: number) {
    this.projectService.update(project, id).subscribe();
  }
}
