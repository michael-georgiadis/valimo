import { NumberError } from "../errors/number.error";
import { GenericRule } from "./generic.rule";

export class LessThanOrEqualToRule<TModel, TValue>
    extends GenericRule<TModel, TValue> {
    constructor(threshold: number) {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== 'number')
                throw new NumberError(typeof this);

            return value <= threshold
                ? null
                : `Value must be less than or equal to ${threshold.toLocaleString()}`;
        })
    }
}