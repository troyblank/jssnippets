describe('troyblank namespace', function () {
    'use strict';

    afterEach(function () {
        delete troyblank.nsTest;
    });

    it('should create the troyblank namespace', function () {
        assert.isObject(troyblank);
    });

    it('should add empty namespace when no object is provided', function () {
        troyblank.namespace('nsTest');

        assert.isObject(troyblank.nsTest);
    });

    it('should put provided object at the described namespace for single level', function () {
        var provided = {};

        troyblank.namespace('nsTest', provided);

        assert.strictEqual(provided, troyblank.nsTest);
    });

    it('should delimit namespaces with dots', function () {
        troyblank.namespace('nsTest.subNs');

        assert.isObject(troyblank.nsTest.subNs);
    });

    it('should put provided object at the described namespace when multi-level', function () {
        var provided = {};

        troyblank.namespace('nsTest.subNs', provided);

        assert.strictEqual(provided, troyblank.nsTest.subNs);
    });

    it('should not overwrite existing objects', function () {
        var existing = {};
        troyblank.nsTest = {nested: {existing: existing}};

        troyblank.namespace('nsTest.new');

        assert.strictEqual(existing, troyblank.nsTest.nested.existing);
    });
});
