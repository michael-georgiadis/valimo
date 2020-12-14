"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericRule = void 0;
const core_rule_1 = require("./core.rule");
class GenericRule extends core_rule_1.CoreRule {
    constructor(valueValidator) {
        super();
        this.valueValidator = valueValidator;
    }
    validate(value, model) {
        if (this.whenCondition != null && this.whenCondition(model)) {
            return null;
        }
        if (this.unlessCondition != null && this.unlessCondition(model)) {
            return null;
        }
        const error = this.valueValidator(value);
        return error != null ? this._customErrorMessage || error : null;
    }
}
exports.GenericRule = GenericRule;
//# sourceMappingURL=generic.rule.js.map