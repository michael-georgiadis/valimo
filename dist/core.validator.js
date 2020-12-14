"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreValidator = void 0;
const core_validator_builder_1 = require("./core.validator-builder");
class CoreValidator {
    constructor() {
        this.rules = {};
    }
    ruleFor(f) {
        const p = new Proxy({}, {
            get(target, prop) { return prop; }
        });
        const propertyName = f(p);
        return new core_validator_builder_1.CoreValidatorBuilder(this, propertyName);
    }
    validate(object) {
        let errors = [];
        for (let propertyName in this.rules) {
            let errorMessagesForRule = [];
            for (let rule of this.rules[propertyName]) {
                const errorResult = rule.validate(object[propertyName], object);
                if (errorResult != null)
                    errorMessagesForRule.push(errorResult);
            }
            if (errorMessagesForRule !== [])
                errors.push({
                    property: propertyName,
                    errors: errorMessagesForRule
                });
        }
        return errors.length > 0 ? errors : null;
    }
}
exports.CoreValidator = CoreValidator;
//# sourceMappingURL=core.validator.js.map