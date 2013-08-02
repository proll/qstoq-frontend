qst.VK = Backbone.Model.extend({
	url: "/api/auth/",
	inited : false,
	wind: null,
	app_id: 3154525,
	// app_id: 3154513,
	// app_id: 2763991,
	// app_id: 3703941,
	redirect_url: qst.root + "/go/close_vk.html",

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
		var that = this;
		this.wind = _.openWindow2("VK auth", 640, 480);
		// this.wind.location.href = "https://api.vk.com/oauth/authorize?client_id=" + this.app_id + "&scope=friends,photos,wall,offline&response_type=token&redirect_uri="+this.redirect_url;
		// this.wind.location.href = "https://oauth.vk.com/oauth/authorize?client_id=" + this.app_id + "&scope=photos,friends,wall,audio,offline&response_type=token&display=popup&redirect_uri=https://oauth.vk.com/blank.html";
		this.wind.location.href = "http://oauth.vk.com/authorize?client_id=" + this.app_id + "&scope=photos,friends,wall,offline&response_type=token&display=popup&redirect_uri="+this.redirect_url;
		return false;
	},

	fetch: function(user_obj){
		var that = this;
		$.ajax({
			type: 'GET',
			url:  _.toSafeUrl(this.url),
			dataType: 'json',
			data: {
				social: 'vk', 
				access_token : user_obj.token, 
				vk_id : user_obj.uid
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
		var resp = _.toJSON(response);
		if (resp.error){
			if (resp.error.code == "API_AuthFailed"){
				this.trigger("error", {description:"This account isn't linked with WeHeartPics"});
			} else {
				this.trigger("error", {description:"Something went wrong"});
			}
		} else {
			this.trigger("auth:success", 
				{
					response: resp,
					user: resp.user, 
					session:{ token: resp.user.token, uid: resp.user.id }
				}
			);
		}
	},
	error: function(e){
		qst.log("WHP/auth/VK : error while logging in!");
		this.trigger("error", {description:"Something went wrong"})
	},
});