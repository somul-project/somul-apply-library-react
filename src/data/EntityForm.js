export const TYPE_ONELINETEXT = "";
export const TYPE_BOOLEAN = "";

export class EntityForm {
    constructor(value, type, isRequired = false, validators = []) {
        this.value = value;
        this.type = type;
        this.isRequired = isRequired;
        this.validators = validators;
    }
}