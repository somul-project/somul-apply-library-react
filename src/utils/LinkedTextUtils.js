export function splitTextIntoLinkedSlices(text) {
    let linkedSlices = [];

    linkedSlices.push(
        new LinkedTextSlice(text, false)
    );

    return linkedSlices;
}

export class LinkedTextSlice {
    constructor(text, isLinked) {
        this.text = text;
        this.isLinked = isLinked;
    }
}