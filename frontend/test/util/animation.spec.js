describe('util - Animation', function () {
    'use strict';

    var vertex = [
        {x: 640, y: 393},
        {x: 528, y: 393},
        {x: 528, y: 471},
        {x: 408, y: 590},
        {x: 98, y: 590}
    ]

    it('should be able get the distance of a vertice', function () {
        var dist = troyblank.util.animation.getVerticeDist({x: 0, y: 300}, {x: 234, y: 567});

        assert.equal(dist.dx, 234);
        assert.equal(dist.dy, 267);
        assert.equal(dist.d, 501);
    });

    it('should be able get the longets vertice distance', function () {
        var longestDistance = troyblank.util.animation.getLongestVerticeDist(vertex);

        assert.equal(longestDistance, 310);
    });

    it('should be able to calculate even frames along a vertex', function () {
        var frames = troyblank.util.animation.calcVertexFrames(vertex, 20);

        assert.equal(typeof frames, 'object');
        assert.equal(typeof frames[0].x, 'number');
        assert.equal(frames[frames.length - 1].y, 590);
    });
});