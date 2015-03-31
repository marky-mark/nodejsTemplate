var should = require('should'),
    toTest = require('../src/config.js').Config,
    toTestMore = require('../src/config.js'),
    toTest2 = require('../src/Test.js');

describe('UNIT TEST / Foo / ', function () {

    describe('Should be foo', function () {

        it('should test config', function () {

            var config = new toTest();
            should.equal(config.foo, 'bar');
            config.foo = 'foo';
            should.equal(config.foo, 'foo');

            config.doSomething();
            config.extraSomething();
        });

        it('should test Test', function () {

            var config = new toTest2();
            should.equal(config.foo, 'bar');
            config.foo = 'foo';
            should.equal(config.foo, 'foo');
        });

        it('should test square', function () {

            var config = toTestMore.square(2);
            should.equal(config.width, 2);
            should.equal(config.area(), 4);
            config.width = 'foo';
            should.equal(config.width, 'foo');
        });
    });
});
