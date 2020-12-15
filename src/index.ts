import { AbstractValidator } from "./abstract.validator";

interface Person {
    name: string,
    age: number
};

class PersonValidator extends AbstractValidator<Person> {
    constructor() {
        super()

        this.ruleFor(x => x.name)
            .hasMinLengthOf(3)
            .withMessage("I don't know");

        this.ruleFor(x => x.age)
            .customRule(45, (value, person) => {
                if (person.age < value)
                    return false;
                else
                    return true;
            })
            .withMessage('Age not greater than 45');
    }
}

const person = <Person>{
    name: "Michael",
    age: 22
};

const validator = new PersonValidator();

const validatorResult = validator.validate(person);

if (!validatorResult.success) {
    console.log(validatorResult.errors);
}