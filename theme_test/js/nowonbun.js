$(function(){
	initMenu();
	initAside();
});
$(window).resize(function(){
	initAside();
});
function initMenu(){
	temp = $("ul.category_list").html();
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
	$("div.side-list > ul.side-nav > li > ul").parent().children("a").append("<a href='#' class='glyphicon glyphicon-triangle-bottom pull-right' aria-hidden='true' onclick='menuopen($(this));'></a>");
	changeClassState($("div.side-list > ul.side-nav ul"),false);

	if($("div.tistorytoolbar").hasClass("tt_menubar_login")){
		changeClassState($("ul.bs-glyphicons-list > li.logout"),true);
		changeClassState($("ul.bs-glyphicons-list > li.login"),false);
		changeClassState($("ul.bs-glyphicons-list > li.admin"),false);
		$("div#loginstate").addClass("logout");
	}else{
		changeClassState($("ul.bs-glyphicons-list > li.logout"),false);
		changeClassState($("ul.bs-glyphicons-list > li.login"),true);
		changeClassState($("ul.bs-glyphicons-list > li.admin"),false);
		$("div#loginstate").addClass("login");
		myUrl = $("input#myUrl").val();
		$("a.tt_menubar_link").each(function(){
			if($(this).attr("href") === myUrl){
				$("div#loginstate").addClass("admin");
				changeClassState($("ul.bs-glyphicons-list > li.admin"),true);
			}
		});
	}
}
function menuopen(obj){
	if(obj.hasClass("glyphicon-triangle-bottom")){
		obj.removeClass("glyphicon-triangle-bottom");
		obj.addClass("glyphicon-triangle-top");
	}else if(obj.hasClass("glyphicon-triangle-top")){
		obj.removeClass("glyphicon-triangle-top");
		obj.addClass("glyphicon-triangle-bottom");
	}
	dom = obj.parent().parent().children("ul");
	if(dom.hasClass("on")){
		changeClassState(dom,false);
	}else{
		changeClassState(dom,true);
	}
}
function initAside(){
	dom = $("aside");
	changeClassState(dom,false);
	changeClassState($("main"),false);
	dom.css("height",$(window).height());
	dom.css("left",$(window).width() > 300 ? -$(window).width() : -300);
	dom.css("width",0);
	dom.hide();
	$('html').css("overflow","auto");
	$("aside img").prop("src",$("div#blogImage").html());
	
}
function menu(){
	dom = $("aside");
	if(dom.hasClass("on")){
		changeClassState(dom,false);
		changeClassState($("main"),false);
		dom.css("left",$(window).width() > 300 ? -$(window).width() : -300);
		dom.css("width",0);
		dom.hide();
		$('html').css("overflow","auto");
	}else{
		$('html').css("overflow","hidden");
		dom.show();
		dom.css("width",$(window).width());
		dom.css("left",0);
		$("aside > div > div.side-list").css("min-height",$("aside> div").height()-210);
		changeClassState($("main"),true);
		changeClassState(dom,true);
	}
}
function changeClassState(dom,state){
	if(dom.hasClass("on")){
		dom.removeClass("on");
	}
	if(dom.hasClass("off")){
		dom.removeClass("off");
	}
	dom.addClass(state?"on":"off");
}
function login(){
	if($("div#loginstate").hasClass("logout")){
		location.href='https://www.tistory.com/login';
	}
}
function logout(){
	if($("div#loginstate").hasClass("login")){
		location.href='https://www.tistory.com/logout/?requestURI='+$("input#myUrl").val();
	}
}
function addLink(){
	if($("div#loginstate").hasClass("login")){
		location.href="/toolbar/popup/link/";
	}
}
function write(){
	if($("div#loginstate").hasClass("admin")){
		location.href='/admin/entry/post';
	}
}
function admin(){
	if($("div#loginstate").hasClass("admin")){
		location.href='/admin/network/followingLink/';
	}
}
