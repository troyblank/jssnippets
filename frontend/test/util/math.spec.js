describe('util - Math', function () {
    'use strict';

    it('should be able to get a random number from a range', function () {
        var randomNum = troyblank.util.math.randomFromRange(-13, 28);

        assert.equal(typeof randomNum, 'number');
        assert.equal(randomNum >= -13, true);
        assert.equal(randomNum <= 28, true);
    });
});