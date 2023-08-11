
  function review_slider(){
    let slideLeft = 0;
    let first = 1;
    let last;
    let slideCnt = 0;
    const $slide = $(".review-card");
    let $first;
    let $last;

    $slide.each(function () {
        $(this).css("left", slideLeft);
        slideLeft += $(this).width() + 90;
        $(this).attr("id", "slide" + (++slideCnt));
    });

    last = slideCnt;

    function slide() {
        $slide.each(function () {
            $(this).css("left", $(this).position().left - 1);
        });
        $first = $("#slide" + first);
        $last = $("#slide" + last);
        if ($first.position().left < -480) {
            $first.css("left", $last.position().left + $last.width() + 90);
            first++;
            last++;
            if (last > slideCnt)
                last = 1;
            if (first > slideCnt)
                first = 1;
        }
    }
    let interval = setInterval(slide, 20);

    $slide.hover(function () {
        clearInterval(interval);
    }, function () {
        interval = setInterval(slide, 20);
    })
  }

  function title_changer() {
    setInterval(function(){
      $('.rolling-title').animate({marginTop: '-'+ 64+'px'}, 'slow', function() {
        $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
        $(this).find("li:first").remove();
        $('.rolling-title').css({marginTop: '0'})
      });
    }, 3000);
  }

  function process_guide_scroll(scrollValueHalf) {
    const process_first_offset = $('#first_desc').offset().top;
    const process_second_offset = $('#second_desc').offset().top;
    const process_third_offset = $('#third_desc').offset().top;
    const process_fourth_offset = $('#fourth_desc').offset().top;

    if (scrollValueHalf < process_second_offset){
      $('.first').addClass('active');
      $('.second').removeClass('active');
      $('.third').removeClass('active');
      $('.fourth').removeClass('active');
      
    } else if (scrollValueHalf >= process_second_offset && scrollValueHalf < process_third_offset){
      $('.first').removeClass('active');
      $('.second').addClass('active');
      $('.third').removeClass('active');
      $('.fourth').removeClass('active');
    } else if (scrollValueHalf >= process_third_offset && scrollValueHalf < process_fourth_offset){
      $('.first').removeClass('active');
      $('.second').removeClass('active');
      $('.third').addClass('active');
      $('.fourth').removeClass('active');
    } else if (scrollValueHalf >= process_fourth_offset){
      $('.first').removeClass('active');
      $('.second').removeClass('active');
      $('.third').removeClass('active');
      $('.fourth').addClass('active');
    }
  }

  $(document).ready(function() {
    let counter_flag=true;
    var process_card_sticky_position = $(window).height() / 2 - $('.process-card').height() / 2;

    $('.process-card').css('top', process_card_sticky_position);
    const counter_offset = $('.counter').offset().top;

    $('.footer .container').css('border', 'none');
    title_changer();
    review_slider();
    $(window).scroll(function(){
      var scrollValue = $(window).scrollTop();
      var scrollValueHalf = scrollValue + $(window).height()/2;
      var counterValue = scrollValue + $(window).height();

      if (counter_flag && counterValue > counter_offset){
        $('.partner-appeal .counter').each(function () {
          var $this = $(this),
              middleTo = $this.attr('middle-count'),
              countTo = $this.attr('data-count');
    
          $({targetNumber: $this.text()}).animate({
            targetNumber: middleTo
          }, {
            duration: 800,
            easing: 'linear',
            step: function () {
              $this.text(commaSeparateNumber(Math.floor(this.targetNumber)));
            },
            complete: function () {
              $this.text(this.targetNumber);
              $({targetNumber: $this.text()}).animate({
                targetNumber: countTo
              }, {
                duration: 1400,
                easing: 'linear',
                step: function () {
                  $this.text(commaSeparateNumber(Math.floor(this.targetNumber)));
                },
                complete: function () {
                  $this.text(commaSeparateNumber(this.targetNumber));
                }
              });
            }
          });
        });
        counter_flag = false;
      }
      process_guide_scroll(scrollValueHalf);
    });
    $('.progress-bar-group').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: $(this.hash).offset().top + 130 - $(window).height() / 2 + $(this.hash).height() / 2}, 500);
    });
    if ($(window).width() > 1080) {
      if ($(window).width() < 1736) {
        $('html').css('overflow-x', 'hidden');
        $('html').scrollLeft(0);
      }
      $('.process-guide-box').css('width', '1400px');
    }
    $(window).resize(function () {
      process_card_sticky_position = $(window).height() / 2 - 212;
      $('.process-card').css('top', process_card_sticky_position);
      if ($(window).width() < 1080) {
        $('.process-guide-box').css('width', '1080px');
        $('html').css('overflow-x', 'inherit');
        $('html').scrollLeft(0);
      } else {
        if ($(window).width() < 1736) {
          $('html').css('overflow-x', 'hidden');
          $('html').scrollLeft(0);
        }
        $('.process-guide-box').css('width', '1400px');
      }
    });

    $('.project-finder-nav-link').on('click', function() {
      var $this = $(this),
          targetId = $this.attr('targetItem');
      $('.project-finder-list').html('<div class="loading-project-finder-card"><div class="project-title"></div><div class="project-number-info"></div><div class="project-type-info"></div><div class="project-skills-box"><div class="project-skill"></div><div class="project-skill"></div><div class="project-skill"></div></div></div><div class="loading-project-finder-card"><div class="project-title"></div><div class="project-number-info"></div><div class="project-type-info"></div><div class="project-skills-box"><div class="project-skill"></div><div class="project-skill"></div><div class="project-skill"></div></div></div><div class="loading-project-finder-card"><div class="project-title"></div><div class="project-number-info"></div><div class="project-type-info"></div><div class="project-skills-box"><div class="project-skill"></div><div class="project-skill"></div><div class="project-skill"></div></div></div><div class="loading-project-finder-card"><div class="project-title"></div><div class="project-number-info"></div><div class="project-type-info"></div><div class="project-skills-box"><div class="project-skill"></div><div class="project-skill"></div><div class="project-skill"></div></div></div>');
      $('.project-finder-nav-link').removeClass('active');
      $this.addClass('active');
      $('.project-finder-list').load('/?project_category=' + targetId + ' .project-finder-list');
    });

  });
  