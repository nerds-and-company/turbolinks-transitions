/**
 * Turbolinks Transitions
 * Copyright 2017 Nerds & Company
 */
$(() => {
    $(document).on('click', 'a[href]', (e) => {
        e.preventDefault();
        const url = e.target.href;
        $('.animation').removeClass('is-entering').addClass('is-leaving').on('animationend', () => {
            Turbolinks.visit(url);
        });
    });
});
