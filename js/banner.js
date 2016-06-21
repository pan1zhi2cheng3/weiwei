;$(function(){
	var _tit3=$(".tit3");
	var _h3=_tit3.children("h3");
    _h3.each(function(index){
    	var _index=index;
    	$(this).hover(function(){   		
    		_h3.eq(index).addClass("jiajucheng").siblings().removeClass("jiajucheng");
    		$(".pic-big").css("display","none")
    		$(".pic-big").eq(_index).css("display","block")
    		
    	})
	})
    var _shangbk=$(".shangbk");
    var _zhongbk=$(".zhongbk");
    var _xiabk=$(".xiabk");
    _zhongbk.hover(function(){
    	_shangbk.css({"border-top":"3px solid #fff",
     	             "border-right":"1px solid #131413",
    	              "border-bottom":"1px solid #131413"});
    	_zhongbk.css({"border-top":"3px solid #131413",
    	             "border-right":"1px solid #131413",
    	             "border-bottom":"1px solid #fff", })
    	_xiabk.css({"border-top":"3px solid #fff",
    	             "border-right":"1px solid #fff",
    	             "border-bottom":"1px solid #131413", }); 
     })	
     _xiabk.hover(function(){
     	_shangbk.css({"border-top":"3px solid #fff",
     	             "border-right":"1px solid #fff",
     	             "border-bottom":"1px solid #131413"});
     	_zhongbk.css({"border-top":"3px solid #fff",
    	             "border-right":"1px solid #131413",
    	             "border-bottom":"1px solid #131413" });            
    	_xiabk.css({"border-top":"3px solid #131413",
    	             "border-right":"1px solid #131413",
    	             "border-bottom":"1px solid #fff" })
   })
    _shangbk.hover(function(){
     	_shangbk.css({"border-top":"3px solid #131413",
     	             "border-bottom":"1px solid #fff",
     	             "border-right":"1px solid #131413"});
     	$(".zhongbk,.xiabk").css({"border-top":"3px solid #fff",
    	             "border-right":"1px solid #fff",
    	             "border-bottom":"1px solid #131413", });            

   }) 
   var _knowLeftTit=$(".know-leftTit");
   var _li=_knowLeftTit.children("li");
   _li.each(function(index){
  
   	$(this).hover(function(){
   		$(".know-leftCont").eq(index).css("display","block").siblings(".know-leftCont").css("display","none")
   	})
   })
	
});
