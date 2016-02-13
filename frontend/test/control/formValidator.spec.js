describe('control - Form Validator', function () {
    'use strict';

    beforeEach(function () {
        var html = '<div class="js-contact-form"><form>' +
                   '<input type="text" data-val-type="content" value="" id="name" data-error-text="Please enter a valid name.">' +
                   '<span class="fields-list__error"></span>' +
                   '<input type="text" data-val-type="email" value="email@example.com" >' +
                   '<input type="submit" value="Contact an integration specialist" class="btn secondary">' +
                   '</form></div>';
        helpers.dom.addHTML(html);
    });

    afterEach(function () {
        helpers.dom.removeHTML();
    });

    it('should be able to test form invalid', function () {
        var valid = troyblank.control.formValidator.testForm($('form'));

        assert.equal(valid, false);
    });

    it('should be able to test form valid', function () {
        $('#name').val('Ron Berg');
        var valid = troyblank.control.formValidator.testForm($('form'));

        assert.equal(valid, true);
    });

    it('should hide error on keyup', function () {
        troyblank.control.formValidator.testForm($('form'));
        troyblank.control.formValidator.init();

        $('#name').val('Ron Berg');
        $('#name').keyup();

        assert.equal($('.fields-list__error').html(), '');
    });
});