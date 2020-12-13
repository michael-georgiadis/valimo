"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreValidator = void 0;
// import { ValueOf } from "./types/valueOf.type";
class CoreValidator {
    constructor() {
        this.rules = [];
    }
    ruleFor(f) {
        const p = new Proxy({}, {
            get(target, prop) { return prop; }
        });
        const propertyName = f(p);
        this.rules.push(propertyName);
    }
    validate(object) {
        const anyObject = object;
        console.log(anyObject);
        for (let rule of this.rules) {
            if (anyObject[rule] === '') {
                return false;
            }
        }
        return true;
    }
}
exports.CoreValidator = CoreValidator;
//# sourceMappingURL=core.validator.js.map