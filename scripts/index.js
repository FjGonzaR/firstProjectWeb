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

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });
  