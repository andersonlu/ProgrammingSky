jQuery(function() {
	jQuery('#cycle-prev, #cycle-next').css({opacity: '0'});
	jQuery('.cycleslider-wrap').hover(function(){
		jQuery('#cycle-prev',this).stop().animate({left: '-31', opacity: '1'},200,'easeOutCubic');
		jQuery('#cycle-next',this).stop().animate({right: '-31', opacity: '1'},200,'easeOutCubic');	 
	}, function() {
		jQuery('#cycle-prev',this).stop().animate({left: '-50', opacity: '0'},400,'easeInCubic');
		jQuery('#cycle-next',this).stop().animate({right: '-50', opacity: '0'},400,'easeInCubic');		
	});
	
	jQuery(".cycleslider-wrap").fadeIn(1200);
	jQuery(".slider-wrap .loader").css({display: "none"});
	jQuery("#slider").cycle({
		fx:  "scrollDown",
		speed:  "1600", 
		timeout: "3000",
		easing:  "easeOutBounce",
		next:  "#cycle-next",
		prev:  "#cycle-prev",
		pager:  "#cycle-nav"
	});
});