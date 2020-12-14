import { StringError } from "../errors/string.error";
import { AbstractRule } from "./abstract.rule";

const emailPattern = /^[a-zA-Z0-9.!#$%&’"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export class EmailRule<TModel, TValue> extends AbstractRule<TModel, TValue> {
    constructor() {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== 'string')
                throw new StringError(typeof this);

            return emailPattern.test(value)
                ? null
                : 'Not a valid email address';
        });
    }
}