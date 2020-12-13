import { CoreValidator } from "./core.validator";

interface Person {
    name: string,
    age: number
};

class PersonValidator extends CoreValidator<Person> {

    constructor() {
        super();

        this.ruleFor(x => x.name)
    }
};

const person = <Person> {
    name: "",
    age: 14
}

const validator = new PersonValidator();
console.log(validator.validate(person));