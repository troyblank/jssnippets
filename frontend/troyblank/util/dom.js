//Simple DOM functionality when something like jQuery is too heavy.

(function (troyblank) {
    'use strict';

    troyblank.namespace('util.dom', {
        hasClass: function (ele, className) {
            if (ele.getAttribute('class') !== null && ele.getAttribute('class').indexOf(className) >= 0) {
                return true;
            }
            return false;
        }
    });
}(troyblank));