$(document).ready(function(){


    let $btns = $('.education-area .button-group button');

    $btns.click(function(e){

        $('.education-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.education-area .grid').isotope({
            filter : selector
        })


        return false;


    })



    $('.education-area .button-group #btn1').trigger('click');

    

    // Owl-carousel!

    $('.site-main .courses-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },

            544: {
                items: 2
            }
        }
    })


    // Sticky Navigation Menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed(){
        if($('.header_area').lenghth){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});