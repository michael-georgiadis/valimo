export declare abstract class CoreRule<TModel> {
    protected _customErrorMessage?: string;
    protected _whenCondition?: (model: TModel) => boolean;
    protected _unlessCondition?: (model: TModel) => boolean;
    set customErrorMessage(customErrorMessage: string);
    set whenCondition(condition: (model: TModel) => boolean);
    set unlessCondition(condition: (model: TModel) => boolean);
}
