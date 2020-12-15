import { CustomRule } from './rules/custom.rule';
import { AbstractRule } from "./rules/abstract.rule";
import { CoreRule } from "./rules/core.rule";
import { ValidatorGenerator } from "./validator.generator";
import { IValidationError } from "./errors/validation.error"
import { IValidationResult } from './validation.result';


export abstract class AbstractValidator<T> {


    public rules: { [property: string]: CoreRule<T>[] } = {};
    public sanitizers: { [property: string]: any } = {};

    constructor() { }

    public ruleFor(propertyNameFunc: (subject: T) => any): ValidatorGenerator<T> {
        const p = new Proxy({} as any, {
            get(target, prop) { return prop }
        });

        const propertyName = propertyNameFunc(p) as string;

        return new ValidatorGenerator<T>(this, propertyName);
    }

    public validate(object: T): IValidationResult {
        const errors: IValidationError[] = []

        for (let propertyName in this.rules) {
            for (let rule of this.rules[propertyName]) {

                const errorResult = rule instanceof CustomRule
                    ? rule.validate(object, object)
                    : rule.validate(object[propertyName as keyof T], object);


                if (errorResult != null)
                    errors.push({
                        property: propertyName,
                        error: errorResult
                    });
            }
        }

        return errors.length > 0
            ? { success: false, errors: errors }
            : { success: true }
    }
}