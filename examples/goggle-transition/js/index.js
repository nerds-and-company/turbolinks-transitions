/**
 * Turbolinks Transitions
 * Copyright 2017 Nerds & Company
 */
$(() => {
    $(document).on('click', 'a[href]', (e) => {
        e.preventDefault();
        $('.image').removeClass('active');
        $(e.target).addClass('active');
        $("body, html").animate({
          scrollTop: $(e.target).position().top
        });
        const url = e.target.href;
        $('.js-animation').removeClass('is-entering').addClass('is-leaving').one('webkitAnimationEnd mozAnimationEnd animationEnd', () => {
            Turbolinks.visit(url);
            $('.js-animation').removeClass('is-leaving').addClass('is-entering');
        });
    });
});
