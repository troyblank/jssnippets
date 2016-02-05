//Each input shuld have have data-val-type
//EX: <input type="text" data-val-type="content" >
//
//content - field must have one more characters
//email - field must be an email address

(function (troyblank) {
    'use strict';

    var testMap =  {
        'content': troyblank.util.stringTester.contentTest,
        'email': troyblank.util.stringTester.emailTest
    };

    troyblank.namespace('util.formValidation', {
        testInputs: function (inputs) {
            // takes an array of inputs
            // spits out and array of errors
            var errors = [],
                i,
                targ,
                type;

            for (i = 0; i < inputs.length; i += 1) {
                targ = inputs[i];
                type = targ.getAttribute('data-val-type');
                if (!testMap[type](targ.value)) {
                    errors.push(targ);
                }
            }

            return errors;
        }
    });
}(troyblank));