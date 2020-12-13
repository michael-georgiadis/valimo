"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_validator_1 = require("./core.validator");
;
class PersonValidator extends core_validator_1.CoreValidator {
    constructor() {
        super();
        this.ruleFor(x => x.name);
    }
}
;
const person = {
    name: "",
    age: 14
};
const validator = new PersonValidator();
console.log(validator.validate(person));
//# sourceMappingURL=index.js.map