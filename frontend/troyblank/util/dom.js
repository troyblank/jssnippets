//Simple DOM functionality when something like jQuery is too heavy.

(function (troyblank) {
    'use strict';

    troyblank.namespace('util.dom', {
        on: function (selector, event, handler) {
            [].forEach.call(document.querySelectorAll(selector), function (el) {
                el.addEventListener(event, handler);
            });
        },

        hasClass: function (ele, className) {
            if (ele.getAttribute('class') !== null && ele.getAttribute('class').indexOf(className) >= 0) {
                return true;
            }
            return false;
        }
    });
}(troyblank));