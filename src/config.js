function Config() {
    this.foo = 'bar';

    this.doSomething = function (value) {
        console.log('here i am');
    }
}

Config.prototype.extraSomething = function () {
    console.log('extra something');
};

var square = function(width) {
    return {
        width: width,
        area: function() {
            return width * width;
        }
    };

}

exports.square = square;

exports.Config = Config;
