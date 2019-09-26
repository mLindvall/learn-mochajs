var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('Array1', function () {
    describe('#indexOf()', function () {
        it('should return 3 ', function () {
            assert.equal([1, 2, 3, 4].indexOf(4), 3);
        });
    });
});

beforeEach(function () {
    console.log('before every test in every file');
});