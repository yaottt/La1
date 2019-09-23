/*
* @Author: hp
* @Date:   2019-09-05 20:09:29
* @Last Modified by:   hp
* @Last Modified time: 2019-09-09 10:37:14
*/
$(function(){
	$('.list-of .sale-minus').click(function(event){
	$(this).css('opacity','0');
	$('.list-of .sale-plus').css('display','block');
	$('.list-content').animate({'opacity': '0'});
	$('.list-content').slideUp(500)
	

	})
	$('.list-of .sale-plus').click(function(event){
		$(this).css('display','none');
		$('.list-of .sale-minus').css('opacity','1');
		
		$('.list-content').slideDown(500)
		$('.list-content').animate({'opacity': '1'});
	})
	$('.function-list .sale-minus').click(function(event){
		$(this).css('opacity','0');
		$('.function-list .sale-plus').css('display','block');
		$('.function-content').animate({'opacity': '0'});
		$('.function-content').slideUp(500)

	})
	$('.function-list .sale-plus').click(function(event){
		$(this).css('display','none');
		$('.function-list .sale-minus').css('opacity','1');
		$('.function-content').slideDown(500);
		$('.function-content').animate({'opacity': '1'});
	})

var n=0;
	
$('.list-method .btn-list').click(function(event){
	n++;
	// console.log(n)
	if(n>1){
		$('.list-method .icon .down').css('display','none');
		$('.list-method .icon .top').css('opacity','1');
		n=0;
	}else{
		$('.list-method .icon .down').css('display','block');
		$('.list-method .icon .top').css('opacity','0');
	}
	
	})	
$('.list-method .button-menu li').click(function(event) {
	$(this).css('background-color','#005c3e').siblings().css('background-color','#fff');
	$(this).css('color', '#fff').siblings().css('color', '#1b1b1b');
});

$('.sale-right .product-list1').mouseenter(function(event) {
	$(this).children('.product-show').css('opacity','0')
	$(this).children('.product-hide').css('display','block')

});
$('.sale-right .product-list1').mouseleave(function(event) {
	$(this).children('.product-show').css('opacity','1')
	$(this).children('.product-hide').css('display','none')

});

$('.list-banner .list-of').click(function(event) {
	n++;
	// console.log(n)
	if(n>1){
		$('.list-banner .list-content').slideDown(500)
		$('.list-banner .list-content').animate({'opacity':'1'},500);
		n=0;
	}else{
		$('.list-banner .list-content').animate({'opacity':'0'},500);
		$('.list-banner .list-content').slideUp(500)
		
	}

});

$('.list-banner .function-list').click(function(event) {
	n++;
	// console.log(n)
	if(n>1){
		// $('.list-banner .function-content').slideDown(500)
		$('.list-banner .function-content').animate({'opacity':'1'},500);
		n=0;
	}else{
		$('.list-banner .function-content').animate({'opacity':'0'},500);
		// $('.list-banner .function-content').slideUp(500)
		
	}

});

$('.right-btn').click(function(event) {
	$('.list-hide').css('display', 'none');
});
$('.list-btn').click(function(event) {
	$('.list-hide').css('display', 'block');
});

$('.list-content ul li').click(function(event) {
	$(this).css('font-weight', '700');
	$(this).children('.list-hook').css('display', 'block');
});
$('.function-content ul li').click(function(event) {
	$(this).css('font-weight', '700');
	$(this).children('.list-hook').css('display', 'block');
});

$('.sale-right .product-list1').addClass('zoomIn');
$('.sale-right .product-list1').css('opacity', '1');

// $(window).scroll(function(event){
// 	var h1=$(window).scrollTop();

// 	if(h1>-1){
// 		$('.sale-right .product-list1').addClass('fadeIn');
// 		$('.sale-right .product-list1').css('opacity', '1');
// 	}
// })








})
