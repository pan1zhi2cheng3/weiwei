;$(function(){
	$(".juse1 a").attr("href","javascript:void(0)")
	var aa=0;
	$(".txt4").on("click",function(){
		var _txt=$(".txt").val();
		var _txt2=$(".txt2").val();
		var _txtadd1=$(".txtadd1");
		var _txtadd2=$(".txtadd2");
		
		if(_txt2==""){
		  	_txtadd2.text("*请输入密码");
		  	_txtadd2.css({"color":"red","display":"block"});
		  	$(".txt2").focus();
		}
		if(_txt==""){
			_txtadd1.text("*请输入手机号/用户名");
			_txtadd1.css({"color":"red","display":"block"})
			$(".txt").eq(0).focus();		 
		  }
		if(aa>1){
			toLogin(_txt,_txt2)
		}
		
	})
	$(".txt").blur(function(){
		var _txt=$(".txt").val();
		if(_txt.length>2){
			$(".txtadd1").css("display","none")
			aa++;
		}
	})
	$(".txt2").blur(function(){
		var _txt=$(".txt2").val();
		if(_txt.length>4){
			$(".txtadd2").css("display","none")
			aa++;
		}
	})
	function toLogin(userName,pwd){
		if(getCookie(myUserName) != userName){
			alert("无此用户，请先注册");
		}else{//用户名有啦
			if(getCookie(myPwd) != pwd){
				alert("密码错误");
			}else{//密码也对啦
				updateCookie(isLogin,"true",5);
				window.location = "index.html";
			}
		}
	}
	
})
