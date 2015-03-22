var request = require('supertest')
    , should = require('should');

describe('UNIT TEST / Foo / ', function () {

    describe('Should be foo', function () {
        it('should test foo', function () {
            should.equal('foo', 'foo');
        });
    });
});
