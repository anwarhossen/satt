  jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 30,
            time: 1000
        });
    })
$(window).on('scroll',function(){
    
    if ($(window).scrollTop()>10){
        $('#menu').addClass('menu-bg');
    }
    else{
        $('#menu').removeClass('menu-bg')
    }
})