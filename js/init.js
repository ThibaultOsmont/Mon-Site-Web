$(document).ready(function($){
  $(function(){

    if( !navigator.userAgent.match(/Android/i) &&
        !navigator.userAgent.match(/webOS/i) &&
        !navigator.userAgent.match(/iPhone/i) &&
        !navigator.userAgent.match(/iPod/i)
    ) {
      $('.button-collapse').sideNav();
      $('.parallax').parallax();

        var userAgent = navigator.userAgent.split(" ");
        if(navigator.userAgent.indexOf("Chrome") > 0 && strStartsWith(userAgent[userAgent.length -1], "Safari")) {
            //Cette condition n'est vérifiée que lorque le navigateur utilisé est chrome et non pas un autre navigateur développé
            //sur une base de chrome comme vivaldi.
            //CF. console.log(navigator.userAgent)
            $("#vertical-container").addClass("vertical-container-chrome");
        }
        else {
            $("#vertical-container").addClass("vertical-container-others");
        }

        $(".left li").on("click", function() {
            $(".left li").removeClass("active");
            $(this).addClass("active");
        });

        $('a[href^="#"]').click(function(){
            var id = $(this).attr("href");
            var offset = $(id).offset().top;
            $('html, body').animate({scrollTop: offset}, 'slow');
            return false;
        });
    }

      else {
        //$("#parallax-contact").css("display", "none");
        $("header").addClass("mobile");
        $("#hautdepage").removeAttr("href");
        $("#vertical-container").addClass("vertical-container-chrome");
    }

  }); // end of document ready
});