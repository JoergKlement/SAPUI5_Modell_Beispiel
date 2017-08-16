sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History",
		"sap/ui/model/json/JSONModel",
		"sap/ui/Device"
	], function (Controller, History, JSONModel, Device) {
	"use strict";

	return Controller.extend("sapui5.demo.model.controller.device", {
	    onInit : function () {
	        this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("toDevice").attachPatternMatched(this._onRouteMatched, this);
		},

		_onRouteMatched : function (oEvent) {
			var oModel = new JSONModel(Device);			//Get Device Model
			oModel.setDefaultBindingMode("OneWay");		//Device Model must not be changeable
			var oView = this.getView();					//get View Object
			oView.setModel(oModel, "DEVICE");			//set Device Modell Instance to View with name "DEVICE"
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