$(document).ready(function(){
	function centerContainer(){
		var winH = $(window).height() / 2;
		var conH = $('section.container').height();
		var H = winH - conH / 2;
		if(H < 0){
			H = 0;
		}
		$("section.container").animate({top : H}, 250);
	}

	function centerArrows(){
		var portH = $("section#port").height() / 2;
		var imageH = $("section#port img").height();

		$("section#port a").animate({top : portH - imageH / 2}, 250);
	}

	function closeOthers(){
		if($("section#skillz").is(":visible")){
			$("section#skillz").slideUp(500);
		}
		if($("section#port").is(":visible")){
			$("section#port").slideUp(500);
		}
		if($("section#stalk").is(":visible")){
			$("section#stalk").slideUp(500);
		}
	}

	function fadingImages(){
		$.each($(".grip ul li:first"), function(){
			$(this).delay(1000).fadeOut(500, function(){
				$(".grip ul li:last").before($(this));
			});
		});
	}

	function resetImages(){
		$.each($(".grip ul li"), function(){
			$(this).show();
		});
	}

	if($.browser.msie && $.browser.version == 7){
		$("div.holder section").show();
		alert("Use a higher version of IE for better viewing");
	} else {
		$("div.holder section").hide();	
		centerContainer();
	}

	$("div#skillz").click(function (e){
		e.preventDefault();
		if($("section#skillz").is(":visible")){ 
			$("section#skillz").slideUp(500, function(){centerContainer();});
			resetImages();
		} else {
			closeOthers();
			$("section#skillz").slideDown(500, function(){
				centerContainer();
			});
			setInterval(function(){
				fadingImages();
				resetImages();
			}, 2000);
		}
	});
	
	$("div#port").click(function (e){
		e.preventDefault();
		centerArrows();
		if($("section#port").is(":visible")){
			$("section#port").slideUp(500, function(){centerContainer();});
		} else {
			closeOthers();
			$("section#port").slideDown(500, function(){
				centerContainer();
			});
		}
	});

	$("div#stalk").click(function (e){
		e.preventDefault();
		if($("section#stalk").is(":visible")){
			$("section#stalk").slideUp(500, function(){centerContainer();});
		} else {
			closeOthers();
			$("section#stalk").slideDown(500, function(){
				centerContainer();
			});
		}
	});
});