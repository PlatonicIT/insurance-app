// $('.form-control').on('change', function () {
//     $('#changeVlue').val('changed');
//     console.log($('#changeVlue').val());
// });
/* * * * * * * * * * * * * * * * * *
* Show/hide fields conditionally
* * * * * * * * * * * * * * * * * */
(function ($) {
    $.fn.conditionize = function (options) {

        var settings = $.extend({
            hideJS: true
        }, options);

        $.fn.showOrHide = function (listenTo, listenFor, $section) {
            if ($(listenTo).is('select, input') && $(listenTo).val() == listenFor) {
                $section.slideDown();
            }
            else if ($(listenTo + ":checked").val() == listenFor) {
                $section.slideDown();
            }
            else {
                $section.slideUp();
            }
        }

        return this.each(function () {
            var listenTo = "[name=" + $(this).data('cond-option') + "]";
            var listenFor = $(this).data('cond-value');
            var $section = $(this);

            //Set up event listener
            $(listenTo).on('change', function () {
                $.fn.showOrHide(listenTo, listenFor, $section);
            });
            //If setting was chosen, hide everything first...
            if (settings.hideJS) {
                $(this).hide();
            }
            //Show based on current value on page load
            $.fn.showOrHide(listenTo, listenFor, $section);
        });
    }
}(jQuery));

$('.form-group').conditionize();

$('.showOnChange').slideUp();
$('.form-control').on('change', function () {
    $('.showOnChange').slideDown();
});

$('#maplist').on('click', 'li', function () { $(this).addClass('active').siblings().removeClass('active') });

$('body.active-mobile-nav').on('click', function () {
    console.log($(this));
});

$('.navbar-close').on('click', function () {
    $('body, .mobile-nav').removeClass('active-mobile-nav');
});

$('.navbar-toggler').on('click', function () {
    $('body, .mobile-nav').addClass('active-mobile-nav');
});