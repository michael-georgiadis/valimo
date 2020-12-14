import { IValidator } from "./validator.interface";
import { ValidatorGenerator } from "./validator.generator";
import { GenericRule } from "./rules/generic.rule";
import { CoreRule } from "./rules/core.rule";
import { CoreValidatorBuilder } from "./core.validator-builder";
// import { ValueOf } from "./types/valueOf.type";



export abstract class CoreValidator<T> {
    public rules: {[property: string]: CoreRule<T>[]}= {};

    constructor() { }

    public ruleFor(f: (x: T) => any): CoreValidatorBuilder<T> {
        const p = new Proxy({} as any, {
            get(target, prop) { return prop }
        });

        const propertyName: string = f(p);

        return new CoreValidatorBuilder<T>(this, propertyName);
    }

    public validate(object: T) {
        let errorMessage = "";
        const anyObject = object as any;
        for (let key in this.rules) {
            for (let rule of this.rules[key]) {
                const result = rule.validate(anyObject[key], object);
                if (result != null) {
                    errorMessage += result + "\n";
                }
            }
        }

        if (errorMessage !== "") {
            return errorMessage;
        } else {
            return null;
        }
    }
}