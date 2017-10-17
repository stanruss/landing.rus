$(document).ready(function() {
    
	$('.conf-button').click(function(){
		var widthWindow = $(window).width()-100;
		window.open('http://intrening.ru/lp/zakhaim-kniga/privacy.html','','width='+widthWindow+',height=600,top=100,left=50,toolbar=1');
	});	
	$('.popup-bg').click(function(){		
		$('.popup').fadeOut('slow');
	});	
	$('.head-button').click(function(){
		$('.popup').fadeIn('slow');
		var oft = $(window).scrollTop();
		var ofp = oft + 100;
		$('.popup-content').css('top',ofp);
	});	
	$('.why-button').click(function(){		
		var oft = $(window).scrollTop();
		var ofp = oft + 100;
		$('.popup-content').css('top',ofp);
		$('.popup').fadeIn('slow');
	});		
	if ($(window).width() < 570) {
		var rslider =  $('.reviews-slider ul').bxSlider({
			moveSlides: 1,
			minSlides: 1,
			maxSlides: 2,
			slideWidth: 300,
			slideMargin: 0,
			pager: false,
			infiniteLoop: false,
		});
	}
	else {
	   var rslider =  $('.reviews-slider ul').bxSlider({
			moveSlides: 1,
			minSlides: 1,
			maxSlides: 2,
			slideWidth: 420,
			slideMargin: 0,
			pager: false,
			infiniteLoop: false,
		});
	}	
	$('.phone').mask('+00000000000', {clearIfNotMatch: true,selectOnFocus: true});
    /*
	$('.smscheckbox').change(function(){	
		if ($(this).is(":checked")) {
			$(this).parent().parent().addClass('show-phone');	
			$(this).parent().parent().find(".phone").attr("required", "true");
		} else {
			$(this).parent().parent().removeClass('show-phone');	
			$(this).parent().parent().find(".phone").removeAttr("required");			
		}		
	});
    */
});