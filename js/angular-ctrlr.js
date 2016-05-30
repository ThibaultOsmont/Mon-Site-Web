var app = angular.module("translate", ['pascalprecht.translate']);

app.config(function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: "./lang/locale-",
		suffix: ".json"
	})
	.registerAvailableLanguageKeys(['en', 'fr'], {
		'en' : 'en', 'en_GB': 'en', 'en_US': 'en',
		'fr' : 'fr', 'fr_FR': 'fr'
	})
	.useSanitizeValueStrategy('escapeParameters');
	$translateProvider.preferredLanguage('fr');
});	

app.controller('TransaleCtrlr', function ($scope, $translate) {
	$scope.changeLanguage = function (key) {
		$translate.use(key);
		switch(key) {
			case "en":
				$("#fr").css("opacity", "0.4");
				$("#fr").css("filter", "alpha(opacity=40)");
				$("#en").css("opacity", "1");
				$("#en").css("filter", "alpha(opacity=100)");
				break;
			case "fr":
				$("#fr").css("opacity", "1");
				$("#fr").css("filter", "alpha(opacity=100)");
				$("#en").css("opacity", "0.4");
				$("#en").css("filter", "alpha(opacity=40)");
		}
	}
});	