import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputService } from '../../../shared/services/input.service';
import { InputForm, InputType } from '../../../models/input.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  formFieldList: InputForm[] = [
    {
      label: 'Name',
      type: InputType.TEXT,
      formControl: 'name',
      errors: [
        {
          validation: this.getError('name') || false,
          text: 'Name is required'
        }
      ]
    },
    {
      label: 'Email',
      type: InputType.EMAIL,
      formControl: 'email',
      placeholder: 'Ex. juan@gmail.com',
      errors: [
        {
          validation: this.getError('email') || false,
          text: 'Email is required'
        },
        {
          validation: this.getError('email', 'email') || false,
          text: 'Please enter a valid email address'
        }
      ]
    },
    {
      label: 'Password',
      type: InputType.PASSWORD,
      formControl: 'password',
      errors: [
        {
          validation: this.getError('password') || false,
          text: 'Password is required'
        },
        {
          validation: this.getError('password', 'minlength') || false,
          text: 'Password must be at least 8 characters'
        }
      ]
    },
  ]

  constructor(
    private fb: FormBuilder,
    private inputService: InputService
  ) { }

  getControlForm(key: string) {
    return this.inputService.getControlForm(this.loginForm, key)
  }

  getError(key: string, error?: string){
    return this.inputService.getError(this.loginForm, key, error)
  }
}
