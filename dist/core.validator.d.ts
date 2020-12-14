import { CoreRule } from "./rules/core.rule";
import { CoreValidatorBuilder } from "./core.validator-builder";
export declare abstract class CoreValidator<T> {
    rules: {
        [property: string]: CoreRule<T>[];
    };
    constructor();
    ruleFor(f: (x: T) => any): CoreValidatorBuilder<T>;
    validate(object: T): import("./validators/result.validator").ValidatorResult;
}
