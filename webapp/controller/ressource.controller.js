sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
		
	], function (Controller, History) {
	"use strict";

	return Controller.extend("sapui5.demo.model.controller.ressource", {
	    onInit : function () {
	        this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("toRessource").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched : function (oEvent) {
			var sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();
			jQuery.sap.require("jquery.sap.resources");
			var oBundle = jQuery.sap.resources({	url : "i18n/i18n.properties",
    												locale : sCurrentLocale });
		    var sMessage = oBundle.getText("ressourceTest", [sCurrentLocale]);
		    
		    var oJSONModel = new sap.ui.model.json.JSONModel(); //Create new JSON Modell Instance
		    oJSONModel.setData({"Message": sMessage});
	    	var oView = this.getView(); 						//get View Object
	    	oView.setModel(oJSONModel,"RESSOURCE"); 			//set JSON Modell Instance to View with Name RESSOURCE
		},
		
	    onNavPress : function(){ 
		    var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				// The history contains a previous entry
				window.history.go(-1);
			} else {
				// No Navigation history found, navigate via Route toStart
				this._oRouter.navTo("toStart");
			}
		}
	});
});