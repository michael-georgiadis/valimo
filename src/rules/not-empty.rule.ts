import { StringError } from "../errors/string.error";
import { AbstractRule } from "./abstract.rule";

export class NotEmptyRule<TModel, TValue> extends AbstractRule<TModel, TValue> {
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