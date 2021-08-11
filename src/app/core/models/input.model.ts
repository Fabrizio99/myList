import { ValidationErrors } from "@angular/forms";

export interface InputForm{
    label: string;
    type: InputType;
    formControl: string;
    placeholder?: string;
    initialValue?: string;
    validators?: ValidationErrors[];
    errors: ErrorInput[]
}

export enum InputType{
    TEXT =  'text',
    PASSWORD = 'password',
    EMAIL = 'email'
}

export interface ErrorInput{
    errorType: string;
    text: string;
}