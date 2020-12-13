import { CoreRule } from "./core.rule";

export class GenericRule<TModel, TValue> extends CoreRule<TModel> {
    private readonly valueValidator: any;
}