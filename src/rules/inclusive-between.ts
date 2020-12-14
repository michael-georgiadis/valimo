import { NumberError } from "../errors/number.error";
import { GenericRule } from "./generic.rule";

export class InclusiveBetweenRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor(lowerBound: number, upperBound: number) {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== 'number')
                throw new NumberError(typeof this);

            return value >= lowerBound && value <= upperBound
            ? null
            : `Value must be between ${lowerBound.toLocaleString()} 
                and ${upperBound.toLocaleString()} (inclusive)`;
        });
    }
}