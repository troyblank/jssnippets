(function (troyblank) {
    'use strict';

    troyblank.namespace('util.stringTester', {
        contentTest: function (value) {
            return (/\S/.test(String(value)));
        },

        emailTest: function (value) {
            return (/^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(value)));
        }
    });
}(troyblank));