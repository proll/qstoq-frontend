qst.EmailConfirm = Backbone.Model.extend({
	url: "/v1/users/",
	inited : false,
	defaults: {
		user_obj: {},
		email: '@vk.com',
	},

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

	fetch: function(user_obj){
		this.set({email: user_obj.email});
		var that = this,
			emailconfirm_url = this.url + this.get('user_obj').user.id + '?token=' + this.get('user_obj').session.token + '&lang' + qst.language;

		$.ajax({
			type: 'post',
			url: emailconfirm_url,
			dataType: 'json',
			data: {
				email : user_obj.email, 
			}
		})
		.success(function(response, status, xhr){
			that.success(response, status, xhr);
		})
		.error(function(data){
			that.error(data);
		})
	},

	success:function (response, status, xhr){
		var resp = _.toJSON(response);
		if (!resp || !resp.success) {
			this.error();
		} else {
			var user_obj = this.get('user_obj');
			user_obj.user.email = this.get('email');
			this.trigger("auth:success", user_obj);
		}
	},

	error : function(xhr, status, desc) {
		console.log(xhr, status, desc);
		if(!!xhr.responseText) {
			var resp = _.toJSON(xhr.responseText);
			if(!!resp && !!resp.error) {
				this.trigger("error", resp.error);
				return true;
			}
		}
		this.trigger("error", {});
		return true;
	}
});