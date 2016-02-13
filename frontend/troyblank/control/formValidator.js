// Each input should have have data-val-type and a data-error-text attribute/
// As well as an element with ERROR_CLASS under it.
// EX: <input type="text" data-val-type="content" data-error-text="Please enter something here." >
//     <span class="fields-list__error"></span>

(function (troyblank) {
    'use strict';

    var ERROR_CLASS = 'fields-list__error',
        SCROLL_PADDING = 50,
        SCROLL_SPEED = 500;

    function addListeners() {
        $('form').on('keyup', 'input.error', troyblank.control.formValidator.removeError);
    }

    function scrollToFirstError(input) {
        $('html, body').animate({'scrollTop': $(input).offset().top - SCROLL_PADDING}, SCROLL_SPEED);
    }

    function addErrorToInput(input) {
        var targ = $(input);
        targ.addClass('error');
        targ.next('.fields-list__error').html(targ.data('error-text'));
    }

    troyblank.namespace('control.formValidator', {
        init: function () {
            addListeners();
        },

        testForm: function (form) {
            var errors = troyblank.util.formValidation.testInputs($('input[data-val-type]', form)),
                i = errors.length;

            if (i > 0) {
                while (i >= 0) {
                    addErrorToInput(errors[i]);
                    i -= 1;
                }
                scrollToFirstError(errors[0]);
                return false;
            }
            return true;
        },

        removeError: function () {
            $(this).removeClass('error');
            $(this).next('.' + ERROR_CLASS).html('');
        }
    });

    $(troyblank.control.formValidator.init);
}(troyblank));