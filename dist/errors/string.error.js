"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringError = void 0;
class StringError extends TypeError {
    constructor(rule) {
        super(`A non-string value was pass to ${rule} rule`);
    }
}
exports.StringError = StringError;
//# sourceMappingURL=string.error.js.map