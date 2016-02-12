module.exports = {
    frontend: {
        src: ['frontend/troyblank/**/*.js'],
        directives: {
            browser: true,
            regexp: true,
            predef: ['troyblank',
                     'ga']
        }
    },
    frontend_test: {
        src: ['frontend/test/**/*.js'],
        directives: {
            browser: true,
            predef: ['afterEach',
                     'assert',
                     'before',
                     'beforeEach',
                     'describe',
                     'it',
                     'sinon',
                     'helpers',
                     'troyblank']
        }
    }
};