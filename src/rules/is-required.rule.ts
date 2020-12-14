import { AbstractRule } from "./abstract.rule";

export class IsRequiredRule<TModel, TValue> extends AbstractRule<TModel, TValue> {

    constructor() {
        super((value: TValue) => {
            if (value == null)
                return "Value cannot be null";
            else
                return null
        });
    }
}