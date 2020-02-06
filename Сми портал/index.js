$("nav").hide();

$(document).ready(function() {
	 $(window).load(function() {
		if (screen.width > '1200'){
		$(".click-me").on("click", function() {
			$("nav").fadeToggle();
		});
		} else if (screen.width >= '768' && screen.width <= '1200'){
			$(".click-me").on("click", function() {
			$("nav").fadeToggle();
			$("article").toggleClass("move-1");
		});
		} else if (screen.width <= '767') {
			$(".click-me").on("click", function() {
			$("nav").fadeToggle();
			$("article").toggle();
			$("#click-fun2").toggle();
			$("#click-fun1").toggle();
			});
		}
	});
});