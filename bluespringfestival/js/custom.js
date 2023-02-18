$(function(){
    $('.btnMenu').click(function(){
        $('nav').css('top',0);

        // $(this).fadeOut();
        // $('section, nav').addClass('on');
    });
    $('nav li').click(function(){
        $('nav').css('top','-130%');

        var i=$(this).index();
        $('section>div').removeClass('on');
        $('section>div').eq(i).addClass('on');
    });

    $('.box2>p>img').mouseenter(function(){
        $(this).not('.box2>p:nth-child(5)>img').animate({opacity:1});
    });
    $('.box2>p>img').mouseleave(function(){
        $(this).not('.box2>p:nth-child(5)>img').animate({opacity:0.4});
        
    });

    $('.accordion').each(function(){
		var dl=$(this);
		var allDt=dl.find('dt');
		var allDd=dl.find('dd');
		allDd.hide();
		allDt.css('cursor','pointer');
		allDt.click(function(){
			var dt=$(this);
			var dd=dt.next();
            dd.slideToggle();
			allDt.css('cursor','pointer');
			dt.css('cursor','pointer');
		});
	});
    // $('section').click(function(){
    //     $('.btnMenu').fadeIn();
    //     $('section, nav').removeClass('on');
    // });
})