$(function(){

	$(".mainleft a:eq(0)").mouseenter(function(){
		$(".mainleft a:eq(1)").stop().animate({left:"70%"},500);
		$(".mainleft a:eq(2)").stop().animate({left:"80%"},500);
		$(".mainleft a:eq(3)").stop().animate({left:"90%"},500);
	})
		
	$(".mainleft a:eq(1)").mouseenter(function(){
		$(".mainleft a:eq(1)").stop().animate({left:"10%"},500);
		$(".mainleft a:eq(2)").stop().animate({left:"80%"},500);
		$(".mainleft a:eq(3)").stop().animate({left:"90%"},500);
	})
	
	$(".mainleft a:eq(2)").mouseenter(function(){
		$(".mainleft a:eq(1)").stop().animate({left:"10%"},500);
		$(".mainleft a:eq(2)").stop().animate({left:"20%"},500);
		$(".mainleft a:eq(3)").stop().animate({left:"90%"},500);

	})
	$(".mainleft a:eq(3)").mouseenter(function(){
		$(".mainleft a:eq(1)").stop().animate({left:"10%"},500);
		$(".mainleft a:eq(2)").stop().animate({left:"20%"},500);
		$(".mainleft a:eq(3)").stop().animate({left:"30%"},500);

	})
	$(".mainleft").mouseout(function(){
		$(".mainleft a:eq(1)").stop().animate({left:"25%"},500);
		$(".mainleft a:eq(2)").stop().animate({left:"50%"},500);
		$(".mainleft a:eq(3)").stop().animate({left:"75%"},500);
	})







})