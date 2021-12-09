$(document).ready(function() {
    //slider in order
    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value + ' %';

    slider.oninput = function() {
        output.innerHTML = this.value + ' %';
    };


    //menu mobile
    $('a.menu-button').click( function(event){
        event.preventDefault();
        $('.mobile-menu').fadeIn(400, function(){
            $('.mobile-menu')
                .css('display', 'block')
        });
    });

    jQuery(function($){
        $(document).mouseup(function (e) {
            let div = $(".mobile-menu");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                div.hide();
            }
        });
    });


    //select
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });

});