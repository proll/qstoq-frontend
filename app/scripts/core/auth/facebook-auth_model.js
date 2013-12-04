qst.FB = Backbone.Model.extend({
	url : "/v1/auth/fb",
	app_id: "137692866413480",
	inited : false,
	access_token : null,
	access_uid : null,

	initialize: function (){
		// window.fbAsyncInit = _.bind(function () {
		// 	//facebook functions
		// 	FB.init({
		// 		appId: this.app_id,
		// 		cookie: true,
		// 		status: true,
		// 		xfbml: true,
		// 		oauth : false });
		// 	FB.Event.subscribe('edge.create', this.fbShareEvents);
		// 	if (_.browser.opera){
		// 		FB.XD._transport="postmessage";
		// 		FB.XD.PostMessage.init();
		// 	}
		// 	FB.getLoginStatus(_.bind(function (response) {
		// 		if (response.status == "connected"){
		// 			qst.log("Facebook : user was succesfully connected! :)");
		// 		}else{
		// 			qst.log("Facebook : user was not connected! :(");
		// 		}
		// 	}, this));

		// }, this);

		// //load facebook module
		// (function(d, s, id) {
		// 	var js, fjs = d.getElementsByTagName(s)[0];
		// 	if (d.getElementById(id)) {return;}
		// 	js = d.createElement(s); js.id = id;
		// 	js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
		// 	fjs.parentNode.insertBefore(js, fjs);
		// }(document, 'script', 'facebook-jssdk'));

		// this.inited = true;
		$.getScript('//connect.facebook.net/en_US/all.js#xfbml=1', _.bind(function () {
			//facebook functions
			FB.init({
				appId: this.app_id,
				cookie: true,
				status: true,
				xfbml:  true,
				oauth : false });
			FB.Event.subscribe('edge.create', this.fbShareEvents);
			if (_.browser.opera){
				FB.XD._transport="postmessage";
				FB.XD.PostMessage.init();
			}
			FB.getLoginStatus(_.bind(function (response) {
				if (response && response.status == "connected"){
					qst.log("Facebook : user was succesfully connected! :)");
				}else{
					qst.log("Facebook : user was not connected! :(");
				}
				if(qst.fbapp && !qst.is_authed()) {
					this.onFBData(response);
				}
			}, this));

			this.inited = true;
		}, this));
	},


	fetch: function(){
		if (this.access_token!=null) {
			var that = this,
				signin_url = this.url;

			// connect account if u are authed
			if(qst.is_authed()) {
				signin_url = qst.authUrl(this.url);
			}

			$.ajax({
				type: 'post',
				url: signin_url,
				data: {
					fbUserId:this.access_uid,
					fbAccessToken : this.access_token 
				},
				dataType: 'json'
			})
			.success(function(response, status, xhr){
				that.success(response, status, xhr);
			})
			.error(function(data){
				that.error(data);
			})
		}
	},

	success: function(response, status, xhr){
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

	error: function(e) {
		qst.log("QST/auth/FB : error while logging in!");
		// TODO слушать ошибку выше
		this.trigger("error", {description:"QST/auth/FB : error while logging in!"})
	},

	

	login : function (e){
		this.access_token = "";
		FB.login(
			_.bind(this.onFBData, this), 
			{ scope: 'publish_actions,publish_stream,user_photos,offline_access,email'}
		);
			// { scope: 'publish_actions,publish_stream,user_photos,offline_access,email,user_birthday'}
		return false;
	},

	loginOG : function (e, _func){
		this.access_token = "";
		FB.login(
			_func, 
			{ scope:'publish_actions,publish_stream,user_photos,offline_access,email,user_birthday'}
		);
	},

	fbShareEvents : function(e){
		qst.log("CreateEdge");
		// TODO:надо слушать это событие гдето
		this.trigger("fb:like", e);

		// OLD
		// if (QST.shares.onFbLike(e))
		// 	return false;

		// if (QST.controller.curPage.onFBlike)
		// {
		// 	QST.controller.curPage.onFBlike(e);
		// }
	},

	onFBData: function(response){
		// QST.pages.getstarted.hidePopup();
		if (response.status == "connected"){
			qst.log("Facebook : user was succesfully connected! :)", response.authResponse );
			var uid = response.authResponse.userID,
				token = response.authResponse.accessToken;
			if (this.access_token!=token){
				qst.log("Facebook : token = ["+token+"]");
				this.access_uid = uid;
				this.access_token = token;
				this.fetch();
			}else{
				qst.log("Facebook : user was not connected! :(");
			}
		}
		// QST.controller.setTitle();
	},
})