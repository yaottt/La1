$(function(){
 $('.about-team-member').mouseenter(function(event){
 	$(this).children().eq(0).css('transform','scale(1.2)');
 	$(this).children().eq(1).slideDown(500);
 	// $('.about-team-member .circle').css('transform',"scale(1.2)")
 	// $('.member1').slideDown(500)
 })
$('.about-team-member').mouseleave(function(event){
 	$(this).children().eq(0).css('transform',"scale(1)")
 	$(this).children().eq(1).slideUp(500)
 })

var c=0;
var timer2;
function cc(){
	clearInterval(timer2);
	timer2=setInterval(function(event){
		c++;
		$('.about-team-member').eq(c).css('display','block');
		console.log(c);
		if(c>12){clearInterval(timer2);}
	},1000)

}

cc();















})