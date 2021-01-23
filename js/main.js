/*-----------------------------------------------------------
 * Template Name    : Isoate - Personal Portfolio Bootstrap 4 HTML Template
 * Version          : 1.0
 * File Description : This File Includes all Custom js
 *------------------------------------------------------------*/

/*======================================================================
 Table of Content:
 
 01. Pre Loader
 02. One Page Scrollspy
 03. One Page Sticky JS
 04. Tooltip
 05. One Base Slider
 06. Clients Slider
 07. Testimonial Slider
 08. Slideshow fadeInOut Slider
 09. Slideshow slideInOut Slider
 10. Portfolio Gallery
 11. Count Number
 12. Form Validation
 13. Vertical Navbar Menu
 14. On Click Button Redirect
 15. Home Slide Box
 16. Menu Toggle
 17. Back To Top Scroll Arrow
 18. Page Perfect Scrollbar
 19. Blog Sidebar Accodian On Click Mobile
 20. Parallax Image
 ========================================================================*/


(function ($) {
    // Start of use strict
    'use strict';

    /*--------------------------------
     01. Pre Loader
     ----------------------------------*/
    $(window).on('load', function () {
        $('.preloader').removeClass("active");
    });

    /*--------------------------------
     02. One Page Scrollspy
     ----------------------------------*/
    function onepage_scrollspy() {
        $('body').scrollspy({target: '#navigation'});
        function scrollToSection(event) {
            event.preventDefault();
            var $section = $($(this).attr('href'));
            $('html, body').animate({
                scrollTop: $section.offset().top
            }, 1000);
        }
        $('#navigation [data-scroll]').on('click', scrollToSection);
        $(this).addClass('active').siblings().removeClass('active');
    }
    onepage_scrollspy();

    /*--------------------------------
     03. One Page Sticky JS
     ----------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) {
            $('.index-scrollspy #header').addClass("sticky-header fadeInDown");
        } else {
            $('.index-scrollspy #header').removeClass("sticky-header fadeInDown");
        }
    });

    /*--------------------------------
     04. Tooltip
     ----------------------------------*/
    function tooltip() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    tooltip();

    /*--------------------------------
     05. One Base Slider
     ----------------------------------*/
    function one_base_slider() {
        $(".one-base-slider").owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,
            margin: 30,
            lazyLoad: true,
            dots: true,
            nav: false
        });
    }
    one_base_slider();

    /*--------------------------------
     06. Clients Slider
     ----------------------------------*/
    function cilents_slider() {
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            lazyLoad: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
    }
    cilents_slider();

    /*--------------------------------
     07. Testimonial Slider
     ----------------------------------*/
    function testimonial_slider() {
        $(".testimonial-carousel").owlCarousel({
            loop: true,
            autoplay: false,
            items: 1,
            margin: 30,
            lazyLoad: true,
            dots: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
        });
    }
    testimonial_slider();

    /*--------------------------------
     08. Slideshow fadeInOut Slider
     ----------------------------------*/
    function fadeInOut_slider() {
        $(".fadeInOut-slider").owlCarousel({
            loop: true,
            items: 1,
            rewind: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: true,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });
    }
    fadeInOut_slider();

    /*--------------------------------
     09. Slideshow slideInOut Slider
     ----------------------------------*/
    function slideInOut_slider() {
        $(".slideInOut-slider").owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            animateIn: 'slideInUp',
            animateOut: 'slideOutUp'

        });
    }
    slideInOut_slider();

    /*--------------------------------
     10. Portfolio Gallery
     ----------------------------------*/
    function portfolio_gallery() {
        $(".portfolio-filter-btn").click(function () {
            var value = $(this).attr('data-filter');
            if (value === "all") {
                $('.portfolio-filter').show('1000');
            } else {
                $(".portfolio-filter").not('.' + value).hide('3000');
                $('.portfolio-filter').filter('.' + value).show('3000');

            }
            if ($(".portfolio-filter-btn").removeClass("active")) {
                $(this).removeClass("active");
            }
            $(this).addClass("active");
        });
    }
    portfolio_gallery();

    /*--------------------------------
     11. Count Number
     ----------------------------------*/
    function count_number() {
        function count($this) {
            var current = parseInt($this.html(), 10);
            current = current + 1; /* Where 50 is increment */
            $this.html(++current);
            if (current > $this.data('count')) {
                $this.html($this.data('count'));
            } else {
                setTimeout(function () {
                    count($this);
                }, 50);
            }
        }
        $(".count-number").each(function () {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    }
    count_number();

    /*--------------------------------
     12. Form Validation
     ----------------------------------*/
    function form_validation() {
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    }
    form_validation();

    /*--------------------------------
     13. Vertical Navbar Menu
     ----------------------------------*/
    function vertical_navbar_menu() {
        $(".vertical-navbar-menu a").click(function (e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $(".main-content-inner .card-inner").removeClass("active");
            $(".main-content-inner .card-inner").eq(index).addClass("active");
        });
    }
    vertical_navbar_menu();

    /*--------------------------------
     14. On Click Button Redirect 
     ----------------------------------*/
    function tabs_redirect_btn() {
        $('.btn-home').on('click', function (e) {
            e.preventDefault();
            $('#main-nav a[href="#home"]').tab('show');
        });
        $('.btn-about').on('click', function (e) {
            e.preventDefault();
            $('#main-nav a[href="#about"]').tab('show');
        });
        $('.btn-resume').on('click', function (e) {
            e.preventDefault();
            $('#main-nav a[href="#resume"]').tab('show');
        });
        $('.btn-portfolio').on('click', function (e) {
            e.preventDefault();
            $('#main-nav a[href="#portfolio"]').tab('show');
        });
        $('.btn-blog').on('click', function (e) {
            e.preventDefault();
            $('#main-nav a[href="#blog"]').tab('show');
        });
        $('.btn-contact').on('click', function (e) {
            e.preventDefault();
            $('#main-nav a[href="#contact"]').tab('show');
        });
    }
    tabs_redirect_btn();

    /*--------------------------------
     15. Home Slide Box
     ----------------------------------*/
    var width = $(window).width();
    var height = $(window).height();
    var container = $('.index-slides-box .container');
    var card_items = $('.index-slides-box .card-inner');
    var animation_in = container.data('animation-in');
    var animation_out = container.data('animation-out');

    /* Home Slide Box Desktop */
    $('.index-slides-box .main-nav').on('click', 'a', function () {
        /* Vars */
        var width = $(window).width();
        var id = $(this).attr('href');
        var h = parseFloat($(id).offset().top);
        var card_item = $(id);
        var menu_items = $('.index-slides-box .main-nav li');
        var menu_item = $(this).closest('li');

        if ((width >= 992)) {
            /* If Desktop */
            if (!menu_item.hasClass('active') & (width > 991) & $('#home-card').length) {
                /* Close Card Items */
                menu_items.removeClass('active');
                container.find(card_items).removeClass('animated ' + animation_in);
                if ($(container).hasClass('opened')) {
                    container.find(card_items).addClass('animated ' + animation_out);
                }
                /* Open Card Item */
                menu_item.addClass('active');
                container.addClass('opened');
                container.find(card_item).removeClass('animated ' + animation_out);
                container.find(card_item).addClass('animated ' + animation_in);
                $(card_items).addClass('hidden');
                $(card_item).removeClass('hidden');
                $(card_item).addClass('active');
            }
        }
        /* If Mobile */
        if ((width < 992) & $('#home-card').length) {
            $('body,html').animate({
                scrollTop: h - 60
            }, 1000);
        }
        return false;
    });

    /* Home Slide Box Mobile */
    $(window).on('resize', function () {
        var width = $(window).width();
        var height = $(window).height();

        if ((width < 992)) {
            $('.index-slides-box .card-inner').removeClass('hidden');
            $('.index-slides-box .card-inner').removeClass('fadeInLeft');
            $('.index-slides-box .card-inner').removeClass('fadeOutLeft');
            $('.index-slides-box .card-inner').removeClass('animated');

            $(window).on('scroll', function () {
                var scrollPos = $(window).scrollTop();
                $('.index-slides-box .main-nav li a').each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.offset().top - 60 <= scrollPos) {
                        $('.index-slides-box .main-nav li').removeClass("active");
                        currLink.closest('li').addClass("active");
                    }
                });
            });

            $('.index-slides-box .card-inner .card-wrap').slimScroll({
                destroy: true
            });
            $('.index-slides-box .card-inner .card-wrap').attr('style', '');
        } else {
            $($('.index-slides-box .main-nav li.active a').attr('href')).addClass('active');
        }
    });

    /* Smoothscroll */
    if ((width < 992) & $('#home-card').length) {
        $(window).on('scroll', function () {
            var scrollPos = $(window).scrollTop();
            $('.index-slides-box .main-nav li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.offset().top - 60 <= scrollPos) {
                    $('.index-slides-box .main-nav li').removeClass("active");
                    currLink.closest('li').addClass("active");
                }
            });
        });
    }

    /* About Link Redirect */
    $('.index-slides-box').on('click', '.btn-about-link', function () {
        $('.index-slides-box .main-nav li a[href="#about"]').trigger('click');
    });
    $('.index-scrollspy .banner-section,.index-scroll-box .home-section').on('click', '.smooth-scroll-down', function () {
        $('.index-scrollspy .navbar li a[href="#about"],.index-scroll-box .main-nav a[href="#about"]').trigger('click');
    });

    /* Contact Link Redirect */
    $('.index-slides-box').on('click', '.btn-contact-link', function () {
        $('.index-slides-box .main-nav li a[href="#contact"]').trigger('click');
    });
    $('.index-scrollspy .banner-section,.index-scroll-box .home-section,.call-action').on('click', '.hirenow-btn', function () {
        $('.index-scrollspy .navbar li a[href="#contact"],.index-scroll-box .main-nav a[href="#contact"]').trigger('click');
    });

    /* Portfolio Link Redirect */
    $('.index-slides-box').on('click', '.btn-portfolio-link', function () {
        $('.index-slides-box .main-nav li a[href="#portfolio"]').trigger('click');
    });
    $('.index-scroll-box .home-section').on('click', '.myportfolio-btn', function () {
        $('.index-scroll-box .main-nav a[href="#portfolio"]').trigger('click');
    });

    /*--------------------------------
     16. Menu Toggle
     ----------------------------------*/
    $('.menu-toggle').on("click", function () {
        $('.header,.navigation-menu').addClass('toggled');
        $('.header,.navigation-menu').toggleClass('mobile-menu-hide');
        $('.menu-toggle').toggleClass('open');
    });

    function mobileMenuHide() {
        var windowWidth = $(window).width(),
                siteHeader = $('.header,.navigation-menu');
        if (windowWidth < 992) {
            siteHeader.addClass('mobile-menu-hide');
            $('.menu-toggle').removeClass('open');
            setTimeout(function () {
                siteHeader.addClass('toggled');
            }, 500);
        } else {
            siteHeader.removeClass('toggled');
        }
    }
    $('.main-nav,.navigation-menu').on("click", "a:not(.sublink)", function (e) {
        e.preventDefault();
        mobileMenuHide();
    });

    /* Nav Menu Toggle */
    function navigation_submenu() {
        $(".navigation-menu .nav-link").on("click", function () {
            if ($(window).width() < 991) {
                $(this).next(".submenu").slideToggle();
                $(this).toggleClass("minus");
            }
        });
    }
    navigation_submenu();

    /*--------------------------------
     17. Back To Top Scroll Arrow
     ----------------------------------*/
    $(".back-to-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });

    /*--------------------------------
     18. Page Perfect Scrollbar
     ----------------------------------*/
    function page_perfectScrollbar() {
        $('.index-rounded-slides-box .card-wrap').perfectScrollbar();
        $('.index-default-sidebar .card-wrap').perfectScrollbar();
        if ($(window).width() > 991) {
            $('.index-slides-box .card-wrap').perfectScrollbar();
        }
    }
    page_perfectScrollbar();

    /*--------------------------------
     19. Blog Sidebar Accodian On Click Mobile
     ----------------------------------*/
    $('.cms-block .main-title').on("click", function () {
        if ($(window).width() < 991) {
            $(this).next(".cms-block-content").slideToggle();
            $(this).toggleClass("active");
        }
        $('.cms-block .cms-block-content').toggleClass('active');
    });

    /*--------------------------------
     20. Parallax Image
     ----------------------------------*/
    function parallax_image() {
        var parallax = -0.5;
        var $bg_images = $(".index-parallax .bg-img-parallax");
        var offset_tops = [];
        $bg_images.each(function (i, el) {
            offset_tops.push($(el).offset().top);
        });

        $(window).scroll(function () {
            var dy = $(this).scrollTop();
            $bg_images.each(function (i, el) {
                var ot = offset_tops[i];
                $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
            });
        });
    }
    parallax_image();

$('#toc-reveal').on('click', function(){
$('#toc').toggle();

})


})(jQuery);

