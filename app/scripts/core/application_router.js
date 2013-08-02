qst.Router = Backbone.Router.extend({
	_previous_route: '',
	previous_route: '',
	previous_page_route: '',

	current_route: '',
	
	_back_path: '',
	back_path: '',

	route_passed: 0,

	context: {},

	routes: {
		"": "landing",
		"/": "landing",
		".": "landing",
		"logout": "logout",

		"items": "itemlist",

		"explore/:category/:story/:sort/:filter/": "explore",
		"explore": "explore",
		
		"photofeed": "photofeed",

		"popular": "popular",
		"photo/:photo/": "photo",

		"profile": "profile",
		"user/:user/": "profile",
		"user/:user/:section": "profile",
		"user/:user/:section/:category/:story/:sort/:filter/": "profile",

		"dialogs": "dialogs",
		"dialogs/:user/": "dialogs",

		"invite": "invite",
		"invite/:sn": "invite",

		"settings": "settings",

		"404": "er404",
		"403": "er403",

		"add/:category/:story/": "add",
		"add": "add",

		"reset": "reset",
		"qst/changepass/:code/:email": "changepass",
		"setpassword": "setpassword",

		"confirmation/:email": 	"confirmationemail",
		"confirmation": 		"confirmation",
		
		'qst/signup_confirm_failed/': "er404",
		'qst/signup_confirmed/': "signup_confirmed",

		"*default": "er404",

	},

	popoup_routes: [
		'auth',
		'photo',
		'add',
	],


	itemlist: function () {
		// console.log("hello itemlist");
	},

	explore: function () {
		// console.log("hello explore");
	},

	photofeed: function () {
		// console.log("hello photofeed");
	},

	popular: function () {
		// console.log("hello popular");
	},

	photo: function () {

		// console.log("hello photo");
	},

	add: function () {
		// console.log("hello add");
	},

	profile: function () {
		// console.log("hello profile");
	},

	landing: function () {
		// console.log("hello landing");
	},

	dialogs: function () {
		// console.log("hello dialogs");
	},

	invite: function () {
		// console.log("hello invite");
	},

	settings: function () {
		// console.log("hello settings");
	},

	reset: function () {
		// console.log("hello reset");
	},

	changepass: function () {
		// console.log("hello changepass");
	},

	setpassword: function () {
		// console.log("hello setpassword");
	},

	confirmationemail: function () {
		// console.log("hello confirmationemail");
	},
	confirmation: function () {
		// console.log("hello confirmation");
	},	
	signup_confirmed: function () {
		// console.log("hello signup_confirmed");
	},

	logout:function(){
		localStorage.clear();
		this.navigate("/");
		window.location.reload();
	},

	er404: function(){
		console.log('no such route ', arguments);
		this.trigger("404", arguments);
		return false;
	},

	er403: function(){
		console.log('access dinied route ', arguments);
		this.trigger("403", arguments);
		return false;
	},

	// Auto reset routes
	initialize: function(){
		var rts = _.uniq(_.values(this.routes));
		_(rts).each(function(destination) {
			this.on("route:" + destination, function(){
				this.route_passed++;

				if(this._previous_route && this._previous_route != destination){
					this.trigger("reset", this._previous_route, destination, this._back_path);
					this.trigger("reset:" + this._previous_route);
				}
				this._previous_route = destination;
				this._back_path = Backbone.history.fragment;



			}, this)


		}, this);

		this.on('reset', function(_previous_route, destination, _back_path) {
			this.back_path = _back_path;
			this.current_route = destination;
			this.previous_route = _previous_route;
			if(!this.isPopup(this.previous_route)) {
				this.previous_page_route = this.previous_route;
			}
		})
	},

	previousWasPopup: function() {
		return this.isPopup(this.previous_route);
	},

	currentIsPopup: function() {
		return this.isPopup(this.current_route);
	},
	isPopup: function(route) {
		return (_.indexOf(this.popoup_routes, route) !== -1)
	},
});