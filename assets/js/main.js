;
(function ($) {

    $(document).ready(function () {

        // Include pages
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = 'views/' + $(this).data('include') + '.html'
            $(this).load(file)
        })

        // Sticky header
        $(window).scroll(function () {
            var sticky = $('.header_block'),
                scroll = $(window).scrollTop();

            if (scroll >= 50) sticky.addClass('fixed');
            else sticky.removeClass('fixed');

            // Scroll Watch

            setTimeout(function () {
                var swInstance = new ScrollWatch({
                    watchOnce: false
                });
                swInstance
            }, 500);;
        });

        // Slick Gallery
        $(document).on('click', 'a[class^=carousel-control-]', function (e) {
            var galleryItemOne = $('.item_one');
            var galleryItemTwo = $('.item_two');
            var galleryItemThree = $('.item_three');

            if (galleryItemOne.hasClass('active')) {
                $('.gallery_section').css('background-color', '#26e69b');
            }

            if (galleryItemTwo.hasClass('active')) {
                $('.gallery_section').css('background-color', '#e6ca26');
            }

            if (galleryItemThree.hasClass('active')) {
                $('.gallery_section').css('background-color', '#26e6e6');
            }

            e.stopImmediatePropagation();
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // Smooth links
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 100
            }, 500);
        });

        $(document).on('click', '.to_top', function (event) {
            event.preventDefault();

            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });


        // Toggle Menu
        $(document).on('click', '.humburger', function (event) {
            event.preventDefault();

            $(this).toggleClass('active');
            $('.humburger_side_menu').toggleClass('active');
        });

        // Toggle Menu Mobile
        $(document).on('click', '.humburger_mobile', function (event) {
            event.preventDefault();

            $(this).toggleClass('active');
            $('.menu_mobile').toggleClass('open');
            $('.header_block').toggleClass('active');
            $('body').toggleClass('no_scroll');
        });

        // Close All
        $(document).on('click', '.close_menu', function (event) {
            event.preventDefault();

            $('.humburger_mobile').removeClass('active');
            $('.menu_mobile').removeClass('open');
            $('.header_block').removeClass('active');
            $('body').removeClass('no_scroll');
        });

    });
})(jQuery);