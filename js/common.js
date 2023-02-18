$(document).ready(function(){

// ------------------스크롤 이벤트-----------------
    var nav=$('nav').offset().top;
    var page1=$('.b1').offset().top-70;
    var page2=$('.b2').offset().top-70;
    var page3=$('.b3').offset().top-70;
    var page4=$('.b4').offset().top-70;
    var page5=$('.b5').offset().top-70;
    var page6=$('#footer').offset().top;
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        // --------------페이지별 스크롤 이벤트--------------
        var page11=$('.b1').offset().top-500;
        var page21=$('.b2').offset().top-500;
        var page31=$('.b3').offset().top-500;
        var page41=$('.b4').offset().top-500;
        var page51=$('.b5').offset().top-500;
        if(page11<=scrollTop){
            $('.c1>div').animate({'opacity':1,'top':0},600,function(){
                $('.c1>ul').animate({'opacity':1,'top':40},600);
            });
        }
        if(page21<=scrollTop){
            $('.c2>div').eq(0).animate({'opacity':1,'left':0},600),
            $('.c2>div').eq(1).animate({'opacity':1,'left':'50%'},600);
        }
        if(page31<=scrollTop){
            $('.swiper-container1').animate({'opacity':1,'top':0},600)
        }
        if(page41<=scrollTop){
            $('#sliderA').animate({'opacity':1,'top':0},600)
        }
        if(page51<=scrollTop){
            $('#sliderB').animate({'opacity':1,'left':0},600)
            $('#sliderC').animate({'opacity':1,'right':0},600)
        }
        // -----------------네비게이션 고정-----------------
        if(nav<scrollTop){
            $('nav,#top').addClass('on');
        }
        if(nav>scrollTop){
            $('nav,#top').removeClass('on');
            $('#top img').attr('src','img/top1.png');
        }
        if(page1<=scrollTop && page2>scrollTop){
            $('.navbar>ul>li>a').removeClass('on');
            $('.navbar>ul>li>a').eq(0).addClass('on');
        }
        if(page2<=scrollTop && page3>scrollTop){
            $('.navbar>ul>li>a').removeClass('on');
            $('.navbar>ul>li>a').eq(1).addClass('on');
        }
        if(page3<=scrollTop && page4>scrollTop){
            $('.navbar>ul>li>a').removeClass('on');
            $('.navbar>ul>li>a').eq(2).addClass('on');
        }
        if(page4<=scrollTop && page5>scrollTop){
            $('.navbar>ul>li>a').removeClass('on');
            $('.navbar>ul>li>a').eq(3).addClass('on');
        }
        if(page5<=scrollTop && page6>scrollTop){
            $('.navbar>ul>li>a').removeClass('on');
            $('.navbar>ul>li>a').eq(4).addClass('on');
        }
        
        
    });
// ---------------네비게이션별 페이지 이동---------------
    $('nav .logo,#top').click(function(){
        $('html,body').animate({scrollTop:0},500);
        $('#top img').attr('src','img/top2.png');
    });
    $('nav ul li').eq(0).click(function(){
        $('html,body').animate({scrollTop:page1},500);
    });
    $('nav ul li').eq(1).click(function(){
        $('html,body').animate({scrollTop:page2},500);
    });
    $('nav ul li').eq(2).click(function(){
        $('html,body').animate({scrollTop:page3},500);
    });
    $('nav ul li').eq(3).click(function(){
        $('html,body').animate({scrollTop:page4},500);
    });
    $('nav ul li').eq(4).click(function(){
        $('html,body').animate({scrollTop:page5},500);
    });
// --------------네비게이션 인디케이터 고정--------------
    $('.navbar>ul>li>a').click(function(){
        $('.navbar>ul>li>a').removeClass('on');
        $(this).addClass('on');
    });

    // -----------------마스크 애니메이션-----------------
    $('.c1>div>img').click(function(){
        $('.c1>div>img').eq(0).toggleClass('on');
    });

// -----------------웹 슬라이드 영역-----------------

var swiper = new Swiper('.swiper-container1', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// -----------------------모바일 슬라이드 영역------------------------
var countA = $('#sliderA .slide_showA > .itemA').length;
var indi_widthA = $('#indicaterA').width();
var widthA = 1180, heightA = 700, autoTimeA = 2500;
// -----------------------------------------------
    $('#sliderA').css({
        position: 'relative',
        overflow: 'hidden',
        width: widthA,
        height: heightA
    });
    $('#sliderA .slide_showA').css({
        position: 'absolute',
        width: countA * widthA,
        overflow: 'hidden'
    });
    $('#sliderA .itemA').css({
        width: widthA,
        height: heightA,
        float: 'left'
    });
    // -----------------------------------------------
    $('.buttonA').css({
        position:'absolute',
        top : heightA/2 - 20
    });
    $('#right-btnA').css({
        right : 0
    });
    $('#indicaterA').css({
        left: (widthA/2) - (indi_widthA/2) 
    });
    $('#indicaterA li:first-child').css({
        backgroundColor : 'black'
    });
    // -----------------------------------------------
    var currentPageA = 0;
    var directionA = true;
    var changePageA;

    function gotoSlideA(currentPageA){    
        $('#sliderA > .slide_showA').stop(true).animate({
            left: -currentPageA * widthA 
        }, 350)
        $('#indicaterA li').css('background-color','');
        $('#indicaterA li').eq(currentPageA).css('background-color','black');
    };
    // -----------------------------------------------
    function startTimerA(){ 
        changePageA = setInterval(function(){
            if(currentPageA == countA-1){
                directionA = false;
            }
            if(currentPageA == 0){
                directionA = true;
            }
            if(directionA == true){
                currentPageA++;
                gotoSlideA(currentPageA);
            }
            if(directionA == false){
                currentPageA=0;
                gotoSlideA(currentPageA);
            }
        },autoTimeA);
    } 
    startTimerA();
    // -----------------------------------------------
    $('#sliderA').mouseover(function(){
        clearInterval(changePageA); 
    })
    $('#sliderA').mouseout(function(){
        startTimerA(); 
    })
    // -----------------------------------------------
    $('#left-btnA').click(function(){
        if (currentPageA > 0){
            currentPageA -= 1;
            gotoSlideA(currentPageA);
        }
    });
    $('#right-btnA').click(function(){
        if (currentPageA < countA - 1){
            currentPageA += 1;
            gotoSlideA(currentPageA);
        }
    });
    // -----------------------------------------------
    $('ul#indicaterA li').click(function(){
        var myindexA = $(this).index();
        currentPageA = myindexA;
        gotoSlideA(currentPageA);
    });
// --------------------ETC 첫번째 슬라이드 영역 --------------------
var countB = $('#sliderB .slide_showB > .itemB').length;
var indi_widthB = $('#indicaterB').width();
var widthB = 800, heightB = 330, autoTimeB = 2000; 
// -----------------------------------------------
    $('#sliderB').css({
        position: 'relative',
        overflow: 'hidden',
        width: widthB,
        height: heightB
    });
    $('#sliderB .slide_showB').css({
        position: 'absolute',
        width: countB * widthB,
        overflow: 'hidden'
    });
    $('#sliderB .itemB').css({
        width: widthB,
        height: heightB,
        float: 'left'
    });
    // -----------------------------------------------
    $('.buttonB').css({
        position:'absolute',
        top : heightB/2 - 20
    });
    $('#right-btnB').css({
        right : 0
    });
    $('#indicaterB').css({
        left: (widthB/2) - (indi_widthB/2) 
    });
    $('#indicaterB li:first-child').css({
        backgroundColor : 'black'
    });

    // -----------------------------------------------
    var currentPageB = 0;
    var directionB = true;
    var changePageB;
    // -----------------------------------------------
    function gotoSlideB(currentPageB){    
        $('#sliderB > .slide_showB').stop(true).animate({
            left: -currentPageB * widthB 
        }, 350)
        $('#indicaterB li').css('background-color','');
        $('#indicaterB li').eq(currentPageB).css('background-color','black');
    };
    // -----------------------------------------------
    function startTimerB(){ 
        changePageB = setInterval(function(){
            if(currentPageB == countB-1){
                directionB = false;
            } 
            if(currentPageB == 0){
                directionB = true;
            } 
            if(directionB == true){
                currentPageB++;
                gotoSlideB(currentPageB);
            } 
            if(directionB == false){
                currentPageB=0;
                gotoSlideB(currentPageB);
            } 
        },autoTimeB);
    } 
    startTimerB(); 
    // -----------------------------------------------
    $('#sliderB').mouseover(function(){
        clearInterval(changePageB); 
        $('.itemB span').addClass('on');
    })
    $('#sliderB').mouseout(function(){
        startTimerB(); 
        $('.itemB span').removeClass('on');
    })
    // -----------------------------------------------
    $('#left-btnB').click(function(){
        if (currentPageB > 0){
            currentPageB -= 1;
            gotoSlideB(currentPageB);
        }
    });
    $('#right-btnB').click(function(){
        if (currentPageB < countB - 1){
            currentPageB += 1;
            gotoSlideB(currentPageB);
        }
    });
    // -----------------------------------------------
    $('ul#indicaterB li').click(function(){
        var myindexB = $(this).index();
        currentPageB = myindexB;
        gotoSlideB(currentPageB);
    });
// ------------ETC 두번째 슬라이드 영역------------
var countC = $('#sliderC .slide_showC > .itemC').length;
var indi_widthC = $('#indicaterC').width(); // 
var widthC = 800, heightC = 330, autoTimeC = 2000;// -----------------------------------------------
    $('#sliderC').css({
        overflow: 'hidden',
        width: widthC,
        height: heightC
    });
    $('#sliderC .slide_showC').css({
        position: 'absolute',
        width: countC * widthC,
        overflow: 'hidden'
    });
    $('#sliderC .itemC').css({
        width: widthC,
        height: heightC,
        float: 'left'
    });
    // -----------------------------------------------
    $('.buttonC').css({
        position:'absolute',
        top : heightC/2 - 20
    });
    $('#right-btnC').css({
        right : 0
    });
    $('#indicaterC').css({
        left: (widthC/2) - (indi_widthC/2) 
    });
    $('#indicaterC li:first-child').css({
        backgroundColor : 'black'
    });
    // -----------------------------------------------
    var currentPageC = 0;
    var directionC = true;
    var changePageC;
    // -----------------------------------------------
    function gotoSlideC(currentPageC){    
        $('#sliderC > .slide_showC').stop(true).animate({
            left: -currentPageC * widthC 
        }, 350)
        $('#indicaterC li').css('background-color','');
        $('#indicaterC li').eq(currentPageC).css('background-color','black');
    };
    // -----------------------------------------------
    function startTimerC(){ 
        changePageC = setInterval(function(){
            if(currentPageC == countC-1){
                directionC = false;
            }
            if(currentPageC == 0){
                directionC = true;
            } 
            if(directionC == true){
                currentPageC++;
                gotoSlideC(currentPageC);
            }
            if(directionC == false){
                currentPageC=0;
                gotoSlideC(currentPageC);
            }
        },autoTimeC);
    } 
    startTimerC();
    // -----------------------------------------------
    $('#sliderC').mouseover(function(){
        clearInterval(changePageC);
        $('.itemC span').addClass('on');
    })
    $('#sliderC').mouseout(function(){
        startTimerC();
        $('.itemC span').removeClass('on');
    })
    $('#left-btnC').click(function(){
        if (currentPageC > 0){
            currentPageC -= 1;
            gotoSlideC(currentPageC);
        }
    });
    $('#right-btnC').click(function(){
        if (currentPageC < countC - 1){
            currentPageC += 1;
            gotoSlideC(currentPageC);
        }
    });
    // -----------------------------------------------
    $('ul#indicaterC li').click(function(){
        var myindexC = $(this).index();
        currentPageC = myindexC;
        gotoSlideC(currentPageC);
    });
    lightbox.option({
        'resizeDuration': 400,
        'fadeDuration':400,
        'fitImagesInViewport': false,
        'positionFromTop': 30,
        'disableScrolling':true
      })
});