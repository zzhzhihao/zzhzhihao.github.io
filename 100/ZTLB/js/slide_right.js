$(function() {
	$(".selected").click(function() {
		$(".slide_right").css("display","block")
		$(".slide_right,.slide_bot").animate({
			"left": 0,
			"opacity": 1
		}, 250)
		$(".html,.body,.slide_right").addClass("o-n");
	})
	$(".slide_right").click(function(e) {
		e = e || event;
		if (e.target == this||e.target == $(".slide_bot").find("p").get(0)) {
			$(".slide_right,.slide_bot").animate({
				"left": "100%",
				"opacity": 0
			}, 250, function() {
				$(".html,.body,.slide_right").removeClass("o-n");
				$(".slide_right").css("display","none")
			})
		}

	})
	$(".mark").click(function() {
		$(this).css("border-color", "#ff3300").siblings("a").css("border-color", "#e1e1e1")
	})
	var sl_val= $(".suliang").val();;
	$(".suliang").keyup(function() {
		if(sl_val <= 9999){
		 sl_val = $(".suliang").val();	
		}else{
			$(".suliang").val(9999);
		}
		
	})
	$(".sub").click(function() {
		if (sl_val >= 2) sl_val--;
		$(".suliang").val(sl_val);

	})
	$(".add").click(function() {
		if (sl_val <= 9998) sl_val++;
		$(".suliang").val(sl_val);
	})
})