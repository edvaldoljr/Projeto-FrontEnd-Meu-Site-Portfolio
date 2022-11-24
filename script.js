$(document).ready(function() {
  $("#navMenu").click(function() {
   //$(".nav").toggleClass("small");
    if ($(".nav").hasClass("small")) {
      $(".nav").removeClass("small");
    } else {
      $(".nav").addClass("small");
    }
  });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Desenvolvedor Full-Stack Java"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:[" a vários Bootcamps e cursos para aprimorar meus conhecimentos em Desenvolvimeno de Softwares e me manter atualizado. Tenho grande apreço e muito gosto pelos estudos, acredito na tecnologia como solução e facilitação de várias situações vividas diariamente. Das mais simples até as mais complexas e com bom preparo, é possível alcançar todas as metas."],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});