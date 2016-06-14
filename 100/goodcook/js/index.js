$(function(){
//lunbo
	number=0;
	function setI(){
		if (number==2) {
			number=0;
		}
		else{
			number++;
		}
		changeTo(number);

	}
	
	A=setInterval(setI,5000);//banner pic time




	bgnum=1;
	function setB(){
		if (bgnum==3) {
			bgnum=1;
		}
		else{
			bgnum++;
		}
		bgchange(bgnum);
	}
	B=setInterval(setB,3000);//bg pic time


	//banner轮播
	function changeTo(num){
		$(".bannerimg").fadeOut().eq(num).fadeIn();
		$(".bannerulist ul li img").eq(0).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(1).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(2).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(num).attr("src","images/list_or.png");

	}
	//背景轮播
	function bgchange(num){
		$(".btn-num img").eq(0).attr("src","images/btn_1.png");
		$(".btn-num img").eq(1).attr("src","images/btn_2.png");
		$(".btn-num img").eq(2).attr("src","images/btn_3.png");
		$(".btn-num img").eq(num-1).attr("src","images/btn_"+num+"_or.png");
		$(".bg img").removeClass("visible").eq(num-1).addClass("visible");
	}


	//背景按钮点击切换
	$(".btn-num img").eq(0).click(function(){
		
		{
		$(".btn-num img").eq(0).attr("src","images/btn_1_or.png");
		$(".btn-num img").eq(1).attr("src","images/btn_2.png");
		$(".btn-num img").eq(2).attr("src","images/btn_3.png");
		$(".bg img").removeClass("visible").eq(0).addClass("visible");
		}
		bgnum=1;
		clearInterval(B);
		B=setInterval(setB,6000);
	})
	$(".btn-num img").eq(1).click(function(){
		clearInterval(B);
		if (number!=2) {
		$(".btn-num img").eq(0).attr("src","images/btn_1.png");
		$(".btn-num img").eq(1).attr("src","images/btn_2_or.png");
		$(".btn-num img").eq(2).attr("src","images/btn_3.png");
		$(".bg img").removeClass("visible").eq(1).addClass("visible");
		}
		bgnum=2;
		B=setInterval(setB,6000);
	})
	$(".btn-num img").eq(2).click(function(){
		clearInterval(B);
		if (number!=3) {
		$(".btn-num img").eq(0).attr("src","images/btn_1.png");
		$(".btn-num img").eq(1).attr("src","images/btn_2.png");
		$(".btn-num img").eq(2).attr("src","images/btn_3_or.png");
		$(".bg img").removeClass("visible").eq(2).addClass("visible");
		}
		bgnum=3;
		B=setInterval(setB,6000);
	})

























	//banner按钮点击切换
	$(".bannerulist ul li img").eq(0).click(function(){
		clearInterval(A);
		if (number!=0) {
		$(".bannerimg").fadeOut().eq(0).fadeIn();
		
		$(".bannerulist ul li img").eq(0).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(1).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(2).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(0).attr("src","images/list_or.png");
		}
		number=0;
		A=setInterval(setI,5000);
	})
	$(".bannerulist ul li img").eq(1).click(function(){
		clearInterval(A);
		if (number!=1)
		{
		$(".bannerimg").fadeOut().eq(1).fadeIn();
		$(".bannerulist ul li img").eq(0).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(1).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(2).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(1).attr("src","images/list_or.png");
		}
		number=1;
		A=setInterval(setI,5000);
	   
	})
	$(".bannerulist ul li img").eq(2).click(function(){
		
		clearInterval(A);
		if (number!=2) {
		$(".bannerimg").fadeOut().eq(2).fadeIn();
		$(".bannerulist ul li img").eq(0).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(1).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(2).attr("src","images/list.png");
		$(".bannerulist ul li img").eq(2).attr("src","images/list_or.png");
		}
		number=2;
		A=setInterval(setI,5000);
	})



})

