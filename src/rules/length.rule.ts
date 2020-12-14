import { NumberError } from "../errors/number.error";
import { StringError } from "../errors/string.error";
import { AbstractRule } from "./abstract.rule";

export class LengthRule<TModel, TValue> extends AbstractRule<TModel, TValue> {
    constructor(minLength: number, maxLength: number) {
        super((value: TValue) => {
            if (value == null)
                return null;
            
            if (typeof value !== 'string')
                throw new StringError(typeof this);

            return value.length >= minLength && value.length <= maxLength
            ? null
            : `Value must be between ${minLength.toLocaleString()} 
                and ${maxLength.toLocaleString()} characters long`;
        });
    }
}