const expect = require("chai").expect;
const splitTextIntoLinkedSlices = require("../src/utils/LinkedTextUtils").splitTextIntoLinkedSlices;

describe('linikedtext', () => {
    it('should splitTextIntoLinkedSlices works with a linktext that have no link', () => {
        expect(
            splitTextIntoLinkedSlices('abcd')
        ).to.deep.equal(
            [
                {
                    text: 'abcd',
                    isLinked: false
                }
            ]
        )
    });

    it('should splitTextIntoLinkedSlices works with a linktext that have a single http link', () => {
        expect(
            splitTextIntoLinkedSlices('a http://github.com')
        ).to.deep.equal(
            [
                {
                    text: 'a ',
                    isLinked: false
                },
                {
                    text: 'http://github.com',
                    isLinked: true
                },
            ]
        )
    });

    it('should splitTextIntoLinkedSlices works with a linktext that have a single https link', () => {
        expect(
            splitTextIntoLinkedSlices('a https://github.com')
        ).to.deep.equal(
            [
                {
                    text: 'a ',
                    isLinked: false
                },
                {
                    text: 'http://github.com',
                    isLinked: true
                },
            ]
        )
    });

    it('should splitTextIntoLinkedSlices works with a linktext that have two http links', () => {
        expect(
            splitTextIntoLinkedSlices('a http://github.com b http://google.com')
        ).to.deep.equal(
            [
                {
                    text: 'a ',
                    isLinked: false
                },
                {
                    text: 'http://github.com',
                    isLinked: true
                },
                {
                    text: ' b ',
                    isLinked: false
                },
                {
                    text: 'http://google.com',
                    isLinked: true
                },
            ]
        )
    });
});