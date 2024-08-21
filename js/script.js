$(function() {
    $('.selector').animatedHeadline({
        animationType: 'clip'
    });
})


$(document).ready(function(){
    $('a href= "#top"').on('click',function(){
        $('html,body').animate({
            scrollTop:0,
            Time:6000
        })
    })
})



