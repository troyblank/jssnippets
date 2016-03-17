(function (troyblank) {
    'use strict';

    troyblank.namespace('styletiles.util.math', {
        randomFromRange: function (startPoint, endPoint) {
            return (Math.random() * (endPoint - startPoint)) + startPoint;
        }
    });
}(troyblank));