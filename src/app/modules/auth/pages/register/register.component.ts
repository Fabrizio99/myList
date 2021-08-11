import { Component, OnInit } from '@angular/core';
import { InputType, InputForm } from '../../../../core/models/input.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formFieldList: InputForm[] = [
    {
      label: 'Name',
      type: InputType.TEXT,
      formControl: 'name',
      validators: [Validators.required],
      errors: [
        {
          errorType: 'required',
          text: 'Name is required'
        }
      ]
    },
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
