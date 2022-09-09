$(".navbar .lines").click(function (e) {
    e.preventDefault();
    if($(".navbar").hasClass("navbar_active")){
        $(".navbar").removeClass("navbar_active");
    }else{
        $(".navbar").addClass("navbar_active");
    }
});