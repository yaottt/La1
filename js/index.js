/*
* @Author: hp
* @Date:   2019-09-04 10:49:07
* @Last Modified by:   hp
* @Last Modified time: 2019-09-11 18:25:04
*/

$(window).scroll(function(event){

	var h=$(document).scrollTop()
	var a=$('.product-content').offset().top;
	var b=$('.banner1').offset().top;
	var c=$('.banner2').offset().top;
	var d=$('.content-header').offset().top;
	var e=$('.landing-content').offset().top;
	var f=$('.signup').offset().top;
	var g=$('.landing-page-header').offset().top;
	var i=$('.landing-product').offset().top;
	console.log(a,h);

	if(h>=a-300){
		console.log(333)
		$('.product-content').addClass('fadeInUp');
		$('.product-content').css('opacity','1')
	}
	if(h<a-300){
		//  	$('.product-content').removeClass('fadeInUp');
		// $('.product-content').css('opacity','0')
	}

	if(h>b-300){
		$('.banner1').addClass('fadeInUp');
		$('.banner1').css('opacity','1')
	}
	if(h<b-300){
		$('.banner1').removeClass('fadeInUp');
		$('.banner1').css('opacity','0')
	}

	if(h>c-300){
		$('.banner2').addClass('fadeInUp');
		$('.banner2').css('opacity','1')
	}
	if(h<c-300){
		$('.banner2').removeClass('fadeInUp');
		$('.banner2').css('opacity','0')
	}

	if(h>d-300){
		$('.content-header').addClass('fadeInUp');
		$('.content-header').css('opacity','1')
	}
	if(h<d-300){
		$('.content-header').removeClass('fadeInUp');
		$('.content-header').css('opacity','0')
	}

	if(h>e-300){
		$('.landing-content').addClass('fadeInUp');
		$('.landing-content').css('opacity','1')
	}
	if(h<e-300){
		$('.landing-content').removeClass('fadeInUp');
		$('.landing-content').css('opacity','0')
	}

	if(h>f-300){
		$('.signup').addClass('fadeInUp');
		$('.signup').css('opacity','1')
	}
	if(h<f-300){
		$('.signup').removeClass('fadeInUp');
		$('.signup').css('opacity','0')
	}

	if(h>g-300){
		$('.landing-page-header').addClass('fadeInUp');
		$('.landing-page-header').css('opacity','1')
	}
	if(h<g-300){
		$('.landing-page-header').removeClass('fadeInUp');
		$('.landing-page-header').css('opacity','0')
	}

	if(h>i-300){
		$('.landing-product').addClass('fadeInUp');
		$('.landing-product').css('opacity','1')
	}
	if(h<i-300){
		$('.landing-product').removeClass('fadeInUp');
		$('.landing-product').css('opacity','0')
	}







})















