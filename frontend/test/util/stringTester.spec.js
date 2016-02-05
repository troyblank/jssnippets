describe('util - String Tester', function () {
    'use strict';

    it('should be able to perform a content test', function () {
        assert.equal(troyblank.util.stringTester.contentTest('56'), true);
        assert.equal(troyblank.util.stringTester.contentTest('@#!'), true);
        assert.equal(troyblank.util.stringTester.contentTest('hello there'), true);
        assert.equal(troyblank.util.stringTester.contentTest(NaN), true);
        assert.equal(troyblank.util.stringTester.contentTest(''), false);
    });

    it('should be able to perform an email test', function () {
        assert.equal(troyblank.util.stringTester.emailTest('email@111.222.333.44444'), false);
        assert.equal(troyblank.util.stringTester.emailTest('email@example@example.com'), false);
        assert.equal(troyblank.util.stringTester.emailTest('@example.com'), false);
        assert.equal(troyblank.util.stringTester.emailTest('Abc..123@example.com'), false);
        assert.equal(troyblank.util.stringTester.emailTest('email@example.com'), true);
    });
});