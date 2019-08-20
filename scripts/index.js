/* para detectar cuando la ventana esta en cierto punto y asi anadir una clase que me permite disminuir el tamanio del navbar */
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
/* para permitir el uso de tooltips */
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });

/* para colapsar el navbar cuando se presiona un item */

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});