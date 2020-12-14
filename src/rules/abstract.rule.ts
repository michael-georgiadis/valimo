import { CoreRule } from "./core.rule";
import { GenericValidator } from "../validators/generic.validator";

export abstract class AbstractRule<TModel, TValue> extends CoreRule<TModel> {

    constructor(private readonly valueValidator: GenericValidator<TValue>) {
        super();
    }

    public validate(value: TValue, model: TModel) {
        if (this.whenCondition != null && this.whenCondition(model)) {
            return null;
        }

        if (this.unlessCondition != null && this.unlessCondition(model)) {
            return null;
        }

        const error = this.valueValidator(value);
        return error != null ? this._customErrorMessage || error : null;
    }
}