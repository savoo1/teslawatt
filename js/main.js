AOS.init();

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
$(".faq_card .question").click(function (e) {
    e.preventDefault();

    if($(this).parent().hasClass("question_opened")){
      $(this).parent().removeClass("question_opened");
      $(this).next().css("max-height", "0px")
    }else{
      $(".question_opened").find(".answer").css("max-height", "0px");
      $(".question_opened").removeClass("question_opened");
      $(this).parent().addClass("question_opened");
      var heightinside = $(this).next().find(".inside").height() + 50 ;
      $(this).next().css("max-height", heightinside + "px")
    }
});

if ($(".active_option.firmware_hero_sec3")[0]){
  var active_option2_height = $(".active_option.firmware_hero_sec3").find(".wrapper").height() + 100;
  $(".active_option.firmware_hero_sec3").css("max-height", active_option2_height + "px")
}
$( window ).resize(function() {
  if ($(".active_option.firmware_hero_sec3")[0]){
    var active_option2_height = $(".active_option.firmware_hero_sec3").find(".wrapper").height() + 100;
    $(".active_option.firmware_hero_sec3").css("max-height", active_option2_height + "px")
  }
});

$(".hosting_faq .custom_row h2").click(function (e) {
    e.preventDefault();

    var getoption = "." + $(this).attr("name");

    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
  
    $(".active_option").css("max-height", "0px")
    $(".active_option").removeClass("active_option");

    setTimeout(function() { 
            var height_of_option = $(getoption).find(".inside_option").height() + 500 ;
            $(getoption).css("max-height", height_of_option + "px")
            $(getoption).addClass("active_option");

            var active_option2_height = $(".active_option.firmware_hero_sec3").find(".wrapper").height() + 100;
            $(".active_option.firmware_hero_sec3").css("max-height", active_option2_height + "px")
        }, 250);
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