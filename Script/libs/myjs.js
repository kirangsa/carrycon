$(document).ready(function() {
    $('.navWrap').meanmenu();



    //if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
    //    $(window).bind("orientationchange", ScaleSlider);
    //}
    //responsive code end
    shakebaneric();
    $("#wayBanner").waypoint(function() {
        $(".nav-wrap-full").toggleClass("fixed");
        $(".mainlogo").toggleClass("smal");
    });

});


function shakebaneric() {
    $(".banner-bottom h1 a").hover(function() {
        $(this).closest("li").children("img").toggleClass("aanimate");
    });
}



function filterByYear(val) {
    if(val == "all"){
     $(".year").show();
    }
    else {
      $(".year").hide();
      $("."+val).show();
    }

}




// Toggling Div float collpase
