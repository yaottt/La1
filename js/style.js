$(function(){
	$('.resg').mouseenter(function(event){
	$('.sign-in').css('display','block')
})
$('.dacha-no').click(function(event){
	$('.sign-in').css('display','none')
})

$('.sign-in').mouseleave(function(event){
	$('.sign-in').css('display','none')
})
$('.bag').mouseenter(function(event){
	$('.shopping').css('display','block')
})
$('.dacha-no-2').click(function(event){
	$('.shopping').css('display','none')
})

$('.shopping').mouseleave(function(event){
	$('.shopping').css('display','none')
})
$('.booking').mouseenter(function(event){
	$('.booking-box').css('display','block')
})
// $('.booking').mouseleave(function(event){
// 	$('.booking-box').css('display','none')
// })
$('.dacha-no1').click(function(event){
	$('.booking-box').css('display','none')
})

$('.booking-box').mouseleave(function(event){
	$('.booking-box').css('display','none')
})
$('.booking-email').click(function(event){
	$('.booking-button').css('display','block');
})

$('.sangang').click(function(event){
	$('.cha-pic').show();
	$('.sangang').css('opacity','0');
	$('.search-menu').show();
	$('body').css('overflow-y','hidden')
})
$('.cha-pic').click(function(event){
	$('.sangang').css('opacity','1')
	$(this).hide();
	$('.search-menu').hide();
	$('body').css('overflow-y','')
})









var num=0;
var n=0;
$('.right').click(function(event){
	var index=$(this).index();
num=num+1;
if(num>9){
	num=0;
	$(this).siblings('.nav-menu-ul').css('margin-left',-202*num+'px');
	num=1;
}
$(this).siblings('.nav-menu-ul').animate({'margin-left':-202*num+'px'})
})


$('.left').click(function(event){
	num=num-1;
	if(num<0){
		num=9;
		$(this).siblings('.nav-menu-ul').css('margin-left',-202*num+'px');
		num=8;
	}
	$(this).siblings('.nav-menu-ul').animate({'margin-left':-202*num+'px'})
})
$('.slide-down-content li').mouseenter(function(event){
	var index=$(this).index();
	// $('.nav-menu').eq(index).css('display','block').siblings().css('display','none')
	$('.nav-menu').eq(index).slideDown().siblings().css('display','none')
})
$('.nav-menu').mouseleave(function(event){
	var index=$(this).index();
	// console.log(index)
	$('.nav-menu').eq(index).slideUp()
})
$('.slide-down').mouseleave(function(event){
	var index=$(this).index();
	// console.log(index)
	$('.nav-menu').slideUp();
})
var n=0;
$('.banner-ol li').click(function(event){
var index=$(this).index();
$('.banner-product-text').eq(index).show().siblings('.banner-product-text').hide()
})




//banner
var n=0;
	var timer;
	function aa(){
		clearInterval(timer);
		timer=setInterval(function(event){
			n++;
			if(n==5){
				$('.banner-ol li').eq(0).addClass('current').siblings('li').removeClass('current')
			}
			if(n>5){
				$('.banner-ul').css('left',0+'%');
                n=1;
			}
			$('.banner-ul').animate({'left':-n*100+'%'},500);
			$('.banner-ol li').eq(n).addClass('current').siblings('li').removeClass('current');
			$('.banner-product-text').eq(n).show().siblings('.banner-product-text').hide()
		},5000)
	}
	aa();
	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		aa()
	})
 $('.banner-ol li').click(function(event){
    n=$(this).index();
    $(this).addClass('current').siblings('li').removeClass('current');
    $('.banner-ul').stop().animate({'left':-n*100+'%'},500);
    })
$('.banner-down').hover(function(){
		clearInterval(timer);
	},function(){
		aa()
	})
var timer1;
var m=0;
function bb(){
	clearInterval(timer1);
	timer1=setInterval(function(){
              m++;
              if(m>1){
              	m=0;
              }
              for(var i=0;i<2;i++){
              	$('.banner-top-content').eq(i).css('opacity','0')
              }
              $('.banner-top-content').eq(m).css('opacity','1')
        },5000)

}
bb()

$('.banner-top').hover(function(){
		clearInterval(timer1);
	},function(){
		bb()
	})
var n=0;
var m=0;
$('.banner-top .left').click(function(event){
  m++;
              if(m>1){
              	m=0;
              }
              for(var i=0;i<2;i++){
              	$('.banner-top-content').eq(i).css('opacity','0')
              }
              $('.banner-top-content').eq(m).css('opacity','1')
})
$('.banner-top .right').click(function(event){
  m++;
              if(m>1){
              	m=0;
              }
              for(var i=0;i<2;i++){
              	$('.banner-top-content').eq(i).css('opacity','0')
              }
              $('.banner-top-content').eq(m).css('opacity','1')
})




			var nav=$('.slide-nav');
			var win=$(window);
			var doc=$(document);
			$(window).scroll(function(event){
               if($(document).scrollTop()>=100){
               	$('.slide-nav').addClass('fixed')
               	$('.slide-nav').addClass('banner-color')
               	$('.head-title').addClass('head-title-move')
               	$('.slide-mid .head-title').css('transform','translateX(0%)')
               	$('.slide-left').css('display','none')
               	// $('.head-title2').css('display','block')
               	$('.slide-pic').css('display','none')
               	$('.spa').css('display','none')
               	$('.slide-down-title').css('display','block')
               	$('.slide-down-content').css('width','685px')
               	$('.slide-down-content li a').css({'margin':'0px 10px','font-size':'13px'})

               	
               }else{
               	$('.slide-nav').removeClass('fixed')
               	// $('.slide-mid .head-title').css('display','block')
               	$('.slide-pic').css('display','block')
               	// $('.spa').css('display','block')
               	$('.head-title2').css('display','none')
               	$('.slide-down-title').css('display','none')
               	$('.slide-down-content').css('width','800px')
               	$('.slide-down-content li a').css({'margin':'0px 15px','font-size':'15px'})
               	$('.head-title').removeClass('head-title-move')


               }
			})

$('.product-list').mouseenter(function(event) {
	$(this).children('.product-show').css('display','none')
	$(this).children('.product-hide').css('display','block')

	// console.log($(this).children('.product-hide'))
});
$('.product-list').mouseleave(function(event) {
	$(this).children('.product-show').css('display','block')
	$(this).children('.product-hide').css('display','none')
	
});
   
var num=0;
var n=0;
   $('.product-content-mid .button-left').click(function(event) {
   	num=num-1;
   	if(num<0){
   		num=3;
   		$('.product-content-mid ul').css('left',-num*100+'%');
   		num=2;
   	}
   $('.product-content-mid ul').animate({'left':-num*100+'%'},500);
   	// $('.product-content-mid ol li').eq(num).addClass('active').siblings('').removeClass('active');

   });
   var num=0;
   $('.product-content-mid .button-right').click(function(event) {
   	
   	num=num+1;
   	// if(num==2){
    //         num=0;
    //         $('.product-content-mid ol li').eq(num).addClass('active').siblings('').removeClass('active');
    //     }
   	if(num>3){
   		num=0;
   		$('.product-content-mid ul').css('left',-num*100+'%');
   		num=1;
   	}
   	$('.product-content-mid ul').animate({'left':-num*100+'%'},500);
   	// $('.product-content-mid ol li').eq(num).addClass('active').siblings('').removeClass('active');
   });
var n=0;
$('.product-content-mid .product-ol1 li').click(function(event){
	n=$(this).index();
	$(this).addClass('active').siblings('li').removeClass('active');
    $('.product-content-mid ul').stop().animate({'left':-n*100+'%'},500);
    
})

$('.product-content-mid .product-ol2 li').click(function(event){
	n=$(this).index();
	$(this).addClass('active').siblings('li').removeClass('active');
    $('.product-content-mid ul').stop().animate({'left':-n*100+'%'},500);
})


$('.product-section-text').mouseenter(function(event) {
	$(this).children('.product-show').css('display','none')
	$(this).children('.product-hide').css('display','block')

	// console.log($(this).children('.product-hide'))
});
$('.product-section-text').mouseleave(function(event) {
	$(this).children('.product-show').css('display','block')
	$(this).children('.product-hide').css('display','none')
	
});


var n=0;
$('.landing-page_section .signup-ul li').click(function(event){
	n=$(this).index();
	console.log(n)
	$(this).addClass('current').siblings('li').removeClass('current');
    $('.landing-product').stop().animate({'left':-n*100+'%'},500);
    
})


$('.email-addres .email-text').click(function(event){
	$('.email-addres .submit').show();
})

$('.online-contact').mouseenter(function(event){
	$('.online-hover').show();
})
$('.online-contact').mouseleave(function(event){
	$('.online-hover').hide();
})



$('.back-top').click(function(event){
	$('html,body').animate({'scrollTop':0}, 500)
})



// 第二页
var n=0;
$('.banner-left-ol li').click(function(event){
	n=$(this).index();
	$(this).css('border-bottom','1px solid #1b1b1b').siblings().css('border-bottom','1px solid transparent')

	$('.banner-left-ul').animate({'left':-n*100+'%'},500);
	$('.banner-left-ul li').eq(n).siblings().animate({'opacity':'0'},500)
	$('.banner-left-ul li').eq(n).animate({'opacity':'1'},500)
	console.log(n)

})
var n=0;
$('.banner-left-ol-down li').click(function(event){
	n=$(this).index();
	$(this).addClass('active').siblings().removeClass('active')
	$('.banner-left-ul').animate({'left':-n*100+'%'},500);
	$('.banner-left-ul li').eq(n).siblings().animate({'opacity':'0'},500)
	$('.banner-left-ul li').eq(n).animate({'opacity':'1'},500)
})


var n=0;
	
$('.btn-shopping-again').click(function(event){
	n++;
	// console.log(n)
	if(n>1){
		$('.icon .down').css('display','none');
		$('.icon .top').css('opacity','1');
		n=0;
	}else{
		$('.icon .down').css('display','block');
		$('.icon .top').css('opacity','0');
	}
	
		
})



$(window).scroll(function(event){
	// var h=$('btn-shopping-again').offset().top
	// console.log(h)
// 	$('.btn-shopping-again').click(function(event){
// 	var h=$(this).offset().top;
// 	console.log(h)
// })
var h=$(window).scrollTop()
// console.log(h)
if(h>200){
	$('.dropup .dropdown-menu').css('top','80%')
	// $('.button-menu').css({'position':'absolute','top':'82%','border': '1px solid #ccc','border':'1px solid rgba(0, 0, 0, .15);'})
}else{
	$('.button-menu').css({'position':'absolute','bottom':'80%'})
}
})



// 可能喜欢


$('.tab').click(function(event) {
	$(this).addClass('current').siblings().removeClass('current')
});



$('.dot-down li').click(function(event){
	var n=$(this).index();
	// console.log(n)
	// $('.product-list').eq(n).css('display','block').siblings().css('display','none');
	$(this).addClass('active').siblings('').removeClass('active');
	$('.maylike-pic ul').animate({'left':-100*n+'%'})
})



var num=0;
var n=0;
   $('.product-content-mid1 .button-left').click(function(event) {
   	num=num-1;
   	if(num<0){
   		num=4;
   		$('.pd-list').css('left',-num*33.3+'%');
   		num=3;
   	}
   $('.pd-list').animate({'left':-num*33.3+'%'},500);
   	// $('.product-content-mid ol li').eq(num).addClass('active').siblings('').removeClass('active');

   });
   var num=0;
   $('.product-content-mid1 .button-right').click(function(event) {
   	
   	num=num+1;
   	// if(num==2){
    //         num=0;
    //         $('.product-content-mid ol li').eq(num).addClass('active').siblings('').removeClass('active');
    //     }
   	if(num>4){
   		num=0;
   		$('.pd-list').css('left',-num*33.3+'%');
   		num=1;
   	}
   	$('.pd-list').animate({'left':-num*33.3+'%'},500);
   	// $('.pd-ol li').eq(num).addClass('active').siblings('').removeClass('active');
   });

$('.tab').click(function(event){
	var n=$(this).index();
	console.log(n)
	$('.maylike-pic-top').eq(n).show().siblings().hide();
})


$('.pd-ol li').click(function(event){

    n=$(this).index();
    $(this).addClass('active').siblings('li').removeClass('active');
    $('.pd-list').stop().animate({'left':-n*100+'%'},500);
  
})
$('.pd-ol2 li').click(function(event){

    n=$(this).index();
    $(this).addClass('active').siblings('li').removeClass('active');
    $('.pd-list').stop().animate({'left':-n*33.3+'%'},500);
  
})



// 展开部分
var n=0;
$('.banner-mid .may-size-icon').click(function(event){

	n++;
	if(n>1){
			$(this).children('.plus').css('display','none');
	$(this).children('.minus').css('opacity','1');
	$('.maylike-content').slideDown(500)
	n=0;
	}else{
		$(this).children('.minus').css('opacity','0');
	$(this).children('.plus').css('display','block');

	$('.maylike-content').slideUp(500)
	}
	
}) 
var n=0;
$('.banner-middle .may-size-icon').click(function(event){

	n++;
	if(n>1){
			$(this).children('.plus').css('display','none');
	$(this).children('.minus').css('opacity','1');
	$('.may-content').slideDown(500)
	n=0;
	}else{
		$(this).children('.minus').css('opacity','0');
	$(this).children('.plus').css('display','block');

	$('.may-content').slideUp(500)
	}
	
})

var n=0;
$('.node-step .may-size-icon').click(function(event){

	n++;
	if(n>1){
			$(this).children('.plus').css('display','none');
	$(this).children('.minus').css('opacity','1');
	$('.step-content').slideDown(500)
	n=0;
	}else{
		$(this).children('.minus').css('opacity','0');
	$(this).children('.plus').css('display','block');

	$('.step-content').slideUp(500)
	}
	
})
var n=0;
$('.product-session .may-size-icon').click(function(event){

	n++;
	if(n>1){
			$(this).children('.plus').css('display','none');
	$(this).children('.minus').css('opacity','1');
	$('.introduce-content').slideDown(500)
	n=0;
	}else{
		$(this).children('.minus').css('opacity','0');
	$(this).children('.plus').css('display','block');

	$('.introduce-content').slideUp(500)
	}
	
})
// var n=0;
// $('.product-session .may-size-icon').click(function(event){

// 	n++;
// 	if(n>1){
// 			$(this).children('.plus').css('display','none');
// 	$(this).children('.minus').css('opacity','1');
// 	$('.introduce-content').slideDown(500)
// 	n=0;
// 	}else{
// 		$(this).children('.minus').css('opacity','0');
// 	$(this).children('.plus').css('display','block');

// 	$('.introduce-content').slideUp(500)
// 	}
	
// })


// 倒数第二部分 轮播
var n=0;
$('.introduce-container .right').click(function(event){
	n=n+1;
	if(n>2){
		n=0;
		$('.introduce-ul').css('left',-n*100+'%')
		$('.introduce-ul li').eq(n).siblings().animate({'opacity':'0'},500)
	$('.introduce-ul li').eq(n).animate({'opacity':'1'},500)
		n=1;
	}
	$('.introduce-ul').animate({'left':-n*100+'%'},500)
	$('.introduce-ul li').eq(n).siblings().animate({'opacity':'0'},500)
	$('.introduce-ul li').eq(n).animate({'opacity':'1'},500)

})
var n=0;
$('.introduce-container .left').click(function(event){
	n=n-1;
	if(n<0){
		n=2;
		$('.introduce-ul').css('left',-n*100+'%')
		$('.introduce-ul li').eq(n).siblings().animate({'opacity':'0'},500)
	$('.introduce-ul li').eq(n).animate({'opacity':'1'},500)
		n=1;
	}
	$('.introduce-ul').animate({'left':-n*100+'%'},500)
	$('.introduce-ul li').eq(n).siblings().animate({'opacity':'0'},500)
	$('.introduce-ul li').eq(n).animate({'opacity':'1'},500)

})


// 进度条
$('.event-ul li').hover(function() {
	$(this).children('.grade-prompt').show();
	$(this).css('background-color','#ccc')
	$(this).children().children('.rating').css('background-color','#fff')
}, function() {
	 $(this).children('.grade-prompt').hide();
	 $(this).css('background-color','');
	 $(this).children().children('.rating').css('background-color','#f6f6f6')
}, function() {

});


$('.skin-btn').click(function(event) {
	$(this).css('background-color','transparent')
});

$('.skin-menu').click(function(event) {
	$('.skin-num').css('display','inline-block');
});
var n=0;
$('.comment-btn').click(function(event) {
	n++;
	if(n>1){
			$(this).children('.less-detail').css('display','none');
	$(this).children('.detail').css('opacity','1');
	$('.down-content').slideUp(500)
	n=0;
	}else{
		$(this).children('.detail').css('opacity','0');
	$(this).children('.less-detail').css('display','block');

	$('.down-content').slideDown(500)
	}
});




















})