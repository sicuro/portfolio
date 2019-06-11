// menu 
$(".acao-menu").click(function(){
  $(".fechar-menu-acao").toggleClass("abrir-menu");
});

   jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() < 90) {
      $('.menu-fixo').css('display', 'none');
      
    } else {
      $('.menu-fixo').css('display', 'block');
      jQuery('.menu-fixo').show();
    }
  });