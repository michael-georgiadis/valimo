import { AbstractRule } from "./abstract.rule";

export class NullRule<TModel, TValue> extends AbstractRule<TModel, TValue> {
    constructor() {
        super((value: TValue) => {
            if (value == null)
                return null;
            else
                return "Value must be null";
        });
    }
}