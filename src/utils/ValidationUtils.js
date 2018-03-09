
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
