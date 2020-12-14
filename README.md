# Valify

A validation library inspired by Fluent Validation of C# and fluentvalidation-ts of @AlexJPotter

# So what's different?

A lot of validation libraries out there, don't use the lambda functions to capture the property of the object that they're about to validate and pass it as strings.  
That to me is really bad productivity wise, because the (glorious) Typescript Compiler doesn't give you a hint, when for some reason you change the name of the function.  
Also, many of the libraries I've seen, do really complex stuff, that to my experience, I never had to use. The goal of this library was to make it lightweight, fast and easy to use.

# How do I use it?
Simple! It works like any other validation library. For example: 
```typescript
interface Person {
    name: string,
    age: number
};

class PersonValidator extends AbstractValidator<Person> {
    constructor() {
        super();

        this.ruleFor(x => x.name)
            .isNotEmpty() // Checks if the name is not empty
            .withMessage("NAMES! NAMES! GIVE ME NAMES") // A (little too dramatic) custom message
            .hasMinLengthOf(4)
            .withMessage("Custom messages for every rule!");
    }
}
```

Now we have set up the custom validator for our object. So, all we have to do is to validate it.

```typescript
const person = <Person> {
    name: "Connor Kenway",
    age: 34
};

const personValidator = new PersonValidator();
const result = personValidator.validate(person);
```

The result is of type 
```typescript
interface IValidationError {
    property: string,
    errors?: string[]
}
```
If it's an empty array then no errors were found. Otherwise, it will contain the property and the errors that surrounded that property.

# Future plans?
My plan for the future is to integrate my validators to be traslated to that of express-validator, so you can use a "type-safe" way to validate your objects,
without again relying on strings! Star it so you can find out!
