sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
	], function (Controller, History) {
	"use strict";

	return Controller.extend("sapui5.demo.model.controller.odata", {
	    onInit : function () {
	        this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("toOdata").attachPatternMatched(this._onRouteMatched, this);
		},
		
		_onRouteMatched : function (oEvent) {
			//Erstelle Verbindung zum OData Service
			var sServiceURL = "/destinations/Northwind/V3/Northwind/Northwind.svc/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceURL);	//Create new OData Modell Instance
			oModel.setUseBatch(false);										//For testing purposes we don't use the batch mode
			var oView = this.getView();										//get View Object
			oView.setModel(oModel, "ODATA");								//set OData Modell Instance to View with name "ODATA"
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