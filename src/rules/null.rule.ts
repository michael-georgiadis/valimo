import { GenericRule } from "./generic.rule";

export class NullRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor() {
        super((value: TValue) => {
            if (value == null)
                return null;
            else
                return "Value must be null";
        });
    }
}