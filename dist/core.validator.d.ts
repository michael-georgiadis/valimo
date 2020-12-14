import { CoreRule } from "./rules/core.rule";
import { CoreValidatorBuilder } from "./core.validator-builder";
import { IValidationError } from "./errors/validation.error";
export declare abstract class CoreValidator<T> {
    rules: {
        [property: string]: CoreRule<T>[];
    };
    constructor();
    ruleFor(f: (x: T) => any): CoreValidatorBuilder<T>;
    validate(object: T): IValidationError[] | null;
}
