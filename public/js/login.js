define(['jquery','cookie'],function($){
	//实现登录功能
	$('#login').click(function(){
		$.ajax({
	    	type:'post',
	    	url:'/api/login',
	    	data:$('#loginForm').serialize(),//获取表单的所有数据
	    	dataType:'json',
	    	success:function(data){
	        	if(data.code==200){
	        		//先保存cookie
	        		$.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
	            	//登陆到主页面
	            	location.href='/main/index'
	        	}else{
	            	alert('用户名或者密码错误');
	        	}
	        
	    	}
		})
		return false;
	});
})