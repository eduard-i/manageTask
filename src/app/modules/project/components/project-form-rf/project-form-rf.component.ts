import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-form-rf',
  templateUrl: './project-form-rf.component.html',
  styleUrls: ['./project-form-rf.component.css']
})
export class ProjectFormRfComponent implements OnInit {
  @Output() submitted = new EventEmitter<Project>();
  @Input() project!: Project;

  projectForm = new FormGroup({
    end: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    tasks: new FormArray([])
  })

  get tasks(): FormArray {
    return this.projectForm.get('tasks') as FormArray
  }

  constructor() { }

  newTask(): FormGroup {
    return new FormGroup({
      'name': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.projectForm.patchValue(this.project);
    this.projectForm.statusChanges.subscribe(f => console.log(f))
  }

  submit() {
    this.submitted.emit(this.projectForm.value);
  }

  addTask() {
    this.tasks.push(this.newTask());
  }

  deleteTask(index: number) {
    this.tasks.removeAt(index);
  }
}
