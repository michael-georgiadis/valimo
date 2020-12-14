"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberException = void 0;
class NumberException extends TypeError {
    constructor(rule) {
        super(`A non-string value was pass to ${rule} rule`);
    }
}
exports.NumberException = NumberException;
//# sourceMappingURL=number.error.js.map