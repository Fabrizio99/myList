import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorInput } from '../../core/models/input.model';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() { }


  getControlForm(formGroup: FormGroup, key: string) {
    return formGroup.get(key)
  }

  getError(formGroup: FormGroup, key: string, error?: string){
    return this.getControlForm(formGroup, key)?.touched && this.getControlForm(formGroup, key)?.hasError(error || 'required')
  }

  getMessageError(formGroup: FormGroup, key: string, errorList: ErrorInput[]) {
    const error = this.getControlForm(formGroup, key)?.errors
    const typeError = Object.keys(error || {})
    const errorMessage = errorList.find(e => (e.errorType || 'required') == typeError[0])
    return errorMessage?.text
  }
}
