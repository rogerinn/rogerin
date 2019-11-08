sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("rogerin.Rogerin.controller.Home", {
		onInit: function () {
			
		},
		vote: function() {
			var oModel = this.getOwnerComponent().getModel("data");
			var rgSelected = this.byId("rgOptions").getSelectedButton().getText();
			
			//Pegando os votos do modelo
			var yesVotes = oModel.getProperty("/Yes");
			var noVotes = oModel.getProperty("/No");
			
			if (rgSelected === "Sim") {
				yesVotes += 1;
				oModel.setProperty("/Yes", yesVotes);
			} else {
				noVotes += 1;
				oModel.setProperty("/No", noVotes);
			}
		}
	});
});