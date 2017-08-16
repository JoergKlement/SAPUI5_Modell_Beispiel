sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
	], function (Controller, History) {
	"use strict";

	return Controller.extend("sapui5.demo.model.controller.json", {
	    onInit : function () {
			this._onLoadJSONData(this);
	        this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("toJson").attachPatternMatched(this._onRouteMatched, this);
		},
		
		_onLoadJSONData : function(oEvent) {
	    	var oJSONModel = new sap.ui.model.json.JSONModel(); //Create new JSON Modell Instance
	    	oJSONModel.loadData("model/data.json");		//load Data from file into JSON Modell Instance
	    	var oView = this.getView(); 						//get View Object
	    	oView.setModel(oJSONModel,"JSONDATA"); 				//set JSON Modell Instance to View with Name JSONDATA
	    	
	    	var oLayout = this.getView().byId("verticalLayout");			//get Element verticalLayout (compare "id" of control verticalLayout!)
	    	oLayout.bindElement({ path: "/glossary", model: "JSONDATA"});	//do an element-binding to node /glossary of json Model "JSONDATA"
	    	
		},
		
		_onRouteMatched : function (oEvent) {
			//Nothing to do here
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