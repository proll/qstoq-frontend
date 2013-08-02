qst.TW = Backbone.Model.extend({
	url_token: 	"/api/auth/twitter/request_token/",
	url: 		"/api/auth/",

	inited : false,
	req_count : 0,
	req_max : 5,
	curWind : null,

	loading: false,
	oauth_token: 0,

	initialize: function () {
		var js, fjs = document.getElementsByTagName('script')[0];
		if (document.getElementById('twitter-jssdk')) {return;}
		js = document.createElement('script');
		js.id = 'twitter-jssdk';
		$(js).load(function(e){/*console.log("hello twitter platform")*/});
		js.src = "//platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);

		this.inited = true;

		this.on("error", function (obj) {
			console.error(obj)
		}, this)

		// get token for every user that has no auth
		if(!qst.is_authed()) {
			this.req_count = 0;
			this.fetchToken();
		}
	},

	login : function (){
		qst.log("login tw >");
		if(!this.loading) {
			this.curWind = _.openWindow2("Twitter auth", 640, 480);
			this.curWind.location.href = "http://api.twitter.com/oauth/authorize?oauth_token="+this.oauth_token;
		}		
		return false;
	},


	fetchToken : function() {
		if(this.req_count > this.req_max) {
			this.trigger("error", {description: "too many token request to "+this.url_token})
		}; 

		this.loading = true;

		var that = this;
		$.ajax({
			type: 'GET',
			url:  _.toSafeUrl(this.url_token),
			dataType: 'json'
		})
		.success(function(response, status, xhr){
			that.successToken(response, status, xhr)
		})
		.error(function(response, status, xhr){
			that.errorToken(response, status, xhr)
		})
	},

	successToken: function(response, status, xhr){
		var resp = _.toJSON(response);
		this.req_count++;

		if (resp.error){
			this.trigger("error", {description: "WHP/auth/TW : got error while getting twitter token = ["+resp.error.code+"]"})
		}else{
			this.oauth_token = resp.oauth_token;
			this.loading = false;
			qst.log("WHP/auth/TW : get twitter request token = ["+resp.oauth_token+"]");
			this.req_count = 0;
			// this.curWind = _.openWindow3("http://api.twitter.com/oauth/authorize?oauth_token="+resp.oauth_token, "Twitter auth", 640, 480);
		}
	},

	errorToken: function(response, status, xhr){
		this.req_count++;
		this.trigger("error", {description:"WHP/auth/TW : error while logging in!"})

		var status = response.status;
		console.log(response);
		if (status == 0){
			this.trigger("error", {description:"WHP/auth/TW : OFFLINE mode!"})
		}else{
			this.trigger("error", {description:"WHP/auth/TW : error while getting twitter request token! Status = ["+status+"] Tries = ["+this.req_count+"]"})
		}
		this.fetchToken();
	},


	fetch: function(user_obj){
		qst.log("GET TW AUTH = ["+user_obj.uid+" : "+user_obj.token+" : "+user_obj.secret+"]");
		qst.log("WHP/auth/TW : get auth...");

		var that = this;
		$.ajax({
			type: 'GET',
			url:  _.toSafeUrl(this.url),
			dataType: 'json',
			data: {
				social: 'tw', 
				access_token : user_obj.token, 
				access_token_secret : user_obj.secret
			}
		})
		.success(function(response, status, xhr){
			that.success(response, status, xhr)
		})
		.error(function(response, status, xhr){
			that.error(response, status, xhr)
		})
	},

	success: function(response, status, xhr){
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
		this.trigger("error", {description:"WHP/auth/TW : error while logging in!"})
	}
});