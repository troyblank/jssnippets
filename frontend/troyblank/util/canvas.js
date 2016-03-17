(function (troyblank) {
    'use strict';

    troyblank.namespace('util.canvas', {
        get2DContext: function (canvasID) {
            return document.getElementById(canvasID).getContext('2d');
        },

        clear: function (context) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        }
    });
}(troyblank));