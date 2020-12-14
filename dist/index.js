"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_validator_1 = require("./core.validator");
;
class PersonValidator extends core_validator_1.CoreValidator {
    constructor() {
        super();
        this.ruleFor(x => x.name)
            .isRequired()
            .isMinLengthOf(9)
            .withMessage("You're stupid");
    }
}
;
const person = {
    name: "Michael",
    age: 14
};
const validator = new PersonValidator();
const result = validator.validate(person);
if (result == null) {
    console.log(true);
}
else {
    console.log(result);
}
//# sourceMappingURL=index.js.map