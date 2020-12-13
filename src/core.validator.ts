import { IValidator } from "./validator.interface";
import { ValidatorGenerator } from "./validator.generator";
// import { ValueOf } from "./types/valueOf.type";



export abstract class CoreValidator<T> {
    protected rules: string[] = [];

    constructor() { }

    public ruleFor(f: (x: T) => any): any {
        const p = new Proxy({} as any, {
            get(target, prop) { return prop }
        });

        const propertyName: string = f(p);

        this.rules.push(propertyName);
    }

    public validate(object: T) {
        const anyObject = object as any;
        console.log(anyObject);
        for(let rule of this.rules) {
            if(anyObject[rule] === '') {
                return false;
            }
        }
        return true;
    }
}