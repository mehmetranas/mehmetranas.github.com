$(document).ready(function(){
  //skill hover
  $(".skill").mouseover(function(){
    $(this).find(".detail").show().animateCss("flipInX");
  }).mouseleave(function(){
    $(this).find(".detail").hide();
  });
  
  //tool tip
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
  
  //animate css
  $.fn.extend({
    animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
      return this;
    },
  }); 

  //navbar active classes
  $("ul.navbar-nav a").on("click", function(){
    $("ul.navbar-nav").find(".active").removeClass("active")
    $(this).parent().addClass("active");
  });

  //navbar hide after click
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
  
  $(".collapse a").on("click", function(e){
    var id = $(e.target).attr("data-target");
    $(".section").hide();
    $("#" + id).show().animateCss("bounceInLeft");
  });
});