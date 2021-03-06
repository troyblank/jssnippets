'use strict';

module.exports = function (config) {
    config.set({
        frameworks: [
            'mocha',
            'chai',
            'referee'
        ],

        files: [
            'bower_components/jquery/dist/jquery.js',

            'frontend/troyblank/troyblank.js',
            'frontend/troyblank/util/stringTester.js',
            'frontend/troyblank/**/*.js',

            'frontend/test/helpers/helpers.js',
            'frontend/test/helpers/*.js',
            'frontend/test/**/*.spec.js'
        ],

        browsers: ['PhantomJS'],

        client: {
            captureConsole: true
        }
    });
};