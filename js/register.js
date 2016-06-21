/*公共js*/
var  myUserName = "myUserName";//cookie中存用户名的键名
var  myPwd = "myPwd";//cookie中密码的键名
var  isLogin = "isLogin";//监测用户是否是登录中
var count=0;
;$(function(){
	$(".userName").focus(function(){//userName的判断
		$(this).css("border","1px solid #7ABD54");
		
		$(".name2").eq(0).css({"display":"block",
								"border":"1px solid #ccc",
								"background":"#F7F7F7"})
						 .html("4-20字符支持数字字母及'_'的组合");
		
	})
	$(".code2").attr("disabled","disable")
	$(".userName").blur(function(){
		var _userName=$(this).val();
		var str=/\s/g;
		var str1=/^\d+$/;
		if(str.test(_userName)){
			$(this).css("border","1px solid red");
			$(".name2").eq(0).css({"border":"1px solid #FFA500",
			                       "background":"#fff9ed"})
			                       .html("不能包含空格");
		}else if(!_userName){
			$(this).css("border","1px solid red");
			$(".name2").eq(0).css({"border":"1px solid #FFA500",
			                       "background":"#fff9ed",
									"display":"block"})
			                       .html("请填写用户名");
		}
//		//var str=/^(?<=\d+\D)[\u4e00-\u9fa5a-zA-Z0-9—\-]{4,20}$/;
		else if(_userName.length<4||_userName.length>20){
		$(this).css("border","1px solid red");
			$(".name2").eq(0).css({"border":"1px solid #FFA500",
			                       "background":"#fff9ed"})
		 $(".name2").eq(0).html("用户名只能为4-20字符，中文占两个字符");
		 }
		else if(str1.test(_userName)){
			$(this).css("border","1px solid red");
			$(".name2").eq(0).css({"border":"1px solid #FFA500",
			                       "background":"#fff9ed"})
		 $(".name2").eq(0).html("用户名不能为重数字");
		}else{
			count++;
			$(".name2").eq(0).css("display","none");
		}
	})
	$(".pwd").focus(function(){
		$(".pwd").css("border","1px solid #7ABD54");
		$(".name2").eq(1).css({"display":"block",
		                       "border":"1px solid #ccc",
							   "background":"#F7F7F7",
		                       "font-size":"8px",
		                       "line-height":"36px"
		                      })
		                      
		                  .html("6-16位字符，建议由字母数字和符号两种以上组合")
	})
	$(".pwd").blur(function(){
		var _pwd=$(".pwd").val();
	//	var str=/^(?!\\d+$|[a-zA-Z]+$)\\w{6,16}$/;
		var str=/^\d+$/
		var str1=/^[a-zA-Z]+$/;
		var str2=/^\W+$/;
		if(_pwd==""){
			$(".pwd").css({"border":"1px solid red"})
			$(".name2").eq(1).css({"border":"1px solid #FFA500",
			                       "background":"#fff9ed",
									"display":"block"})
			                       .html("请填写密码");
		}else if(_pwd.length<6||_pwd.length>16||str.test(_pwd)||str1.test(_pwd)||str2.test(_pwd)){
			$(this).css({"border":"1px solid red"})
			$(".name2").eq(1).css({"line-height":"17px",
			                      "border":"1px solid #FFA500",
			                       "background":"#fff9ed"})
			.html("密码只能是6到16个字符，不能单独使用字母、数字或符号")
		}else{
			count++;
			$(".name2").eq(1).css("display","none")
		}
	}) 
		
	$(".req").focus(function(){
		$(this).css("border","1px solid #7ABD54")
		$(".name2").eq(2).css({"display":"block",
								"border":"1px solid #ccc",
								"background":"#F7F7F7"})
		                  .html("请再次输入密码")
	})
	$(".req").blur(function(){
		var _req=$(".req").val();
		var _pwd=$(".pwd").val();
		if(_req==""){
			$(this).css("border","1px solid red")
			$(".name2").eq(2).css({"border":"1px solid #FFA500",
			                       "background":"#fff9ed",
									"display":"block"})
			                       .html("请填写确认密码");
		}else if(_req!=_pwd){
			
			$(".name2").eq(2).css({"border":"1px solid #FFA500",
			                       "background":"#fff9ed"})
			                       .html("两次输入的密码不一致");
		}else if(_req==_pwd){
			count++;
			$(".name2").eq(2).css("display","none")
		    }
	})
	$(".pho").focus(function(){
		$(this).css("border","1px solid #7ABD54")
		$(".name2").eq(3).css({"display":"block",
								"border":"1px solid #ccc",
								"background":"#F7F7F7"})
		                  .html("完成验证后，您可以用该手机号登陆和找回密码")
	})
	
	$(".pho").blur(function(){
		var _pho=$(".pho").val();
		var _str=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
		if(_pho==""){$(this).css("border","1px solid red");
		$(".name2").eq(3).css({"border":"1px solid #FFA500",
									"display":"block",
			                       "background":"#fff9ed"})
			                       .html("请填写手机号码");
		
		}else if(_str.test(_pho)){
		$(this).css("border","1px solid #7ABD54")	
    	$(".name2").eq(3).css("display","none")
    	count++;
        
		}else{
		$(this).css("border","1px solid red")
		$(".name2").eq(3).css({"border":"1px solid #FFA500",
								"background":"#fff9ed"})
		                  .html("手机格式有误，请输入正确的手机号")
		}
			                       
	})
	$(".code1").blur(function(){
		var _code1=$(".code1").val().replace(/\s+/g,"");
		var _cd=$(".cd");
		if(!_code1){
			_cd.css("display","block")
			$(".code1").css("border-color","red")
			_cd.html("请输入验证码")
		}
		else if(_code1.toUpperCase()!=checkCode.toUpperCase()){
			$(".code1").css("border-color","red");
			_cd.css("display","block")
			_cd.html("验证码错误")
		}else if(_code1.toUpperCase()==checkCode.toUpperCase()){
			$(".code1").css("border-color","#999")
			count++;
			_cd.css("display","none")
		}
	})
	
	$(".sub").on("click",function(){
		
		var _agree=$(".agree");
		var _ree=$(".ree");
		if(!_agree[0].checked){
			_ree.css("display","inline")
		}
		if($(".agree")[0].checked){
		$(".ree").css("display","none");
	}
		$("input").blur();
		var c=1;
		$(".none").each(function(index){
			if($(".none").eq(index).css("display")==="none"){
			c++;
		}
			if(c>6){
				var userName = $(".userName").val();
				var pwd = $(".pwd").val();
				toRegister(userName,pwd);
				window.location="login.html";
			}
		})
		
	});
	$(".btcode").click(function(){
		if($(".code1").val()==""){
			$(".code1").blur();
			$(".pho").blur();
		}else if($(".cd").css("display")=="none"){		
			if($(".name2").css("display")=="none"){
				$(".code2").removeAttr("disabled");
				$(".code2").css("background","#fff")
			}
		}		
	})
	function toRegister(userName,pwd){
//		alert(checkCookie(myUserName))
		
		if(!checkCookie(myUserName)){
			addCookie(myUserName,userName,2);
			addCookie(myPwd,pwd,2);
			addCookie(isLogin,"false",2);
			//window.location = "login.html";
		}else{
			if(getCookie(myUserName) == userName){
				alert("该用户名已经存在，请直接登录");
			}else{
				updateCookie(myUserName,userName,5);
				updateCookie(myPwd,pwd,5);
				updateCookie(isLogin,"false",2);
			}
		}
		//window.location = "index.html"
	}
})















 