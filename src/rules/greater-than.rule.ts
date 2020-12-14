import { GenericRule } from "./generic.rule";

export class GreaterThanRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor(threshold: number) {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== 'number')
                throw new TypeError(typeof this);

            return value > threshold
                ? null
                : `Value must be greater than ${threshold.toLocaleString()}`;
        });
    }
}