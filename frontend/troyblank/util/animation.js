(function (troyblank) {
    'use strict';
    troyblank.namespace('util.animation', {

        localizeMousePoint: function (event, element) {
            // returns a point that is relative to the element
            // takes a mouse event and an element
            var x = 0,
                y = 0,
                xScrollPos = 0,
                yScrollPos = 0;

            while (element) {
                if (element.tagName === 'BODY') {
                    // deal with body quirks
                    xScrollPos = element.scrollLeft || document.documentElement.scrollLeft;
                    yScrollPos = element.scrollTop || document.documentElement.scrollTop;

                    x += (element.offsetLeft - xScrollPos + element.clientLeft);
                    y += (element.offsetTop - yScrollPos + element.clientTop);
                } else {
                    x += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                    y += (element.offsetTop - element.scrollTop + element.clientTop);
                }

                element = element.offsetParent;
            }

            return {
                x: event.clientX - x,
                y: event.clientY - y
            };
        },

        calcVertexFrames: function (vertex, speed) {
            // takes a speed and gets even points along an vertex.
            // a vertex in this context is an array of objects with x and y point.
            var longestDistance = this.getLongestVerticeDist(vertex),
                frames = [],
                pointA,
                pointB,
                dist,
                haste,
                x,
                y,
                i,
                j;

            for (i = 1; i < vertex.length; i += 1) {
                pointA = vertex[i - 1];
                pointB = vertex[i];

                dist = this.getVerticeDist(pointA, pointB);
                haste = Math.ceil((dist.d / longestDistance) * speed);

                for (j = 0; j <= haste; j += 1) {
                    x = pointA.x + dist.dx * j / haste;
                    y = pointA.y + dist.dy * j / haste;
                    frames.push({x: x, y: y});
                }
            }

            return frames;
        },

        getVerticeDist: function (ptA, ptB) {
            var dx = ptB.x - ptA.x,
                dy = ptB.y - ptA.y;

            return {
                dx: dx,
                dy: dy,
                d: Math.abs(dx) + Math.abs(dy)
            };
        },

        getLongestVerticeDist: function (vertex) {
            var longestDistance = 0,
                pointA,
                pointB,
                dist,
                i;

            for (i = 1; i < vertex.length; i += 1) {
                pointA = vertex[i - 1];
                pointB = vertex[i];
                dist = this.getVerticeDist(pointA, pointB);

                if (dist.d > longestDistance) {
                    longestDistance = dist.d;
                }
            }

            return longestDistance;
        }
    });
}(troyblank));