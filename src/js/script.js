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

});
