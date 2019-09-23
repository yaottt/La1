/*
* @Author: hp
* @Date:   2019-09-04 12:18:27
* @Last Modified by:   hp
* @Last Modified time: 2019-09-04 15:43:30
*/
$(function(){

$(window).scroll(function(event){
	var h=$(window).scrollTop()
	// console.log(h);
	var c=$('.may-header').offset().top;
	var d=$('.may-mid').offset().top;
	var e=$('.may-like').offset().top;
	var f=$('.like').offset().top;
	var g=$('.comment-like').offset().top;
	console.log(e)

	if(h>c-300){
		$('.may-header').addClass('fadeInUp');
		$('.may-header').css('opacity','1')
	}
	if(h<c-300){
		$('.may-header').removeClass('fadeInUp');
		$('.may-header').css('opacity','0')
	}
	if(h>c-200){
		$('.maylike-content').addClass('fadeInUp');
		$('.maylike-content').css('opacity','1')
	}
	if(h<c-200){
		$('.maylike-content').removeClass('fadeInUp');
		$('.maylike-content').css('opacity','0')
	}

	if(h>d-300){
		$('.may-mid').addClass('fadeInUp');
		$('.may-mid').css('opacity','1')
	}
	if(h<d-300){
		$('.may-mid').removeClass('fadeInUp');
		$('.may-mid').css('opacity','0')
	}

	if(h>d-200){
		$('.may-content').addClass('fadeInUp');
		$('.may-content').css('opacity','1')
	}
	if(h<d-200){
		$('.may-content').removeClass('fadeInUp');
		$('.may-content').css('opacity','0')
	}

	if(h>e-300){
		$('.may-like').addClass('fadeInUp');
		$('.may-like').css('opacity','1')
	}
	if(h<e-300){
		$('.may-like').removeClass('fadeInUp');
		$('.may-like').css('opacity','0')
	}

	if(h>e-200){
		$('.step-content').addClass('fadeInUp');
		$('.step-content').css('opacity','1')
	}
	if(h<e-200){
		$('.step-content').removeClass('fadeInUp');
		$('.step-content').css('opacity','0')
	}

	if(h>f-300){
		$('.like').addClass('fadeInUp');
		$('.like').css('opacity','1')
	}
	if(h<f-300){
		$('.like').removeClass('fadeInUp');
		$('.like').css('opacity','0')
	}
	if(h>f-200){
		$('.introduce-content').addClass('fadeInUp');
		$('.introduce-content').css('opacity','1')
	}
	if(h<f-200){
		$('.introduce-content').removeClass('fadeInUp');
		$('.introduce-content').css('opacity','0')
	}

	if(h>g-300){
		$('.comment-like').addClass('fadeInUp');
		$('.comment-like').css('opacity','1')
	}
	if(h<g-300){
		$('.comment-like').removeClass('fadeInUp');
		$('.comment-like').css('opacity','0')
	}

	if(h>g-200){
		$('.comment-content').addClass('fadeInUp');
		$('.comment-content').css('opacity','1')
	}
	if(h<g-200){
		$('.comment-content').removeClass('fadeInUp');
		$('.comment-content').css('opacity','0')
	}
















})

})