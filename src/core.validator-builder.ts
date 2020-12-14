import { CoreValidator } from "./core.validator";
import { NotNullRule } from "./rules/not-null.rule";
import { MinLengthRule } from "./rules/min-length.rule";

export class CoreValidatorBuilder<T> {

    constructor(public validator: CoreValidator<T>, public propertyName: string) {
        this.validator.rules[propertyName] = [];
    }

    public isRequired() {
        this.validator.rules[this.propertyName]
            .push(new NotNullRule());

        return this;
    }

    public isMinLengthOf(characters: number) {
        this.validator.rules[this.propertyName]
            .push(new MinLengthRule(characters));

        return this;
    }

    public withMessage(message: string) {
        if (this.validator.rules[this.propertyName].length > 1)
            this.validator.rules[this.propertyName][
                this.validator.rules[this.propertyName].length - 1]
                .customErrorMessage = message;

        return this;
    }
}