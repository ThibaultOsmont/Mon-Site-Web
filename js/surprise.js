/**
 * Created by thiba on 23/03/2016.
 */
// Credits to Tiffan Rayside (@tmrDevelops) for
// educating me about the touchmove event! ♥

$(document).ready(function () {
    $scene = $('.js-scene');

    if( !navigator.userAgent.match(/Android/i) &&
        !navigator.userAgent.match(/webOS/i) &&
        !navigator.userAgent.match(/iPhone/i) &&
        !navigator.userAgent.match(/iPod/i)
    ){
        $(window).scroll(function() {
            if($(window).scrollTop() > 0) {
                $scene.addClass('is-over');
            }

            else {
                $scene.removeClass('is-over');
            }

            setTimeout(function() {
                timeout();
            }, 500);
        });
    }﻿
    else {
        $("#dessus, #centered, .toogle, .deck, .text").css("display", "none");
        $scene.addClass('is-over');
    }
});

function timeout() {
    if($scene.hasClass("is-over")) {
        $(".deck ").css("z-index", 0);
    }
    else {
        $(".deck ").css("z-index", 10);
    }
}