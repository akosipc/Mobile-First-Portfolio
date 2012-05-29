$(document).ready(function(){
	function centerContainer(){
		var winH = $(window).height() / 2;
		var conH = $('section.container').height();
		$("section.container").css({'top':winH-conH/2});
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

	if($.browser.msie && $.browser.version == 7){
		$("div.holder section").show();
		alert("Use a higher version of IE for better viewing");
	} else {
		$("div.holder section").hide();	
		centerContainer();
	}

	$("div.divider a#skillz").click(function (e){
		e.preventDefault();

		if($("section#skillz").is(":visible")){ 
			$("section#skillz").slideUp(500, function(){centerContainer();});
		} else {
			closeOthers();
			$("section#skillz").slideDown(500, function(){
				centerContainer();
			});
		}
	});

	$("div.divider a#port").click(function (e){
		e.preventDefault();
		if($("section#port").is(":visible")){
			$("section#port").slideUp(500, function(){centerContainer();
			});
		} else {
			closeOthers();
			$("section#port").slideDown(500, function(){
				centerContainer();
			});
		}
	});
	$("div.divider a#stalk").click(function (e){
		e.preventDefault();
		if($("section#stalk").is(":visible")){
			$("section#stalk").slideUp(500, function(){centerContainer();
			});
		} else {
			closeOthers();
			$("section#stalk").slideDown(500, function(){
				centerContainer();
			});
		}
	});
});