export interface ICommonContext {
    instanceToValidate: any,
    propertyValue: any,
    parentContext: ICommonContext
}

export interface IValidationContext {
    rootContextData: { [id: string]: any },
    
}