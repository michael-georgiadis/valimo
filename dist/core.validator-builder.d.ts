import { CoreValidator } from "./core.validator";
export declare class CoreValidatorBuilder<T> {
    validator: CoreValidator<T>;
    propertyName: string;
    constructor(validator: CoreValidator<T>, propertyName: string);
    isRequired(): this;
    isMinLengthOf(characters: number): this;
    withMessage(message: string): this;
}
