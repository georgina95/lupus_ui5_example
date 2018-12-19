/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"lupus/Example/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"lupus/Example/test/integration/pages/Main",
	"lupus/Example/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "lupus.Example.view.",
		autoWait: true
	});
});