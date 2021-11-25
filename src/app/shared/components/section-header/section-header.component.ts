import { Component, OnInit, Input } from '@angular/core';

interface Button {
  label: string;
  link: string;
  type: 'btn-link' | 'btn-primary';
}

@Component({
  selector: 'ngprj-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = '';

  _button: Button = { label: '', link: '', type: 'btn-link' }

  @Input() set button(value: Partial<Button>) {
    this._button = { ...this._button, ...value };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
