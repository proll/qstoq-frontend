qst.Signin = Backbone.Model.extend({
	url: 		"/v1/auth",
	loading: false,

	initialize: function (){},

	login: function(user_obj){
		if(this.loading) return;
		this.loading = true;
		this.fetch(user_obj);
		return false;
	},

	fetch: function(user_obj){
		var that = this;
		$.ajax({
			type: 'post',
			url:  this.url,
			dataType: 'json',
			data: {
				email : user_obj.login, 
				password : user_obj.password
			}
		})
		.success(function(response, status, xhr){
			that.success(response, status, xhr);
		})
		.error(function(xhr, status, desc){
			that.error(xhr, status, desc);
		})
	},

	success: function(response, status, xhr){
		this.loading = false;
		var resp = _.toJSON(response);
		if (!!resp) {
			this.trigger("auth:success", 
				{
					response: resp.result, 
					user: resp.result.user, 
					session:{ token: resp.result.token, uid: resp.result.user.id }
				}
			);
		} else {
			this.error(null, null, 'unknown');
		}
		// WHP.controller.setTitle();
	},

	error : function(xhr, status, desc) {
		this.loading = false;
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