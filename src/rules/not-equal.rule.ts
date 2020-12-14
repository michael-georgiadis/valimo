import { GenericRule } from "./generic.rule";

export class NotEqualRule<TModel, TValue> extends GenericRule<TModel, TValue> {
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