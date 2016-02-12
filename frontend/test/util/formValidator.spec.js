describe('util - Form Validator', function () {
    'use strict';

    beforeEach(function () {
        var html = '<input type="text" data-val-type="content" value="" id="firstError" >' +
                   '<input type="text" data-val-type="content" value="some content" >' +
                   '<input type="text" data-val-type="email" value="Joe Smith <email@example.com>" >' +
                   '<input type="text" data-val-type="email" value="someEmail@example.com" >';
        helpers.dom.addHTML(html);
    });

    afterEach(function () {
        helpers.dom.removeHTML();
    });

    it('should be able to determine form errors', function () {
        var inputs = document.querySelectorAll('input'),
            errors = troyblank.util.formValidation.testInputs(inputs);

        assert.equal(errors.length, 2);
        assert.equal(errors[0],  document.getElementById('firstError'));
    });
});