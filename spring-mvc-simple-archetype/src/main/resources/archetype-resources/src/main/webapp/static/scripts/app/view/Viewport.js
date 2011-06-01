Ext.define("app.view.Viewport", {
	extend: "Ext.container.Viewport",
	layout: "border",
	items:[{
		region: 'north',
		itemId: 'north',
		height: 50,
		border: false,
		margins: '5 5 5 5',
		html: '<div style="background-color:#DFE8F6;padding:10px;font-size:2em;height:100%"><h1>Project</h1></div>'
	}, {
		region: 'west',
		itemId: 'west',
		collapsible: true,
		split: true,
		title: 'Navigation',
		width: 250
	}, {
		region: 'south',
		itemId: 'south',
		title: 'Status Messages',
		collapsible: true,
		html: 'Information goes here',
		split: true,
		height: 80,
		minHeight: 80
	}, {
		region: 'east',
		itemId: 'east',
		title: 'East Panel',
		collapsible: true,
		split: true,
		width: 150
	}, {
		region: 'center',
		itemId: 'center',
		xtype: 'tabpanel',
		activeTab: 0,
		items: [{
			title: 'Default Tab',
			html: 'Project successfully created with <a href="https://github.com/thomasfr/spring-mvc-simple-archetype" target="_blank">spring-mvc-simple-archetype</a>'
		},
		{
			title: 'TestPage Tab',
			html: 'The second tab\'s content.',
			listeners: {
				"activate": {
					fn:function(newTab) {
						Ext.Ajax.request({
							url: 'test',
							success: function(response){
								var text = response.responseText;
								newTab.update(text+"<br/>Loaded via Ajax.");
							},
							disableCaching: false
						});
					}
				}
			}
		}]
	}],
	afterRender: function() {
		this.callParent(arguments);
		var head = document.getElementsByTagName("head")[0];
		var title = Ext.fly(head).down("title").dom.innerHTML;
		if(!Ext.isEmpty(title)) {
			this.getComponent("north").getTargetEl().down("h1").update(title + " Project");
		}
	}
});