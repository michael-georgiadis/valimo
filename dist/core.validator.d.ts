export declare abstract class CoreValidator<T> {
    protected rules: string[];
    constructor();
    ruleFor(f: (x: T) => any): any;
    validate(object: T): boolean;
}
