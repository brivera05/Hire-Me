$("h2").click(function(){
    $("p").show();
});

$("h1").mouseenter(function(){
    $("li").css("background-color", "red");
});

$("img").dblclick(function(){
    $("h2").hide();
});

$("p").hover(function(){
    $("h1").text("By Beth");
});

$("h2").dblclick(function(){
    $("h1").slideUp();
});