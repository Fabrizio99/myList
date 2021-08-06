import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
}
