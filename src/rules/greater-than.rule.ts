import { AbstractRule } from "./abstract.rule";

export class GreaterThanRule<TModel, TValue> extends AbstractRule<TModel, TValue> {
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