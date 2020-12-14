import { GenericRule } from "./generic.rule";
import { StringError } from "../errors/string.error";

export class MinLengthRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor(minLenth: number) {
        super((value: TValue) => {
            if (value == null) {
                return null
            }

            if (typeof value !== 'string') {
                throw new StringError(typeof this);
            }

            return value.length >= minLenth
                ? null 
                : `Value must be at least ${minLenth.toLocaleString()} characters long`;
        });
    }
}