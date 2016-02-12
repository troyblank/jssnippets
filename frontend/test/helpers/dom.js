(function (helpers) {
    'use strict';

    helpers.namespace('dom', {
        addHTML: function (str) {
            var html = document.createElement('div');
            html.innerHTML = str;
            document.body.appendChild(html);
        },

        removeHTML: function () {
            document.getElementsByTagName('html')[0].innerHTML = '';
        },

        fireEvent: function (ele, type) {
            var evt = document.createEvent('Events');
            evt.initEvent(type, true, true, window, 1);
            ele.dispatchEvent(evt);
        }
    });
}(helpers));