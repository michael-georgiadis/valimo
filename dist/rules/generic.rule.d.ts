import { CoreRule } from "./core.rule";
import { GenericValidator } from "../validators/generic.validator";
export declare abstract class GenericRule<TModel, TValue> extends CoreRule<TModel> {
    private readonly valueValidator;
    constructor(valueValidator: GenericValidator<TValue>);
    validate(value: TValue, model: TModel): import("../validators/result.validator").ValidatorResult;
}
