module.exports = {
    frontend_util: {
        src: ['frontend/troyblank/util/*.js'],
        directives: {
            browser: true,
            regexp: true,
            predef: ['troyblank',
                     'ga']
        }
    },
    frontend_control: {
        src: ['frontend/troyblank/control/*.js'],
        directives: {
            browser: true,
            regexp: true,
            predef: ['troyblank',
                     '$']
        }
    },
    frontend_test_util: {
        src: ['frontend/test/util/*.js'],
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
    },
    frontend_test_control: {
        src: ['frontend/test/control/*.js'],
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
                     'troyblank',
                     '$']
        }
    }
};