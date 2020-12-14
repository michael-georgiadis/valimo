"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotNullRule = void 0;
const generic_rule_1 = require("./generic.rule");
class NotNullRule extends generic_rule_1.GenericRule {
    constructor() {
        super((value) => {
            if (value == null)
                return "Value cannot be null";
            else
                return null;
        });
    }
}
exports.NotNullRule = NotNullRule;
//# sourceMappingURL=not-null.rule.js.map