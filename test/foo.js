var should = require('should'),
    toTest = require('../src/index.js');

describe('UNIT TEST / Foo / ', function () {

    describe('Should be foo', function () {
        it('should test foo', function () {
            toTest.runMe('foo', function(returned, err) {
                should.equal('foo', returned);
            });
        });
    });
});
