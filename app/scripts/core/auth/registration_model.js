qst.Registration = Backbone.Model.extend({
	url: 		"/v1/users/",

	initialize: function (){},


	fetch: function(user_obj){
		var that = this;
		this.set(user_obj)

		$.ajax({
			type: 'POST',
			url:  _.toSafeUrl(this.url),
			dataType: 'json',
			data: {
				email : user_obj.login, 
				password : user_obj.password,
				name: user_obj.first_name + ' ' + user_obj.last_name,
			}
		})
		.success(function(response, status, xhr){
			that.success(response, status, xhr);
		})
		.error(function(response, status, xhr){
			that.error(response, status, xhr);
		})
	},

	success: function(response, status, xhr){
		var resp = _.toJSON(response);
		if (!!resp) {
			if (!resp.success) {
				this.error();
			// } else if(!!resp.state && resp.state == "PENDING_CONFIRMATION"){
			// 	this.trigger("registration:pending", {login: this.get('login')});
			} else {
				this.trigger("auth:success", 
					{
						response: resp.result,
						user: resp.result.user,
						session:{ token: resp.result.token, uid: resp.result.user.id }
					}
				);
				this.trigger("registration:success");
			}
		} else {
			this.error();
		}
	},

	error : function(e) {
		this.trigger("error", {description:qst.localize('Something went wrong','misc')});
	}
});