import { NumberError } from "../errors/number.error";
import { GenericRule } from "./generic.rule";

export class ScalePrecisionRule<TModel, TValue> extends GenericRule<TModel, TValue> {
    constructor(precision: number, scale: number) {
        super((value: TValue) => {
            if (value == null)
                return null;

            if (typeof value !== 'number')
                throw new NumberError(typeof this);

            const regex = this.scalePrecisionRegex(scale, precision);

            return regex.test(value.toString())
                ? null
                : `Value must not be more than ${scale} digits in total, with allowance for ${precision} decimals`;
        })
    }

    private scalePrecisionRegex(scale: number, precision: number): RegExp {
        return new RegExp(
            `^(-)?([0-9]){0,${scale - precision}}(\\.[0-9]{0,${precision}})?$`
        );
    }
}