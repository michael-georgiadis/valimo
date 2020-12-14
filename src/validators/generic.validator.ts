import { ValidatorResult } from "./result.validator";

export type GenericValidator<TValue> = (value: TValue) => ValidatorResult;