require.config({
	baseUrl:'/public/assets',
	paths :{
		jquery:'jquery/jquery',
		cookie:'jquery-cookie/jquery.cookie',
		template:'artTemplate/template-web',
		bootstrap:'bootstrap/js/bootstrap.min',
		common :'../js/common',
		login :'../js/login',
		teacherlist:'../js/teacher-list',
		index:'../js/index',
		util:'../js/util'

	},
	shim:{
		bootstrap :{
			deps:['jquery']
		}
	}
})