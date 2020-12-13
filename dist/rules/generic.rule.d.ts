import { CoreRule } from "./core.rule";
export declare class GenericRule<TModel, TValue> extends CoreRule<TModel> {
    private readonly valueValidator;
}
