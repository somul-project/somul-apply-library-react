const expect = require("chai").expect;
const notEmptyString = require("../src/utils/ValidationUtils").notEmptyString;


describe('notEmptyString', () => {
    it('should notEmptyString with notEmptyString return true', () => {
        expect(
            notEmptyString("a")
        ).to.equal(true);
    });

    it('should notEmptyString with emptyString return false', () => {
        expect(
            notEmptyString("")
        ).to.equal(false);
    });

    it('should notEmptyString with undefined return false', () => {
        expect(
            notEmptyString(undefined)
        ).to.equal(false);
    });

    it('should notEmptyString with onlySpace return false', () => {
        expect(
            notEmptyString(" ")
        ).to.equal(false);
    });
});