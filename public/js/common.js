define(['jquery','template','cookie'],function($,template){
	//NProgress.start();

	//NProgress.done();
	//控制左侧菜单的折叠和展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	//实现退出功能
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:"json",
			success:function(data){
				if(data.code==200){
					location.href='/main/login'
				}
			}
		});
	});
	//验证是否登录
	var sessionId = $.cookie('PHPSESSID');
	if(!sessionId && location.pathname!='/main/login'){
		//sessionId  不存在 重新跳转到登录页
		location.href= '/main/login'
		
	}

	//获取登录信息
	var loginInfo = $.cookie('loginInfo');
	var info = JSON.parse(loginInfo);

	var tplstr = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
	var html = template.render(tplstr,info);
	$('.aside .profile').html(html);

	// $('.profile img').attr('src',info.tc_avatar);
	// $('.profile h4').html(info.tc_name);
})




