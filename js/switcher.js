/*-----------------------------------------------------------
 * Template Name    : Isoate - Personal Portfolio Bootstrap 4 HTML Template
 * Version          : 1.0
 * File Description : This File Includes all Switcher js
 *------------------------------------------------------------*/

/*======================================================================
 Table of Content:
 
 01. Style Switcher Toggle
 02. Color Layout Switcher
 03. LTR RTL Layout Switcher
 04. Layout Mode Light | Dark
 05. Wide | Boxed | Reset Layout width
 06. Background Pattern Layout Button
 ========================================================================*/

(function ($) {
    // Start of use strict
    'use strict';

    /*--------------------------------
     01. Style Switcher Toggle
     ----------------------------------*/
    function style_switcher() {
        $('.switcher-button').on('click', function () {
            $('#color-switcher').hasClass('open-switcher') ?
            $('#color-switcher').removeClass('open-switcher') :
            $('#color-switcher').addClass('open-switcher');
        });
    }
    style_switcher();

    /*--------------------------------
     02. Color Layout Switcher
     ----------------------------------*/
    function color_switcher() {
        $('.swtich-color').on('click', function (event) {
            $('.swtich-color').removeClass('active');
            $(this).addClass('active');
            $('#optional-color').attr('href', $(this).data('path'));
            event.preventDefault();
        });
    }
    color_switcher();

    /*--------------------------------
     03. LTR RTL Layout Switcher
     ----------------------------------*/
    function LTR_RTL() {
        $(".btn-direction").click(function () {
            $(this).text(function (i, v) {
                return v === 'RTL' ? 'LTR' : 'RTL';
            });
        });
        const bodyEl = document.querySelector('html');
        const btnEl = document.querySelector('#RTL');
        btnEl.addEventListener('click', () => {
            const dir = (bodyEl.getAttribute('dir') === 'ltr') ? 'rtl' : 'ltr';
            bodyEl.setAttribute('dir', dir);
        }, false);
    }
    LTR_RTL();

    /*--------------------------------
     04. Layout Mode Light | Dark
     ----------------------------------*/
    function light_dark() {
        $(".darkmode-swtich").click(function () {
            $(this).text(function (i, v) {
                return v === 'Dark' ? 'Light' : 'Dark';
            });
        });
        document.getElementById('darkmode-swtich').addEventListener('click', function (e) {
            const toggler = document.body;
            toggler.classList.toggle('dark-mode');
        });
    }
    light_dark();

    /*--------------------------------
     05. Wide | Boxed | Reset Layout width
     ----------------------------------*/
    function wide_boxed_reset_layout() {
        $(".wide-layout-swtich").on('click', function () {
            const toggler = document.body;
            toggler.classList.toggle('wide-layout');
            $('.wide-layout').removeClass('boxed-layout');
        });

        /* Boxed Layout width */
        $(".boxed-layout-swtich").on('click', function () {
            const toggler = document.body;
            toggler.classList.toggle('boxed-layout');
            $('.boxed-layout').removeClass('wide-layout');
        });

        /* Wide | Boxed | Reset Button */
        $(".lightdark-swtich").on('click', function () {
            $('body').removeClass('boxed-layout');
            $('body').removeClass('wide-layout');
            $('body').removeClass('dark-mode');
        });
    }
    wide_boxed_reset_layout();

    /*--------------------------------
     06. Background Pattern Layout Button
     ----------------------------------*/
    function background_pattern_layout() {
        $(".pattern-box").on("click", function () {
            $(".bgimg-list").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });

        /* Background Pattern Layout */
        $(".pattern1").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/1.png)");
        });
        $(".pattern2").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/2.png)");
        });
        $(".pattern3").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/3.png)");
        });
        $(".pattern4").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/4.png)");
        });
        $(".pattern5").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/5.png)");
        });
        $(".pattern6").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/6.png)");
        });
        $(".pattern7").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/7.png)");
        });
        $(".pattern8").on('click', function () {
            $("body").css("background-image", "url(assets/images/patterns/8.png)");
        });
    }
    background_pattern_layout();

})(jQuery);

