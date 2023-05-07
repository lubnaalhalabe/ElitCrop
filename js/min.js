$(function(){
    'use strcit';
    var WinH =$(window).height(),
        upperH =$('.upper-bar').innerHeight(),
        navbar = $('.navbar').innerHeight();
        $('.slider , .carousel-item').height(WinH - (upperH + navbar));
          
        $(".Featured-work ul li").on('click', function() {
            $(this).addClass('active').siblings().removeClass('active'); 
        if ($(this).data('class') === 'all' ) {
            $('.sh-imge .col-md').css('opacity' , 1 );
        }else{
            $('.sh-imge .col-md').css('opacity' , .05 );
            $($(this).data('class')).parent().css('opacity' , 1);
        } 
    });
});


