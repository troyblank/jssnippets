'use strict';

module.exports = function (grunt, options) {
    return {
        'test': [
            'jslint',
            'karma:test'
        ]
    };
};