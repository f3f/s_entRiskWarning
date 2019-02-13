	/*模拟下拉类表*/
	$(function(){
		$(".mnSelect").hover(
			function(){	
				$(this).find("ul").show();
				$(this).find("p").css("border-right","none");	
			},
			function(){
				$(this).find("ul").hide();
				/*$(this).find("p").css("border-right","1px solid #d9e0e7");*/	
			}
		)
		$(".mnSelect ul li").click(function(){
			var SelTxt = $(this).text();
			$(this).parents(".mnSelect").find("p").text(SelTxt);
			$(this).parent("ul").hide();
		})
	})
		