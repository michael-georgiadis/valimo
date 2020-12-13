"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreRule = void 0;
class CoreRule {
    set customErrorMessage(customErrorMessage) {
        this._customErrorMessage = customErrorMessage;
    }
    set whenCondition(condition) {
        this._whenCondition = condition;
    }
    set unlessCondition(condition) {
        this._unlessCondition = condition;
    }
}
exports.CoreRule = CoreRule;
//# sourceMappingURL=core.rule.js.map