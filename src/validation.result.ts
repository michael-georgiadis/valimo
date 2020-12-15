import { IValidationError } from './errors/validation.error';
 

export interface IValidationResult {
    success: boolean,
    errors?: IValidationError[]
}