qst.VK = Backbone.Model.extend({
	url: "/v1/auth/vk",
	inited : false,
	wind: null,
	app_id: 3836385,
	// app_id: 3154513,
	// app_id: 2763991,
	// app_id: 3703941,
	redirect_url: qst.root + "/go/close_vk.html",

	loading: false,

	initialize: function (){
		//load facebook module
		// (function(d, s, id) {
		// 	var js, fjs = d.getElementsByTagName(s)[0];
		// 	if (d.getElementById(id)) {return;}
		// 	js = d.createElement(s); js.id = id;
		// 	js.src = "//vk.com/js/api/openapi.js?88";
		// 	fjs.parentNode.insertBefore(js, fjs);
		// }(document, 'script', 'facebook-jssdk'));
	},

	login: function() {
		// if(this.loading) return;
		// this.loading = true;
		var that = this;
		this.wind = _.openWindow2("VK auth", 640, 480);
		this.wind.location.href = "http://oauth.vk.com/authorize?client_id=" + this.app_id + "&scope=photos,offline&response_type=token&display=popup&redirect_uri="+this.redirect_url;
		return false;
	},

	fetch: function(user_obj){
		var that = this,
			signin_url = this.url;

		// connect account if u are authed
		if(qst.is_authed()) {
			signin_url = qst.authUrl(this.url);
		}

		$.ajax({
			type: 'post',
			url: signin_url,
			dataType: 'json',
			data: {
				vkAccessToken : user_obj.token, 
				vkUserId : user_obj.uid
			}
		})
		.success(function(response, status, xhr){
			that.success(response, status, xhr);
		})
		.error(function(data){
			that.error(data);
		})
		// .timeout(function (e) {
		// 	// TODO: сделать чтото при timeout
		// 	// OLD
		// 	// WHP.netTimeOut(e);
		// });
	},
	success:function (response, status, xhr){
		// this.loading = false;
		var resp = _.toJSON(response);
		if (!resp || !resp.success) {
			this.error();
		} else {
			this.trigger("auth:success", 
				{
					response: resp.result, 
					user: resp.result.user, 
					session:{ token: resp.result.token, uid: resp.result.user.id }
				}
			);
		}
	},
	error: function(e){
		// this.loading = false;
		qst.log("auth/VK : error while logging in!");
		this.trigger("error", {description:"Something went wrong"})
	},
});