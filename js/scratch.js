

	//$('#hamburger').click(function(){   
	
	//$('header nav, #hamburger').toggleClass('open');

//});


// $('#pic0').css('opacity', '0');
// // $('#pic1').css('opacity', '1')

// $( "#pic0" ).slideUp( 300 ).delay( 2000 ).fadeIn( 1000 );





$(document).ready(function(){
	$('#pic0, #pic1, #pic2, #pic3, #pic4, #pic5, #pic6, #pic7, #pic8, #pic9, #pic10, #pic11').hide();
	$("#pic1").fadeIn(3000);
	$("#pic3").fadeIn(4000);
	$("#pic4").fadeIn(5000);

	setTimeout( function () {
	$("#pic2").fadeIn(3000);
	$("#pic0").fadeIn(4000);
	$("#pic5").fadeIn(5000);
	}, 1000)

	setTimeout( function () {
	$("#pic8").fadeIn(3000);
	$("#pic12").fadeIn(3000);
	$("#pic7").fadeIn(4000);
	$("#pic6").fadeIn(5000);
	}, 1200)

	setTimeout( function () {
	$("#pic9").fadeIn(3000);
	$("#pic10").fadeIn(4000);
	$("#pic11").fadeIn(5000);
	}, 1200)
});

$(window).scroll(function() {
	console.log($(window).scrollTop())
})


$("#menu1").click(function(){
	$('html,body').animate({
		scrollTop: $('.my-story').offset().top -100
	}, 1000);
	});

$("#menu1-5").click(function(){
  console.log('dffhfk')
  $('html, body').animate({
    scrollTop: $('.poll-sect').offset().top -100
  }, 1100);
  
} );



$("#menu2").click(function(){
  $('html, body').animate({
    scrollTop: $('.info-grid').offset().top -140
  }, 1000);
  
} );

$('#logo').click(function(){
  $('html, body').animate({
    scrollTop: $('.img-body').offset().top -200
  }, 1500);
} ) ;

$("#menu3").click(function(){
  $('html, body').animate({
    scrollTop: $('.contact-form').offset().top -130
  }, 1200);
  
} );

$('.slider').slick ({
	autoplay: true,
	autoplaySpeed:10000,
	dots:true,
	dotsClass:'myDots',
	prevArrow: '<div class="slick-prev"> < </div>',
	nextArrow: '<div class="slick-next"> > </div>',
	// slidesToShow: 3,

});

$('.slick-next, .slick-prev').hide();


$ ('#hamburger').click(function(){   
	
	$('header nav, #hamburger').toggleClass('open');

});


	
	$(document).ready(function(){
    	$("#expand1").click(function(){
        $(".answer1").slideToggle();
        $('#expand1').toggleClass('turn-down');

    });

});


// $( "button" ).click(function() {
//   $( "#pic0" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
//   $( "pic1" ).slideUp( 300 ).fadeIn( 400 );
// });


// function explode(){
//   alert("Boom!");
// }
// setTimeout(explode, 2000);


