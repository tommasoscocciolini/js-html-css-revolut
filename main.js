$(document).ready(function(){
  var ddownEl = $("header nav .navRight li")
  var ddownMenu = $("div.ddown")

  ddownEl.hover(function(){
    $(this).children(".ddown").css("display","flex");
  })

  ddownEl.mouseleave(function() {
    $(this).children(".ddown").css("display","none");
});
})
