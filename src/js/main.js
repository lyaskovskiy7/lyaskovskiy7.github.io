$(document).ready(function(){
    

    $('.menu-adaptive').click(function(){
        $('.nav').toggleClass('block')
    })

    $('.scrollTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500)
    })

    $(window).scroll(function(){
        heightWindow = $(window).scrollTop()
        if(heightWindow > 430){
            $('.scrollTop').css('opacity', 1)
        }
        else{
            $('.scrollTop').css('opacity', 0)
        }
    })


    $('.nav__link').click(function(){
        var target = $(this).attr('href')
        $('html,body').animate({
            scrollTop: $(target).offset().top
        },500)
    })

    var slider = $('.portfolio-slider__wrapDabl-img')
    var width = $('.portfolio-slider__wrapDabl-img').width()
    
    function leftSlider(){
        width = slider.width()
        slider.css('margin-left', -width)
    }
    leftSlider()
    $(window).resize(leftSlider)

    $('.portfolio-slider__wrapDabl-img img:last-child').prependTo(slider)

    $('.prev').click(function(){
        slider.animate({
            left: width
        },500, function(){
            $('.portfolio-slider__wrapDabl-img img:last-child').prependTo(slider)
            slider.css('left', 0)
        })
    })
    $('.next').click(function(){
        slider.animate({
            left: -width
        },500, function(){
            $('.portfolio-slider__wrapDabl-img img:first-child').appendTo(slider)
            slider.css('left', 0)
        })
    })
})