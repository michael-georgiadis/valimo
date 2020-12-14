import { AbstractRule } from "./abstract.rule";

export class NotEqualRule<TModel, TValue> extends AbstractRule<TModel, TValue> {
    constructor(forbiddenValue: TValue) {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== typeof forbiddenValue)
                throw new TypeError("Cannot compare objects of different types");

            return value !== forbiddenValue
                ? null
                : `Must not be equal ${forbiddenValue}`;
        });
    }
}