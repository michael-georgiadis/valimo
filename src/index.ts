import { CoreValidator } from "./core.validator";

interface Person {
    name: string | null,
    age: number
};

class PersonValidator extends CoreValidator<Person> {

    constructor() {
        super();

        this.ruleFor(x => x.name)
            .isRequired()
            .withMessage("It's empty")
            .isMinLengthOf(9)
            .withMessage("You're stupid");
    }
};

const person = <Person>{
    name: null,
    age: 14
}

const validator = new PersonValidator();
const result = validator.validate(person);
if (result == null) {
    console.log(true);
} else {
    console.log(result);
}