/*!
 * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
k = 0;

function scrollPic() {
    if (k >= 4) { //如果當前函式超過陣列下標的最大值，k=0
        k = 0;
    }
    if (k == 0) {
        $("#homeImgp4").fadeOut();
        $("#homeImgp3").fadeIn();

    }
    if (k == 1) {
        $("#homeImgp3").fadeOut();
        $("#homeImgp2").fadeIn();
    }
    if (k == 2) {
        $("#homeImgp2").fadeOut();
        $("#homeImgp1").fadeIn();
    }
    if (k == 3) {
        $("#homeImgp1").fadeOut();
        $("#homeImgp4").fadeIn();
    }
    k = k + 1; //k  ,執行下一次操作
}
setInterval("scrollPic()", 4000);