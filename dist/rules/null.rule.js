"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullRule = void 0;
const generic_rule_1 = require("./generic.rule");
class NullRule extends generic_rule_1.GenericRule {
    constructor() {
        super((value) => {
            if (value == null)
                return null;
            else
                return "Value must be null";
        });
    }
}
exports.NullRule = NullRule;
//# sourceMappingURL=null.rule.js.map