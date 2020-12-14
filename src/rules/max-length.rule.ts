import { StringError } from "../errors/string.error";
import { GenericRule } from "./generic.rule";

export class MaxLengthRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor(maxLength: number) {
        super((value: TValue) => {
            if (value == null)
                return null;
            
            if (typeof value !== 'string')
                throw new StringError(typeof this);
            
            return value.length <= maxLength
            ? null 
            : `Value must be no more than ${maxLength.toLocaleString()} 
                characters long`;
        });
    }
}