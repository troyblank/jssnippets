describe('util - DOM', function () {
    'use strict';

    before(function () {
        helpers.dom.addHTML('<div id="hasClass" class="someClass"></div>');
    });

    it('should be able to determine if node has a class', function () {
        var targ = window.document.getElementById('hasClass');
        assert.equal(troyblank.util.dom.hasClass(targ, 'someClass'), true);
    });

    it('should be able to determine if node has does not have class', function () {
        var targ = window.document.getElementById('hasClass');
        assert.equal(troyblank.util.dom.hasClass(targ, 'someOtherClass'), false);
    });
});
