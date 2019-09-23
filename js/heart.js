/*
* @Author: hp
* @Date:   2019-09-04 17:22:44
* @Last Modified by:   hp
* @Last Modified time: 2019-09-05 19:47:50
*/
$(function(){
	// 我们的使命
	$(window).scroll(function(event){
	var h1=$(window).scrollTop()
	var h2=$('.down-pic').offset().top;
	var h3=-parseInt((h1-h2)/8);
	if(h1+500>h2){
		$('.down-pic').css('transform','translate(0px, '+(h3)+'px'+')')
		
	}

})
	// 我们的力量
$(window).scroll(function(event){
	var t1=$(window).scrollTop()
	var t2=$('.power-content1 .power-img').offset().top;
	// console.log(h1)
	var t3=-parseInt((t1-t2)/20);
	if(t1+500>t2){
		$('.power-content1 .power-img').css('transform','translate(0px, '+(t3)+'px'+')')
		
	}

})
$(window).scroll(function(event){
	var t1=$(window).scrollTop()
	var t2=$('.power-content2 .power-img').offset().top;
	// console.log(h1)
	var t3=-parseInt((t1-t2)/20);
	if(t1+500>t2){
		$('.power-content2 .power-img').css('transform','translate(0px, '+(t3)+'px'+')')
		
	}

})
$(window).scroll(function(event){
	var t1=$(window).scrollTop()
	var t2=$('.power-content3 .power-img').offset().top;
	// console.log(h1)
	var t3=-parseInt((t1-t2)/20);
	if(t1+500>t2){
		$('.power-content3 .power-img').css('transform','translate(0px, '+(t3)+'px'+')')
		
	}

})
// 团队
$(window).scroll(function(event){
	var t1=$(window).scrollTop()
	var t2=$('.member-top .team-down').offset().top;
	// console.log(t2)
	var t3=-parseInt((t1-t2)/3);
	if(t1+500>t2){
		$('.member-top .team-down').css('transform','translate(0px, '+(t3)+'px'+')')
		
	}

})
$(window).scroll(function(event){
	var t1=$(window).scrollTop()
	var t2=$('.right-pic-down').offset().top;
	// console.log(h1)
	var t3=-parseInt((t1-t2)/10);
	if(t1+800>t2){
		$('.right-pic-down').css('transform','translate(0px, '+(t3)+'px'+')')
		
	}

})
$(window).scroll(function(event){
	var t1=$(window).scrollTop()
	var t2=$('.member-mid').offset().top;
	// console.log(h1)
	var t3=-parseInt((t1-t2)/10);
	// console.log(t1)
	// console.log('t2='+t2);
	if(t1+1000>t2){
		$('.right-pic-top').css('transform','translate(0px, '+(t3)+'px'+')')
		
	}

})




	var n=0;
	var num=0;
	$('.power-content1 .power-container .left').click(function(event) {
		num=num-1;
		if(num<0){
			num=4;
			$('.power-content1 .power-ul').css('left',-num*100+'%')
			num=3;
		}
		$('.power-content1 .power-ul').animate({'left':-num*100+'%'})
		$('.power-content1 .power-content1 .power-ol li').eq(num).addClass('current').siblings('').removeClass('current')
		$('.power-content1 .power-ul li').eq(num).siblings().animate({'opacity':'0'},500)
	   $('.power-content1 .power-ul li').eq(num).animate({'opacity':'1'},500)

	});
	var num=0;
	var n=0;
	$('.power-content1 .power-container .right').click(function(event) {
		num=num+1;
		if(num==4){
            n=0;
            $('.power-content1 .power-ol li').eq(n).addClass('current').siblings('').removeClass('current');
        }
		if(num>4){
			num=0;
			$(' .power-content1 .power-ul').css('left',-num*100+'%')
			num=1;
		}
		$('.power-content1 .power-ul').animate({'left':-num*100+'%'})
		$('.power-content1 .power-ol li').eq(num).addClass('current').siblings('').removeClass('current')
		$('.power-content1 .power-ul li').eq(num).siblings().animate({'opacity':'0'},500)
	   $('.power-content1 .power-ul li').eq(num).animate({'opacity':'1'},500)


	});
	$('.power-content1 .power-ol li').click(function(event){
    n=$(this).index();
    $(this).addClass('current').siblings('li').removeClass('current');
    $('.power-content1 .power-ul').stop().animate({'left':-n*100+'%'},500);
    $('.power-content1 .power-ul li').eq(n).siblings().animate({'opacity':'0'},500)
	   $('.power-content1 .power-ul li').eq(n).animate({'opacity':'1'},500)
    })

    var h=0;
	var num1=0;
	$('.power-content2 .power-container .left').click(function(event) {
		num1=num1-1;
		if(num1<0){
			num1=4;
			$('.power-content2 .power-ul').css('left',-num1*100+'%')
			num1=3;
		}
		$('.power-content2 .power-ul').animate({'left':-num1*100+'%'})
		$('.power-content2 .power-ol li').eq(num1).addClass('current').siblings('').removeClass('current')
		$('.power-content2 .power-ul li').eq(num1).siblings().animate({'opacity':'0'},500)
	    $('.power-content2 .power-ul li').eq(num1).animate({'opacity':'1'},500)

	});
	var num1=0;
	var n1=0;
	$('.power-content2 .power-container .right').click(function(event) {
		num1=num1+1;
		if(num1==4){
            n1=0;
            $('.power-content2 .power-ol li').eq(n1).addClass('current').siblings('').removeClass('current');
        }
		if(num1>4){
			num1=0;
			$(' .power-content2 .power-ul').css('left',-num1*100+'%')
			num1=1;
		}
		$('.power-content2 .power-ul').animate({'left':-num1*100+'%'})
		$('.power-content2 .power-ol li').eq(num1).addClass('current').siblings('').removeClass('current')
		$('.power-content2 .power-ul li').eq(num1).siblings().animate({'opacity':'0'},500)
	    $('.power-content2 .power-ul li').eq(num1).animate({'opacity':'1'},500)


	});
	$('.power-content2 .power-ol li').click(function(event){
    n1=$(this).index();
    $(this).addClass('current').siblings('li').removeClass('current');
    $('.power-content2 .power-ul').stop().animate({'left':-n1*100+'%'},500);
    $('.power-content1 .power-ul li').eq(n1).siblings().animate({'opacity':'0'},500)
	$('.power-content1 .power-ul li').eq(n1).animate({'opacity':'1'},500)
    })

     var h=0;
	var num2=0;
	$('.power-content3 .power-container .left').click(function(event) {
		num2=num2-1;
		if(num2<0){
			num2=4;
			$('.power-content3 .power-ul').css('left',-num2*100+'%')
			num2=3;
		}
		$('.power-content3 .power-ul').animate({'left':-num2*100+'%'})
		$('.power-content3 .power-ol li').eq(num2).addClass('current').siblings('').removeClass('current')
		$('.power-content3 .power-ul li').eq(num2).siblings().animate({'opacity':'0'},500)
	   $('.power-content3 .power-ul li').eq(num2).animate({'opacity':'1'},500)

	});
	var num2=0;
	var n2=0;
	$('.power-content3 .power-container .right').click(function(event) {
		num2=num2+1;
		if(num2==4){
            n2=0;
            $('.power-content3 .power-ol li').eq(n2).addClass('current').siblings('').removeClass('current');
        }
		if(num2>4){
			num2=0;
			$(' .power-content3 .power-ul').css('left',-num2*100+'%')
			num2=1;
		}
		$('.power-content3 .power-ul').animate({'left':-num2*100+'%'})
		$('.power-content3 .power-ol li').eq(num2).addClass('current').siblings('').removeClass('current')
		$('.power-content3 .power-ul li').eq(num2).siblings().animate({'opacity':'0'},500)
	   $('.power-content3 .power-ul li').eq(num2).animate({'opacity':'1'},500)


	});
	$('.power-content3 .power-ol li').click(function(event){
    n2=$(this).index();
    $(this).addClass('current').siblings('li').removeClass('current');
    $('.power-content3 .power-ul').stop().animate({'left':-n2*100+'%'},500);
    $('.power-content1 .power-ul li').eq(n2).siblings().animate({'opacity':'0'},500)
	$('.power-content1 .power-ul li').eq(n2).animate({'opacity':'1'},500)
    })

     var h=0;
	var num3=0;
	$('.clean-content .clean-container .left').click(function(event) {
		num3=num3-1;
		if(num3<0){
			num3=5;
			$('.clean-content .power-ul').css('left',-num3*100+'%')
			num3=4;
		}
		$('.clean-content .power-ul').animate({'left':-num3*100+'%'})
		$('.clean-content .power-ol li').eq(num3).addClass('current').siblings('').removeClass('current')
		$('.clean-content .power-ul li').eq(num3).siblings().animate({'opacity':'0'},500)
	   $('.clean-content .power-ul li').eq(num3).animate({'opacity':'1'},500)

	});
	var num3=0;
	var n3=0;
	$('.clean-content .clean-container .right').click(function(event) {
		num3=num3+1;
		if(num3==5){
            n3=0;
            $('.clean-content .power-ol li').eq(n3).addClass('current').siblings('').removeClass('current');
        }
		if(num3>5){
			num3=0;
			$(' .clean-content .power-ul').css('left',-num3*100+'%')
			num3=1;
		}
		$('.clean-content .power-ul').animate({'left':-num3*100+'%'})
		$('.clean-content .power-ol li').eq(num3).addClass('current').siblings('').removeClass('current');
		$('.clean-content .power-ul li').eq(num3).siblings().animate({'opacity':'0'},500)
	   $('.clean-content .power-ul li').eq(num3).animate({'opacity':'1'},500)


	});
	$('.clean-content .power-ol li').click(function(event){
    n3=$(this).index();
    $(this).addClass('current').siblings('li').removeClass('current');
    $('.clean-content .power-ul').stop().animate({'left':-n3*100+'%'},500);
    $('.clean-content .power-ul li').eq(n3).siblings().animate({'opacity':'0'},500)
	   $('.clean-content .power-ul li').eq(n3).animate({'opacity':'1'},500)
    })


// 鼠标滚轮动画
$(window).scroll(function(event){
	var h=$(window).scrollTop()
	var a=$('.blue-response').offset().top;
	var b=$('.blue-power').offset().top;
	var c=$('.power-content2').offset().top;
	var d=$('.power-content3').offset().top;
	var e=$('.blue-clean').offset().top;
	console.log('a'+c)
	console.log(h)


	if(h>a-300){
		$('.response-head').addClass('fadeInUp');
		$('.response-head').css('opacity','1')
	}
	if(h<a-300){
		$('.response-head').removeClass('fadeInUp');
		$('.response-head').css('opacity','0')
	}
	if(h>a-200){
		$('.response-content').addClass('fadeInUp');
		$('.response-content').css('opacity','1')
	}
	if(h<a-200){
		$('.response-content').removeClass('fadeInUp');
		$('.response-content').css('opacity','0')
	}

	if(h>b-300){
		$('.power-title').addClass('fadeInUp');
		$('.power-title').css('opacity','1')
	}
	if(h<b-300){
		$('.power-title').removeClass('fadeInUp');
		$('.power-title').css('opacity','0')
	}
	if(h>b-200){
		$('.power-content1').addClass('fadeInUp');
		$('.power-content1').css('opacity','1')
	}
	if(h<b-200){
		$('.power-content1').removeClass('fadeInUp');
		$('.power-content1').css('opacity','0')
	}

	if(h>c-500){
		$('.power-content2').addClass('fadeInUp');
		$('.power-content2').css('opacity','1')
	}
	if(h<c-500){
		$('.power-content2').removeClass('fadeInUp');
		$('.power-content2').css('opacity','0')
	}
	if(h>d-600){
		$('.power-content3').addClass('fadeInUp');
		$('.power-content3').css('opacity','1')
	}
	if(h<d-600){
		$('.power-content3').removeClass('fadeInUp');
		$('.power-content3').css('opacity','0')
	}
	if(h>e-500){
		$('.clean-title').addClass('fadeInUp');
		$('.clean-title').css('opacity','1')
	}
	if(h<e-500){
		$('.clean-title').removeClass('fadeInUp');
		$('.clean-title').css('opacity','0')
	}
	if(h>e-200){
		$('.clean-content').addClass('fadeInUp');
		$('.clean-content').css('opacity','1')
	}
	if(h<e-200){
		$('.clean-content').removeClass('fadeInUp');
		$('.clean-content').css('opacity','0')
	}













})
	













})
