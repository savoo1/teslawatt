$(".navbar .lines").click(function (e) {
    e.preventDefault();
    if($(".navbar").hasClass("navbar_active")){
        $(".navbar").removeClass("navbar_active");
        $("body").removeClass("disable_scroll");
    }else{
        $(".navbar").addClass("navbar_active");
        $("body").addClass("disable_scroll");
    }
});
$(".navbar .overlapcontent").click(function (e) {
    e.preventDefault();
    $(".navbar").removeClass("navbar_active");
    $("body").removeClass("disable_scroll");
});

$(document).scroll(function() {
  if ($(document).scrollTop() > 150) {
      $(".navbar").addClass("nav_for_scroll");
      $(".top_values").addClass("top_values_for_scroll");
  }else{
      $(".navbar").removeClass("nav_for_scroll");
      $(".top_values").removeClass("top_values_for_scroll");
  }
  if ($(document).scrollTop() > 200) {
      $(".navbar").addClass("nav_for_scroll_v2");
      $(".top_values").addClass("top_values_for_scroll_v2");
  }else{
      $(".navbar").removeClass("nav_for_scroll_v2");
      $(".top_values").removeClass("top_values_for_scroll_v2");
  }
  if ($(document).scrollTop() > 300) {
      $(".navbar").addClass("nav_for_scroll_v3");
      $(".top_values").addClass("top_values_for_scroll_v3");
  }else{
      $(".navbar").removeClass("nav_for_scroll_v3");
      $(".top_values").removeClass("top_values_for_scroll_v3");
  }
});