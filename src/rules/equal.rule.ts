import { GenericRule } from "./generic.rule";

export class EqualRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor(requiredValue: TValue) {
        super((value: TValue) => {
            if (typeof requiredValue !== typeof value)
                throw new TypeError(
                    "The two objects don't share the same type!"
                );

            return value === requiredValue
                ? null
                : `Must equal ${requiredValue}`;
        })
    }
}