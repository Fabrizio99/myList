import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputForm, InputType } from '../../../../core/models/input.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formFieldList: InputForm[] = [
    {
      label: 'Email',
      type: InputType.EMAIL,
      formControl: 'email',
      validators: [Validators.required, Validators.email],
      placeholder: 'Ex. juan@gmail.com',
      errors: [
        {
          errorType: 'required',
          text: 'Email is required'
        },
        {
          errorType: 'email',
          text: 'Please enter a valid email address'
        }
      ]
    },
    {
      label: 'Password',
      type: InputType.PASSWORD,
      formControl: 'password',
      validators: [Validators.required, Validators.minLength(8)],
      errors: [
        {
          errorType: 'required',
          text: 'Password is required'
        },
        {
          errorType: 'minlength',
          text: 'Password must be at least 8 characters'
        }
      ]
    },
  ]
}
