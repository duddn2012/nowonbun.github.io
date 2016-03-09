$(function(){
	temp = $("ul.category_list").html();
	console.log(temp);
	$("ul.top-nav").html(temp);
	$("ul.side-nav").html(temp);
	$("ul.navbar-nav ul").addClass("none");
	$("ul.navbar-nav > li > a").prop("href","#");
	$("ul.navbar-nav > li > a").addClass("dropdown");
	$("a.dropdown").bind("click",function(){
		dom = $(this).parent().children("ul");
		if(dom.hasClass("none")){
			dom.removeClass("none");
		}else{
			dom.addClass("none");
		}
	});
});
function menu(){
	transOnOff($("aside"));
	transOnOff($("main"));
}
function transOnOff(dom){
	if(dom.hasClass("on")){
		dom.removeClass("on");
		dom.addClass("off");
	}else{
		dom.removeClass("off");
		dom.addClass("on");
	}
}
/*
function admin(){
	if($("div.adminbox").hasClass("adminOff")){
		$("div.adminbox").removeClass("adminOff");
		$("div.adminbox").css("top",$("header").css("height"));
		$("div.adminbox").css("left",$("a#adminBtn").offset().left);
	}else{
		$("div.adminbox").addClass("adminOff");
		$("div.adminbox").css("top","-200px");
		$("div.adminbox").css("left",$("a#adminBtn").offset().left);
	}
}*/
