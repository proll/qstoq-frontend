qst.Registration = Backbone.Model.extend({
	url: 		"/v1/users/",

	initialize: function (){},


	fetch: function(user_obj){
		if(this.loading) return;
		this.loading = true;
		var that = this;
		this.set(user_obj)

		$.ajax({
			type: 'POST',
			url:  _.toSafeUrl(this.url),
			dataType: 'json',
			data: {
				email : user_obj.login, 
				password : user_obj.password,
				name: user_obj.name,
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
			this.trigger("registration:success");
		} else {
			this.error(null, null, 'unknown');
		}
	},

	error : function(xhr, status, desc) {
		this.loading = false;
		this.trigger("error", {description: desc});
	}
});