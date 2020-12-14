import { GenericRule } from "./generic.rule";

export class NotNullRule<TModel, TValue> extends GenericRule<TModel, TValue> {

    constructor() {
        super((value: TValue) => {
            if (value == null)
                return "Value cannot be null";
            else
                return null
        });
    }
}