$(document).ready(function() {

  // Tamaño de la pantalla
  function tamaño() {
    // Variables
    var width = $(window).width();
    var height = $(window).height();

    // Mostrar por pantalla
    $("main h2").text("Viewport Size....." + width + "x" + height)
  }

  // Llamada al método
  tamaño();

  // Función - (Resize)
  $(window).resize(function() {
    tamaño();
  })
})