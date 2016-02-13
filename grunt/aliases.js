'use strict';

module.exports = function (grunt, options) {
    return {
        'test': [
            'bower',
            'jslint',
            'karma:test'
        ]
    };
};