export interface InputForm{
    label: string;
    type: InputType;
    formControl: string;
    placeholder?: string;
    errors: ErrorInput[]
}

export enum InputType{
    TEXT =  'text',
    PASSWORD = 'password',
    EMAIL = 'email'
}

export interface ErrorInput{
    validation: boolean;
    text: string;
}