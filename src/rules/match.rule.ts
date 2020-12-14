import { StringError } from "../errors/string.error";
import { GenericRule } from "./generic.rule";

export class MatchRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor(pattern: RegExp) {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== 'string')
                throw new StringError(typeof this);

            return pattern.test(value)
                ? null
                : 'Value does not match the required pattern';
        });
    }
}