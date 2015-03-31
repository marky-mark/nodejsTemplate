var should = require('should'),
    toTest = require('../src/config.js').Config,
    toTest2 = require('../src/Test.js');

describe('UNIT TEST / Foo / ', function () {

    describe('Should be foo', function () {

        it('should test config', function () {

            var config = new toTest();
            should.equal(config.foo, 'bar');
            config.foo = 'foo';
            should.equal(config.foo, 'foo');
        });

        it('should test Test', function () {

            var config = new toTest2();
            should.equal(config.foo, 'bar');
            config.foo = 'foo';
            should.equal(config.foo, 'foo');
        });
    });
});
