$(function(){
	$(window).scroll(function(event){
	var h1=$(window).scrollTop()
	var h2=$('.down-pic').offset().top;
	var h3=-parseInt((h1-h2)/8);
	if(h1>h2){
		$('.down-pic').css('transform','translate(0px, '+(h3)+'px'+')')
		
	}

})
$(window).scroll(function(event){
	var h1=$(window).scrollTop()
	var h2=$('.introduce-pic').offset().top;
	// console.log(h1)
	var h3=-parseInt((h1-h2)/20);
	if(h1+500>h2){
		$('.introduce-pic').css('transform','translate(0px, '+(h3)+'px'+')')
		
	}

})
})





