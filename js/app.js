(function ($) {
    "use strict"; // Start of use strict


    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    var $btn = $('#btnTop');
    var $home = $('#topSection');
    var startpoint = $home.scrollTop() + $home.height();

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > startpoint) {
            $btn.show();
        } else {
            $btn.hide();
        }
    });


})(jQuery); // End of use strict
