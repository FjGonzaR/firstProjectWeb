$(window).scroll(function(){
    var position = $(this).scrollTop();
    if(position >= 20) {
      $('.principal-navbar').addClass('custom-navbar');
    } else {
      $('.principal-navbar').removeClass('custom-navbar');
    }
  });

  $(function() {
    var text = $(".text");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
  
      if (scroll >= 300) {
        text.removeClass("hidden");
      } else {
        text.addClass("hidden");
      }
    });
  });
  