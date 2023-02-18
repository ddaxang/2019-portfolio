$(function(){
    var imgs='';
    for(var i=1; i<30; i++){
        imgs +="<img src='img/pic"+i+".jpg'>";
        // console.log(imgs);
    }
    $('#image').html(imgs);

    $('body').mousemove(function(e){
        var wid=$(window).width();
        var posX=e.pageX;
        var percent=Math.floor((posX/wid)*29);

        $('#image>img').hide();
        $('#image>img').eq(percent).show();
    });
});