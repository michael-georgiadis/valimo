import { ValidatorResult } from "../validators/result.validator";

export abstract class CoreRule<TModel> {
    protected _customErrorMessage?: string;
    protected _whenCondition?: (model: TModel) => boolean;
    protected _unlessCondition?: (model: TModel) => boolean;

    public set customErrorMessage(customErrorMessage: string) {
        this._customErrorMessage = customErrorMessage;
    }

    public set whenCondition(condition: (model: TModel) => boolean) {
        this._whenCondition = condition;
    }

    public set unlessCondition(condition: (model: TModel) => boolean) {
        this._unlessCondition = condition;
    }

    public abstract validate(value: any, model: TModel): ValidatorResult
}