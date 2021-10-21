window.onload = function(){
  document.querySelector(".menu-mobile").addEventListener("click", function(){
      if(document.querySelector(".menu-right nav ul").style.display == 'flex'){
          document.querySelector(".menu-right nav ul").style.display = 'none';
  }else {
      document.querySelector(".menu-right nav ul").style.display = 'flex';     
  }
  });
  $(".back-to-top").hide();
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 100){
      $(".back-to-top").fadeIn();
    }else{
      $(".back-to-top").fadeOut();
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({
      scrollTop:0
    },1000);
  });
};

