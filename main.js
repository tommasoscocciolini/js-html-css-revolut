$(document).ready(function(){
  var ddownEl = $("header nav .navRight li")
  var ddownMenu = $("div.ddown")

  ddownEl.hover(function(){
    console.log($(this).children(".ddown"));
    $(this).children(".ddown").css("display","block");
  })

  ddownEl.mouseleave(function() {
    $(this).children(".ddown").css("display","none");

});
})
