"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreValidatorBuilder = void 0;
const not_null_rule_1 = require("./rules/not-null.rule");
const min_length_rule_1 = require("./rules/min-length.rule");
class CoreValidatorBuilder {
    constructor(validator, propertyName) {
        this.validator = validator;
        this.propertyName = propertyName;
        this.validator.rules[propertyName] = [];
    }
    isRequired() {
        this.validator.rules[this.propertyName]
            .push(new not_null_rule_1.NotNullRule());
        return this;
    }
    isMinLengthOf(characters) {
        this.validator.rules[this.propertyName]
            .push(new min_length_rule_1.MinLengthRule(characters));
        return this;
    }
    withMessage(message) {
        if (this.validator.rules[this.propertyName].length > 1)
            this.validator.rules[this.propertyName][this.validator.rules[this.propertyName].length - 1]
                .customErrorMessage = message;
        return this;
    }
}
exports.CoreValidatorBuilder = CoreValidatorBuilder;
//# sourceMappingURL=core.validator-builder.js.map