"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreValidator = void 0;
const core_validator_builder_1 = require("./core.validator-builder");
// import { ValueOf } from "./types/valueOf.type";
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
        let errorMessage = "";
        const anyObject = object;
        for (let key in this.rules) {
            for (let rule of this.rules[key]) {
                const result = rule.validate(anyObject[key], object);
                if (result != null) {
                    errorMessage += result + "\n";
                }
            }
        }
        if (errorMessage !== "") {
            return errorMessage;
        }
        else {
            return null;
        }
    }
}
exports.CoreValidator = CoreValidator;
//# sourceMappingURL=core.validator.js.map