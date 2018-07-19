(function($) {
    "use strict";

    $(document).ready(function($) {

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true

        });

        $(".header-area").sticky({
            topSpacing: 0
        });

        $('li.smooth-menu a, .hero-text .boxed-btn').bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '73';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        $(".navbar-collapse ul li a").on('click', function() {
            $(".navbar-collapse").removeClass("show")
        })
        $("a.scrool-to-top").click(function() {
            $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });

        $('body').scrollspy({ target: '#navbarContent' })



    });

    $(window).load(function() {


    });

}(jQuery));