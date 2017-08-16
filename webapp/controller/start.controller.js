sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
	], function (Controller, History) {
	"use strict";

	return Controller.extend("sapui5.demo.model.controller.start", {
		
		 onShowData : function(oEvent) {
		            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		            var oTile = oEvent.getSource();
		            var sIdRaw = oTile.getIdForLabel(); //Get Raw ID Value (some kind of "xml_view4711--<id>")
		            var aIdSplitted = sIdRaw.split("--"); //Split Raw ID Value at delimiter "--"
		            var sId = aIdSplitted[1]; //get the splitted part after the delimiter "--" which ought to be the ID
		            switch (sId) {
    				case "jsonTile":
        				oRouter.navTo("toJson", {TileID : sId});
        				break;
    
    				case "deviceTile":
        				oRouter.navTo("toDevice", {TileID : sId});
        				break;
    
    				case "odataTile":
				        oRouter.navTo("toOdata", {TileID : sId});
				        break;   
				        
    				case "ressourceTile":
				        oRouter.navTo("toRessource", {TileID : sId});
				        break;

    				default:
						break;
					}
		            
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