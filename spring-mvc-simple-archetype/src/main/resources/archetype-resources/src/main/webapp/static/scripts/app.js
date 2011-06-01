Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true,
    paths: {
        'Ext': 'static/scripts/extjs/src'
    }
});
Ext.application({
    name: 'app',
    appFolder: 'static/scripts/app',
    launch: function() {
        Ext.create('app.view.Viewport');
    }
});