//header menu 
$(function(menu) {
    $('#open, #close').click(function(event) {
        event.preventDefault();
        $('#open').css('left', '-47px');
        $('#menu').animate({ left: '0px' }, 600);
        $('#overlay').show();
        $('body').addClass('fixed_overlay');
    });

    $('#close').click(function() {
        $('#menu').animate({ left: '-250px' }, 300);
        $('#open').css('left', '10px');
        $('#overlay').fadeOut(500);
        $('body').removeClass('fixed_overlay');
    });

    $('.menu__items a').click(function(event) {
        event.preventDefault();
        var getHrefMenu = $(this).attr('href');
        var jumpMenu = $(getHrefMenu).offset().top - 80;


        $('html, body').animate({ scrollTop: jumpMenu }, 1000);
    });
});


// nav scroll
$(function() {
    $(document).ready(function() {
        $('.nav a').click(function(event) {
            event.preventDefault();
            var getHref = $(this).attr('href');
            var jump = $(getHref).offset().top - 110;

            $('html, body').animate({ scrollTop: jump }, 1000);

        });

        // slick slider
        $('.social-slider').slick({
            autoplay: true,
            infiniti: true,
            speed: 3000,

        });
    });
});


//header scroll
$(document).scroll(function() {

    if (($(document).scrollTop() > 530)) {
        $('.header').addClass('header-scroll');

        if (($(document).scrollTop() > 1100)) {
            $('.header').removeClass('header-scroll');
            $('.header').addClass('header-hidden');
        } else {
            $('.header').removeClass('header-hidden');
        }
        return;
    }

    $('.header').removeClass('header-scroll');

});


//modal form
$(function(form) {
    $('a#btn').click(function(event) {
        event.preventDefault();
        $('#modal, #overlay').show();
        $('#overlay').fadeIn(500, function(modal) {
            $('#modal').css('display', 'block')
                .animate({ opacity: 0.9, top: '50%' }, 600);
            $('body').addClass('fixed_overlay');
            $('.header').addClass('header-scroll');
        });

        $('#overlay').click(function() {
            $('#modal').animate({ opacity: 0, top: '45%' }, 600, function() {
                $(this).css('display', 'none');
                $(overlay).fadeOut(500);
                $('body').removeClass('fixed_overlay');
                $('.header').removeClass('header-scroll');
            });
        });
    });
});