module.exports = {
    test: {
        configFile: 'karma.conf.js',
        singleRun: true,
        mochaReporter: {
            output: 'full'
        },
        reporters: 'mocha'
    }
};