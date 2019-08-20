/* para permitir el uso de tooltips */
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });

/* para colapsar el navbar cuando se presiona un item */

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});