;$(function(){
   $(document).ready(function(){
	//点击收放
	$("#firstpane .menu_body:eq(0)").show();//默认状态下显示
	$("#firstpane h3.menu_head").click(function(){
		$(this).addClass("current").next("div.menu_body").slideToggle().siblings("div.menu_body").slideUp();
		$(this).siblings().removeClass("current");
	});
//			$(this).addClass("current");
//			$(this).next(".menu_body").slideToggle(300);
//			$(this).next(".menu_body").siblings(".menu_body").slideUp("slow");

	
	//划过收放
	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane h3.menu_head").mouseover(function(){
		$(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
	});
  });
	$(".spxq-tit h3").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	var _text=$(".info").text();
	$(".jian").click(function(){
		_text--;
		if(_text<=1){
			_text=1;
		}
		$(".info").text(_text);
	})
	$(".jia").click(function(){
		_text++;
		$(".info").text(_text);
	})
		var zoom = document.getElementById("zoom");
		var smallBox = document.getElementById("small-box");
		var floatBox = document.getElementById("float-box");
		var bigBox = document.getElementById("big-box");
		var img = bigBox.getElementsByTagName("img")[0];
		var smallImg = document.getElementById("smallImg");
		var olis = document.getElementsByClassName("xiaoTu");
		var len = olis.length;
		smallBox.onmouseenter = function(){
			floatBox.style.display = "block";
			bigBox.style.display = "block";
		}
		smallBox.onmouseleave = function(){
			floatBox.style.display = "none";
			bigBox.style.display = "none";
		}
		
		smallBox.onmousemove = function(ev){
			var left = ev.pageX - zoom.offsetLeft - smallBox.offsetLeft - floatBox.offsetWidth/2;
			var top = ev.pageY - zoom.offsetTop  - smallBox.offsetTop- floatBox.offsetHeight/2;
			
			if(left<0){
				left = 0;
			}else if(left > (smallBox.offsetWidth - floatBox.offsetWidth)){
				left = smallBox.offsetWidth - floatBox.offsetWidth;
			}
			
			if(top < 0 ){
				top = 0;
			}else if(top > (smallBox.offsetHeight - floatBox.offsetHeight)){
				top = smallBox.offsetHeight - floatBox.offsetHeight;
			}
			
			floatBox.style.left = left + "px";
			floatBox.style.top = top + "px";
			
			var percentX = left/(smallBox.offsetWidth - floatBox.offsetWidth);
			var percentY = top/(smallBox.offsetHeight - floatBox.offsetHeight);
			console.log(percentX)
			img.style.left = -percentX*(img.offsetWidth - bigBox.offsetWidth)+"px";
			img.style.top = -percentY*(img.offsetHeight - bigBox.offsetHeight)+"px";
			
		}
//		for(var i = 0; i < len; i++ ){
//			olis[i].onclick = (function(num){
//				return function (){
//				for(var j = 0; j < len; j++ ){
//					olis[j].className = "";
//				}	
//					olis[num].className = "active";
//					smallImg.setAttribute("src","img/s"+(num+1)+".jpg");
//					img.setAttribute("src","img/b"+(num+1)+".jpg");
//				}
//			})(i);
//		}
		olis[0].onclick=function(){
			$(".imgOne").addClass("active")	;	
			$(".imgTwo").removeClass("active")
			smallImg.setAttribute("src","img/proPic/cj.jpg");
			img.setAttribute("src","img/proPic/cj.jpg");
		}
		olis[1].onclick=function(){
			$(".imgOne").removeClass("active");
			$(".imgTwo").addClass("active")	;			
			smallImg.setAttribute("src","img/proPic/chaji.jpg");
			img.setAttribute("src","img/proPic/chaji.jpg");
		}
		$(".span0").text(getCookie(MYnum));
		$(".inCar").click(function(){
			$(".motai").css("display","block");
			var shopMes=$(".qyj-tit").text()+$(".num11").text();
			var shopMes1=$(".dx").text();
			var shopNum=$(".info").text();
			var shopPrice=$(".name2").text();
			addCookie(MYshopMesg,shopMes,4);
			addCookie(MYshopMesg1,shopMes1,4);
			addCookie(MYnum,shopNum,4);
			addCookie(MyPrice,shopPrice,4);
			$(".span0").text(shopNum);
			return false
		});
		$(".motaiTop strong").click(function(){
			$(".motai").css("display","none")
			return false
		});
		$("body").click(function(){
			$(".motai").css("display","none")
		});
		$(".motai").click(function(){
			return false;
		});
		$(".aGo").click(function(){
			window.location="index.html"
		})
		$(".aJie").click(function(){
			window.location="shopping.html"
		});
});
