"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinLengthRule = void 0;
const generic_rule_1 = require("./generic.rule");
const string_error_1 = require("../errors/string.error");
class MinLengthRule extends generic_rule_1.GenericRule {
    constructor(minLenth) {
        super((value) => {
            if (value == null) {
                return null;
            }
            if (typeof value !== 'string') {
                throw new string_error_1.StringError(typeof this);
            }
            return value.length >= minLenth
                ? null
                : `Value must be at least ${minLenth.toLocaleString()} characters long`;
        });
    }
}
exports.MinLengthRule = MinLengthRule;
//# sourceMappingURL=min-length.rule.js.map