describe('util - Canvas', function () {
    'use strict';

    beforeEach(function () {
        var html = '<canvas id="someCanvas"></canvas>';
        helpers.dom.addHTML(html);
    });

    afterEach(function () {
        helpers.dom.removeHTML();
    });

    it('should be able to get a 2D context', function () {
        var context = troyblank.util.canvas.get2DContext('someCanvas');

        assert.notEqual(context.canvas, undefined);
    });

    it('should be able to clear a canvas', function () {
        var context = troyblank.util.canvas.get2DContext('someCanvas');

        troyblank.util.canvas.clear(context);
        assert.notEqual(context.canvas, undefined);
    });
});