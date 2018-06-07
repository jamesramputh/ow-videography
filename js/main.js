document.addEventListener('DOMContentLoaded', function(){
  $(".loader-overlay").show();

  // setTimeout(function(){
  //   $(".loader-overlay").fadeOut();
  //   $(".full-page-container").fadeIn();
  //   $("header").removeClass("on-load").fadeIn();
  // }, 1500);
  $("header").removeClass("on-load").fadeIn();
  $(".full-page-container").fadeIn();
});
