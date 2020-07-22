$(function () {
    $(document).scroll(function () {
        var $nav = $("#myNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

$(window).scroll(function(){
    if($(window).scrollTop() > $("#myNavbar").height() + $(".maincontent").height() + $("section").height()){
        $(".gridcontent").addClass("imgreveal");
        $(".gridcontent").removeClass("imgdisappear")
    }
    else{
        $(".gridcontent").removeClass("imgreveal");
        $(".gridcontent").addClass("imgdisappear")
    }
});