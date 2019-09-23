/*
* @Author: xxi
* @Date:   2019-09-08 22:25:28
* @Last Modified by:   hp
* @Last Modified time: 2019-09-10 20:33:19
*/
$(function(){
	var n=0;
	$('.login-password .bg-pic').click(function(event) {
		n++;
		if(n>1){
			$(this).css('background-position', '-17px center');
			n=0;
		}else{
		$(this).css('background-position', '0px center');
		}
	});

	var n=0;
	$('.p-box').click(function(event) {
		n++;
		if(n>1){
			$('.p-box .right-icon').css('opacity','0');
			n=0
		}else{
			$('.p-box .right-icon').css('opacity','1');
		}
		
	});
	$('.r-box').click(function(event) {
		n++;
		if(n>1){
			$('.r-box .right-icon').css('opacity','1');
			n=0
		}else{
			$('.r-box .right-icon').css('opacity','0');
		}
		
	});
	$('.a-box').click(function(event) {
		n++;
		if(n>1){
			$('.a-box .right-icon').css('opacity','1');
			n=0
		}else{
			$('.a-box .right-icon').css('opacity','0');
		}
		
	});

	$('.login-content .res a').click(function(event) {
		$('.login-content').css('display','none')
		$('.login-account').css('display','block')
	});
	$('.login-account .login-res a').click(function(event) {
		$('.login-account').css('display','none')
		$('.login-content').css('display','block')
	});


})