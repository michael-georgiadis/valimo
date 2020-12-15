import { AbstractRule } from "./abstract.rule";

export class CustomRule<TModel, TValue extends TModel> extends AbstractRule<TModel, TValue> {
    constructor(value: any,func: (value: any, subject: any) => boolean) {
        super((subject: TValue) => {
            if (value == null)
                return null;

            return func(value, subject)
                ? null
                : 'Custom rule not successful'
        });
    }
}