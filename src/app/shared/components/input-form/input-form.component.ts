import { Component, Input, OnInit } from '@angular/core';
import { InputForm } from 'src/app/models/input.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() inputForm!: InputForm;

  constructor() { }

  ngOnInit(): void {
  }

}
