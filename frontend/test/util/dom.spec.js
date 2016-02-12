describe('util - DOM', function () {
    'use strict';

    beforeEach(function () {
        var html = '<div id="hasClass" class="someClass"></div>' +
                   '<div class="someClass"></div>';
        helpers.dom.addHTML(html);
    });

    afterEach(function () {
        helpers.dom.removeHTML();
    });

    it('should be able to determine if node has a class', function () {
        var targ = document.getElementById('hasClass');
        assert.equal(troyblank.util.dom.hasClass(targ, 'someClass'), true);
    });

    it('should be able to determine if node has does not have class', function () {
        var targ = document.getElementById('hasClass');

        assert.equal(troyblank.util.dom.hasClass(targ, 'someOtherClass'), false);
    });

    it('should be able to fire event listeners via a css selector with on', function () {
        var someClassDivs = document.querySelectorAll('.someClass'),
            toggle = false;

        troyblank.util.dom.on('.someClass', 'click', function () {
            toggle = true;
        });

        helpers.dom.fireEvent(someClassDivs[1], 'click');

        assert.equal(toggle, true);
    });
});
