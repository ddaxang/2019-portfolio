$(function(){
    var myText = [
        'NOW. AM 10:00 / NEXT. AM 11:00',
        'NOW. AM 11:00 / NEXT. PM 12:00',
        'NOW. PM 12:00 / NEXT. PM 13:00',
        'NOW. PM 13:00 / NEXT. PM 14:00',
        'OPEN. AM 10:30 / CLOSE. PM 20:00'];

    var timer= setInterval(function(){
        var now=new Date();
        var hr=now.getHours();
        var min=now.getMinutes();
        var sec=now.getSeconds();

        if(hr>=10){
            hNum=hr;
        }else{
            hNum='0'+hr;
        }
        if(min>=10){
            mNum=min;
        }else{
            mNum='0'+min;
        }
        if(sec>=10){
            sNum=sec;
        }else{
            sNum='0'+sec;
        }
        $('p span').eq(0).text(hNum);
        $('p span').eq(1).text(mNum);
        $('p span').eq(2).text(sNum);
    },100);
    var now=new Date();
    var hr=now.getHours();

    if(hr>=10&&hr<11){
        $('#wrap').removeClass();
        $('#wrap').addClass('Croissant');
        $('nav li').removeClass();
        $('nav li').eq(0).addClass('on');
        $('#txt').text(myText[0]);
    }else if(hr>=11&&hr<12){
        $('#wrap').removeClass();
        $('#wrap').addClass('Palmiercarre');
        $('nav li').removeClass();
        $('nav li').eq(1).addClass('on');
        $('#txt').text(myText[1]);
    }else if(hr>=12&&hr<13){
        $('#wrap').removeClass();
        $('#wrap').addClass('Pretzel');
        $('nav li').removeClass();
        $('nav li').eq(2).addClass('on');
        $('#txt').text(myText[2]);
    }else if(hr>=13&&hr<20){
        $('#wrap').removeClass();
        $('#wrap').addClass('Baguette');
        $('nav li').removeClass();
        $('nav li').eq(3).addClass('on');
        $('#txt').text(myText[3]);
     }else if(hr >= 20 && hr < 25 && hr>=0 && hr<10) {
        $('#wrap').removeClass();
        $('#wrap').addClass('Ready');
        $('nav li').removeClass();
        $('nav li').eq(4).addClass('on');
        $('#txt').text(myText[4]);
    }

    $('nav li').click(function(){
        var className=$(this).children('a').text();
        var index = $(this).index();
        $('#txt').text(myText[index]);
        console.log(index);
        $('nav li').removeClass();
        $(this).addClass('on');
        $('#wrap').removeClass();
        $('#wrap').addClass(className);
    });
});