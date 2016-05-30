$(document).ready(function() {
	
	/*
	* Initialisation des tooltips 
	*/
	$('[data-toggle="tooltip"]').tooltip(); 

	/*
	* Pour activer les tooltips Bootstrap
	*/
	var scrollActel = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if(scrollActel >= 1080) {
		$(".navbar").addClass("navbar-fixed-top");
		$("#apropos, #experience, #competences, #contact").css("padding-top", "70px");
		//$("body").css("background-color", "#1C2126");
	}

	/*
	* Pour fixer la navbar en haut de la page
	*/
	document.body.onscroll = function() {
		//Compatibilité IE
		var scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

		if($(".navbar").hasClass("navbar-fixed-top") && scroll < 1079) {
			$(".navbar").removeClass("navbar-fixed-top");
			$("#apropos, #experience, #competences, #contact").css("padding-top", "0");
			//$("body").css("background-color", "rgb(71, 91, 177)");
		}

		if(! $(".navbar").hasClass("navbar-fixed-top") && scroll >= 1079) {
			$(".navbar").addClass("navbar-fixed-top");
			$("#apropos, #experience, #competences, #contact").css("padding-top", "70px");
			//$("body").css("background-color", "#1C2126");
		}
	}

	$('#up, .navbar-brand').click(function(){
		$('html, body').animate({scrollTop: 0}, 'slow');
		return false;
	});

	$("body").scrollspy({
		target : "#collapsibleNav",
		offset : 70
	});

	$(".navbar-links-spy:not(.dropdown) a").click(function(e) {
		e.preventDefault();

		// Store hash
		var hash = this.hash;
		
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function() {
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	});
})