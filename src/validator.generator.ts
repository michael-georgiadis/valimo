import { AbstractValidator } from "./abstract.validator";
import { EmailRule } from "./rules/email.rule";
import { EqualRule } from "./rules/equal.rule";
import { ExclusiveBetweenRule } from "./rules/exclusive-between.rule";
import { GreaterThanOrEqualToRule } from "./rules/greater-than-or-equal-to.rule";
import { GreaterThanRule } from "./rules/greater-than.rule";
import { InclusiveBetweenRule } from "./rules/inclusive-between";
import { IsRequiredRule } from "./rules/is-required.rule";
import { LengthRule } from "./rules/length.rule";
import { LessThanOrEqualToRule } from "./rules/less-than-or-equal-to.rule";
import { LessThanRule } from "./rules/less-than.rule";
import { MatchRule } from "./rules/match.rule";
import { MaxLengthRule } from "./rules/max-length.rule";
import { MinLengthRule } from "./rules/min-length.rule";
import { NotEmptyRule } from "./rules/not-empty.rule";
import { NotEqualRule } from "./rules/not-equal.rule";
import { NullRule } from "./rules/null.rule";

export class ValidatorGenerator<T> {

    constructor(public validator: AbstractValidator<T>, public propertyName: string) {
        this.validator.rules[propertyName] = [];
    }

    public isEmail() {
        this.validator.rules[this.propertyName]
            .push(new EmailRule());

        return this;
    }

    public isEqualTo(anotherValue: any) {
        this.validator.rules[this.propertyName]
            .push(new EqualRule(anotherValue));

        return this;
    }

    public isExclusivelyBetween(low: number, high: number) {
        this.validator.rules[this.propertyName]
            .push(new ExclusiveBetweenRule(low, high));

        return this;
    }

    public isGreaterThanOrEqualTo(value: number) {
        this.validator.rules[this.propertyName]
            .push(new GreaterThanOrEqualToRule(value));

        return this;
    }

    public isGreaterThan(value: number) {
        this.validator.rules[this.propertyName]
            .push(new GreaterThanRule(value));

        return this;
    }

    public isInclusivelyBetween(low: number, high: number) {
        this.validator.rules[this.propertyName]
            .push(new InclusiveBetweenRule(low, high));

        return this;
    }

    public isRequired() {
        this.validator.rules[this.propertyName]
            .push(new IsRequiredRule());

        return this;
    }

    public hasLengthBetween(lowerBound: number, upperBound: number) {
        this.validator.rules[this.propertyName]
            .push(new LengthRule(lowerBound, upperBound));

        return this;
    }

    public isLessThanOrEqualTo(value: number) {
        this.validator.rules[this.propertyName]
            .push(new LessThanOrEqualToRule(value));

        return this;
    }

    public isLessThan(value: number) {
        this.validator.rules[this.propertyName]
            .push(new LessThanRule(value));
        
        return this;
    }

    public isMatchingWith(pattern: RegExp) {
        this.validator.rules[this.propertyName]
            .push(new MatchRule(pattern));

        return this;
    }

    public hasMaxLengthOf(characters: number) {
        this.validator.rules[this.propertyName]
            .push(new MaxLengthRule(characters));

        return this;
    }

    public hasMinLengthOf(characters: number) {
        this.validator.rules[this.propertyName]
            .push(new MinLengthRule(characters));

        return this;
    }

    public isNotEmpty() {
        this.validator.rules[this.propertyName]
            .push(new NotEmptyRule());
        
        return this;
    }

    public isNotEqualTo(value: any) {
        this.validator.rules[this.propertyName]
            .push(new NotEqualRule(value));

        return this;
    }

    public isNull() {
        this.validator.rules[this.propertyName]
            .push(new NullRule());

        return this;
    }

    public hasScalePrecisionOf(precision: number, scale: number) {
        this.validator.rules[this.propertyName]
            .push(new NullRule());

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