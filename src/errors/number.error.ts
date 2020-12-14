export class NumberError extends TypeError {
    constructor(rule: string){
        super(`A non-string value was pass to ${rule} rule`)
    }
}