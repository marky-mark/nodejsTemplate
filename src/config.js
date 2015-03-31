function Config() {
    this.foo = 'bar';

    this.doSomething = function (value) {
        console.log('here i am');
    }
}

Config.prototype.extraSomething = function () {
    console.log('extra something');
};

exports.Config = Config;
