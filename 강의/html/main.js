// anc 페이지 이동
$(function(){
  $('.gnb_list li > a[href^="#"]').click(function(e) {
      var headerHeigth = $('.header').height();
      var ancTarget = $(this).attr("href");
      var secTarget = $(ancTarget).offset().top - headerHeigth;
      $('html, body').animate({scrollTop:secTarget}, 800);
      e.preventDefault();
  });
});


// swiper 관련
var skills_swiper = new Swiper(".skills_swiper01", {
});
var skills_swiper02 = new Swiper(".skills_swiper02", {
});

