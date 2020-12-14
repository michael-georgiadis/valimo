import { StringError } from "../errors/string.error";
import { GenericRule } from "./generic.rule";

export class NotEmptyRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor() {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== 'string')
                throw new StringError(typeof this);

            return value.trim().length > 0
                ? null
                : 'Value cannot be empty';
        });
    }
}