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


// Telescopic text
$(function(){
// attach event handlers to all expanders
    $('.expander').bind('click', function () {
    // find all sections with class name
    // corresponding to expander's id
    // that haven't been expanded yet
    var sections = $('.' + this.id + ':not(.expanded)');
    // if there's only one section left
    // and we are doing our "last" expanding for this section
    // remove "onclick" handler from this expander
    // and stop highligting it (remove CSS class "expander")
    if ( sections.length <= 1 ) {
        $(this).removeClass('expander').unbind('click');
    }
    // expand first section
    sections.first().addClass('expanded');
    });
});


// Slick slider

$('.slider').slick({
  centerMode: true,
  infinite: false,
  slidesToShow: 3,
  variableWidth: true,
  focusOnSelect: true
});
