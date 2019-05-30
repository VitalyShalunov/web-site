if (document.readyState !== "loading") {
    сode();
} else {
    document.addEventListener("DOMContentLoaded", code());
}


function code() {

    $(".imgan").on('mouseover', function() { //анимация для изображения
        $(".imgan").animate({
            "border-radius": "35px"
        
        }, 500
        );
    });
    $(".imgan").on('mouseover', function() { //анимация для изображения
        $(".imgan").animate({
            "width": "+=50px"
        }, 500);
    });
        $(".imgan").on('mouseout', function() { //анимация для изображения
            $(".imgan").animate({
                "border-radius": "0px"
            }, 500);
    
        });
        $(".imgan").on('mouseover', function() { //анимация для изображения
            $(".imgan").animate({
                "width": "-=50px"
            }, 500);
        });
}
