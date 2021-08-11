import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputService } from '../../../../shared/services/input.service';
import { InputForm, ErrorInput } from '../../../../core/models/input.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input() inputFormList!: InputForm[];
  @Input() title: string = '';
  @Input() textButton: string = '';

  authForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inputService: InputService
  ) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    const inputObject: any = {};
    this.inputFormList.forEach((input: InputForm) => {
      inputObject[input.formControl] = [input.initialValue || '', [...(input.validators || [])]]
    })
    this.authForm = this.fb.group(inputObject)
  }

  getControlForm(key: string) {
    return this.inputService.getControlForm(this.authForm, key)
  }

  getMessageError(key: string, errorList: ErrorInput[]) {
    return this.inputService.getMessageError(this.authForm, key, errorList)
  }
}
