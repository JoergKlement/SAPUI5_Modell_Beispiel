sap.ui.define([
		"sap/ui/core/UIComponent"
	], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sapui5.demo.model.Component", {
		
    	metadata : {
    		manifest: "json"
    	},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init : function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// Get the Router Instance and initialize
			this.getRouter().initialize();
		}
	});
});