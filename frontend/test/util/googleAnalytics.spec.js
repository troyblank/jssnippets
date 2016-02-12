describe('util - Google Analytics', function () {
    'use strict';

    before(function () {
        helpers.dom.addHTML('<a href="http://www.somewhere.com" class="js-track-link" data-ga-label="stay in touch - twitter">');
    });

    it('should be able to track a link', function () {
        var trackLink = sinon.spy(troyblank.util.googleAnalytics, 'trackLink'),
            trackLinkButton = document.querySelector('.js-track-link');

        troyblank.util.googleAnalytics.init();

        helpers.dom.fireEvent(trackLinkButton, 'click');

        assert.equal(trackLink.called, true);
    });

    it('should be able to get ga label from a track link', function () {
        var trackEvent = sinon.spy(troyblank.util.googleAnalytics, 'trackEvent'),
            trackLinkButton = document.querySelector('.js-track-link');

        helpers.dom.fireEvent(trackLinkButton, 'click');

        assert.equal(trackEvent.args[0][2], 'http://www.somewhere.com');
        troyblank.util.googleAnalytics.trackEvent.restore();
    });

    it('should be able to track a page view', function () {
        var trackPageView = sinon.spy(troyblank.util.googleAnalytics, 'trackPageview');

        troyblank.util.googleAnalytics.trackPageview('/somepage');

        assert.equal(trackPageView.called, true);
    });

    it('should be able to track an event', function () {
        var trackEvent = sinon.spy(troyblank.util.googleAnalytics, 'trackEvent');

        troyblank.util.googleAnalytics.trackEvent('home', 'click', 'cta');

        assert.equal(trackEvent.called, true);
    });

});