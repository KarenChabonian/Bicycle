// nav scroll
$(function() {
    $(document).ready(function() {
        $('.nav a').click(function(event) {
            event.preventDefault();
            var getHref = $(this).attr('href');
            var jump = $(getHref).offset().top - 80;

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


//radio batton
$(function() {
    for (i = 0; i <= 3; i++) {
        $('#slider').append('<input type="radio">');
        $('input').addId('#radio');
    }

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
            $('body').addClass('fixed_overlay');
            $('#modal').animate({ opacity: 0, top: '45%' }, 600, function() {
                $(this).css('display', 'none');
                $(overlay).fadeOut(500);
                $('body').removeClass('fixed_overlay');
                $('.header').removeClass('header-scroll');
            });
        });
    });
});