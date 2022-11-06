$('.challange_slider').slick({
    arrows: false,
    dots: false,
    infinite: false,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 4,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnSelect: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        },
      ]
});
$('.challange_slider').slick('slickGoTo', 1);

$(".faq_card .question").click(function (e) {
    e.preventDefault();

    if($(this).parent().hasClass("question_opened")){
      $(this).parent().removeClass("question_opened");
      $(this).next().css("max-height", "0px")
    }else{
      $(".question_opened").find(".answer").css("max-height", "0px");
      $(".question_opened").removeClass("question_opened");
      $(this).parent().addClass("question_opened");
      var heightinside = $(this).next().find(".inner").height() + 50 ;
      $(this).next().css("max-height", heightinside + "px")
    }
});

$("nav .lines").click(function (e) {
    e.preventDefault();

    if($(this).parent().parent().hasClass("nav_active")){
      $(this).parent().parent().removeClass("nav_active");
    }else{
      $(this).parent().parent().addClass("nav_active");
    }
});
$("nav .for_mobile_quite").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().removeClass("nav_active");
});



$('.invest_in_sec1 .video_area .videoplace').on('click', function () {
    $(this).addClass("videoplace_active");
  $(this).find("video").trigger('play');
     
});