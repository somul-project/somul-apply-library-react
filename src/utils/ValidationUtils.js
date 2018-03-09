
export function notEmptyString(data) {
    console.log("data=", data);

    if (data === undefined || data == null) {
        return false;
    }

    if (data == "") {
        return false;
    }

    const spaceRegix = /^ +$/;

    if (spaceRegix.test(data)) {
        return false;
    }

    return true;
}

export function isValid(data, validators) {
    if (validators === undefined || validators == null) {
        return true;
    }

    const isValidOnEach = validators.map((validator) => {
        return validator(data);
    });

    const everycasesAreValid = isValidOnEach.reduce(
        (isValidOnEach1, isValidOnEach2) => (isValidOnEach1 && isValidOnEach2)
        , true);

    return everycasesAreValid;
}