;$(function(){
		var kk=parseInt(getCookie(MyPrice).substring(1))/10;
		if(checkCookie(MYnum)||checkCookie(MyPrice)){
			$(".neirong").append('<tr>'+
		  				'<td class="pict"><a href="register.html"><img src="img/proPic/1342.jpg" /></a></td>'+
		  				'<td><p class="MyMes">'+getCookie(MYshopMesg)+'</p>'+
		  				'</p class="MyMes2">'+getCookie(MYshopMesg1)+'</p>'+ 
	                    '</td>'+
		  				'<td>--</td>'+
		  				'<td class="stro">'+getCookie(MyPrice)+'</td>'+
		  				'<td class="bs"><span class="jifeng">'+Math.floor(kk)+'</span></td>'+
		  				'<td>现货</td>'+
		  				'<td>'+
		  					'<span class="jian">-</span>'+
							'<div class="info">'+getCookie(MYnum)+'</div>'+
							'<span class="jia">+</span>'+
		  				'</td>'+
		  				'<td><a class="del" href="javascript:void(0)">删除 </a></td>'+
		  			'</tr>')
		}
	
	$(".jian").click(function(){
		var _td=$(this).parent()
		var _count = _td.find("div").text();
		_count--;
		if(_count<=1){
			_count=1;
			
		}				
		$(this).parent().find("div").text(_count);
		var _tr=_td.parent();
		var _td2=parseInt(_tr.find("td").eq(3).text().substring(1));
		
		if(_count<=1){
			_tr.find("td").eq(3).html("￥5860");
		}else{
			_tr.find("td").eq(3).html("￥"+(_td2-=5860));
		}
		$(".yuan").text("￥"+_td2);
		$(".jianNum").text(_count);
		$(".jifeng").text(Math.floor(_td2/10));
	})
	$(".jia").click(function(){
		var _td=$(this).parent()
		var _count = _td.find("div").text();
		_count++;				
		$(this).parent().find("div").text(_count);
		var _tr=_td.parent();
		var _td2=parseInt(_tr.find("td").eq(3).text().substring(1));
		_tr.find("td").eq(3).html("￥"+(_td2+=5860));
		$(".yuan").text("￥"+_td2);
		$(".jianNum").text(_count);
		$(".jifeng").text(Math.floor(_td2/10));
	})
	$(".del").click(function(){
		deleteCookie(MYnum);
		deleteCookie(MyPrice);
		window.location="shopping.html"
	});
	
	
});