https://github.com/alsotang/node-lessons/tree/master/lesson7
let should = chai.should();

describe('simple test', function () {
    it('should equal 0 when n === 0', function () {
        window.fibonacci(0).should.equal(0);
    });
});