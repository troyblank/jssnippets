(function (troyblank) {
    'use strict';

    troyblank.namespace('util.math', {
        randomFromRange: function (startPoint, endPoint) {
            return (Math.random() * (endPoint - startPoint)) + startPoint;
        }
    });
}(troyblank));