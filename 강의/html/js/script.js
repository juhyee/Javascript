$(function(){
  $('.gnb_list li > a[href^="#"]').click(function(event) {
      var ancTarget = $(this).attr("href");
      var offset = $('.gnb_list').heigth;
      var target = $(ancTarget).offset().top - offset;
      $('html, body').animate({scrollTop:target}, 500);
      event.preventDefault();
  });

    console.log(offset)
});